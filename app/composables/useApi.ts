import { useToast } from "./useToast";
import { useLogger } from "./useLogger";
import { BusinessError, TechnicalError } from "./errors";

type ApiRequestOptions = RequestInit & {
  body?: unknown;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useApi = () => {
  const toast = useToast();
  const logger = useLogger();

  const interceptRequest = (url: string, options: ApiRequestOptions) => {
    const intercepted = {
      url,
      options: {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...(options.headers as Record<string, string>),
        },
      },
    };

    logger.info("Intercepteur de requête", {
      url: intercepted.url,
      method: intercepted.options.method ?? "GET",
    });

    return intercepted;
  };

  const interceptResponse = async <T>(
    response: Response,
    url: string,
  ): Promise<T> => {
    if (response.ok) {
      const data = await response.json().catch(() => null);

      logger.info("Intercepteur de réponse réussie", {
        url,
        status: response.status,
        data,
      });

      return data as T;
    }

    const json = await response.json().catch(() => null);

    const message = json?.message || `Erreur serveur ${response.status}`;

    logger.warn("Intercepteur de réponse en erreur", {
      url,
      status: response.status,
      body: json,
    });

    throw new TechnicalError(message);
  };

  const handleError = (error: unknown): never => {
    const message =
      error instanceof Error ? error.message : "Erreur technique inconnue.";

    const isBusinessError = error instanceof BusinessError;

    const isTechnicalError =
      error instanceof TechnicalError ||
      /network|fetch|timeout|502|503|504|ECONNREFUSED/i.test(message);

    if (isBusinessError) {
      logger.warn("Exception métier interceptée", {
        message,
      });

      toast.error(message);
    } else if (isTechnicalError) {
      logger.error("Exception technique interceptée", {
        message,
        error,
      });

      toast.error(
        "Une erreur technique est survenue. Vérifiez votre connexion et réessayez.",
      );
    } else {
      logger.error("Erreur inconnue interceptée", {
        message,
        error,
      });

      toast.error(message);
    }

    throw error;
  };

  const fakeAuthRequest = async <T>(
    url: string,
    options: ApiRequestOptions,
  ): Promise<T> => {
    await delay(500);

    const payload = options.body ? JSON.parse(options.body as string) : {};

    if (url === "/auth/register") {
      if (!payload.name || !payload.email || !payload.password) {
        throw new BusinessError(
          "Tous les champs sont requis pour l’inscription.",
        );
      }

      return {
        id: String(Date.now()),
        name: payload.name,
        email: payload.email,
        token: "fake-jwt-token",
      } as T;
    }

    if (url === "/auth/login") {
      if (!payload.email || !payload.password) {
        throw new BusinessError(
          "Veuillez renseigner l'email et le mot de passe.",
        );
      }

      return {
        id: "1",
        name: "Utilisateur findMe",
        email: payload.email,
        token: "fake-jwt-token",
      } as T;
    }

    throw new TechnicalError(`Point de terminaison introuvable : ${url}`);
  };

  const request = async <T>(
    url: string,
    options: ApiRequestOptions = {},
  ): Promise<T> => {
    const intercepted = interceptRequest(url, options);

    try {
      if (url.startsWith("/auth/")) {
        return await fakeAuthRequest<T>(intercepted.url, intercepted.options);
      }

      const response = await fetch(intercepted.url, intercepted.options);

      return await interceptResponse<T>(response, intercepted.url);
    } catch (error) {
      return handleError(error);
    }
  };

  const post = async <T>(url: string, body: unknown): Promise<T> => {
    return await request<T>(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
  };

  return {
    request,
    post,
  };
};
