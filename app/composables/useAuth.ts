import { useApi } from "./useApi";

export type AuthCredentials = {
  email: string;
  password: string;
  remember?: boolean;
};

export type RegisterCredentials = {
  name: string;
  email: string;
  password: string;
};

export type AuthUser = {
  id: string;
  name: string;
  email: string;
};

export type AuthResponse = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export const useAuth = () => {
  const api = useApi();
  const tokenCookie = useCookie<string | null>("auth-token", {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });
  const userCookie = useCookie<string | null>("auth-user", {
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  const user = useState<AuthUser | null>("auth-user", () => {
    return userCookie.value ? JSON.parse(userCookie.value) : null;
  });

  const token = useState<string | null>("auth-token", () => tokenCookie.value ?? null);

  const restored = useState("auth-restored", () => false);

  const loading = ref(false);

  const error = ref<string | null>(null);

  const errorType = ref<"business" | "technical" | null>(null);

  const isAuthenticated = computed(() => !!token.value);

  const restoreSession = () => {
    if (!import.meta.client) {
      return;
    }

    const savedToken = localStorage.getItem("auth-token") || tokenCookie.value;
    const savedUser = localStorage.getItem("auth-user") || userCookie.value;

    if (savedToken) {
      token.value = savedToken;
      tokenCookie.value = savedToken;

      if (savedUser) {
        try {
          user.value = JSON.parse(savedUser);
        } catch {
          user.value = null;
        }
        userCookie.value = savedUser;
      }
    }
  };

  const login = async ({
    email,
    password,
    remember = false,
  }: AuthCredentials) => {
    loading.value = true;
    error.value = null;
    errorType.value = null;

    try {
      const response = await api.post<AuthResponse>("/auth/login", {
        email,
        password,
      });

      token.value = response.token;

      user.value = {
        id: response.id,
        name: response.name,
        email: response.email,
      };

      if (import.meta.client) {
        if (token.value) {
          localStorage.setItem("auth-token", token.value);
          tokenCookie.value = token.value;
        }

        localStorage.setItem("auth-user", JSON.stringify(user.value));
        userCookie.value = JSON.stringify(user.value);

        if (remember) {
          localStorage.setItem("auth-remember", "true");
        } else {
          localStorage.removeItem("auth-remember");
        }
      }

      return user.value;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur de connexion.";

      errorType.value =
        err instanceof Error && err.name === "BusinessError"
          ? "business"
          : "technical";

      throw err;
    } finally {
      loading.value = false;
    }
  };

  const register = async ({ name, email, password }: RegisterCredentials) => {
    loading.value = true;
    error.value = null;
    errorType.value = null;

    try {
      const response = await api.post<AuthResponse>("/auth/register", {
        name,
        email,
        password,
      });

      token.value = response.token;

      user.value = {
        id: response.id,
        name: response.name,
        email: response.email,
      };

      if (import.meta.client) {
        if (token.value) {
          localStorage.setItem("auth-token", token.value);
          tokenCookie.value = token.value;
        }

        localStorage.setItem("auth-user", JSON.stringify(user.value));
        userCookie.value = JSON.stringify(user.value);
      }

      return user.value;
    } catch (err) {
      error.value =
        err instanceof Error
          ? err.message
          : "Erreur lors de la création du compte.";

      errorType.value =
        err instanceof Error && err.name === "BusinessError"
          ? "business"
          : "technical";

      throw err;
    } finally {
      loading.value = false;
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    tokenCookie.value = null;
    userCookie.value = null;

    if (import.meta.client) {
      localStorage.removeItem("auth-token");
      localStorage.removeItem("auth-user");
      localStorage.removeItem("auth-remember");
    }
  };

  if (import.meta.client && !restored.value) {
    restoreSession();
    restored.value = true;
  }

  return {
    user,
    token,
    loading,
    error,
    errorType,
    isAuthenticated,
    login,
    register,
    logout,
    restoreSession,
  };
};
