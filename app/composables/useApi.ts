// composables/useApi.ts
export const useApi = () => {
  const config = useRuntimeConfig();
  const authToken = useCookie<string | null>("findme_token");

  const fetchWithAuth = async <T>(
    url: string,
    options: any = {},
  ): Promise<T> => {
    options.headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (authToken.value) {
      options.headers.Authorization = `Bearer ${authToken.value}`;
    }

    try {
      return await $fetch<T>(`${config.public.apiBaseUrl}${url}`, options);
    } catch (error: any) {
      // Transformation de l'erreur pour uniformiser le message
      if (!navigator.onLine || error.status === 503) {
        error.data = {
          error: { message: "Le service est temporairement indisponible." },
        };
      } else if (error.status === 401) {
        error.data = {
          error: {
            message: "Votre session a expiré. Veuillez vous reconnecter.",
          },
        };
        authToken.value = null; // Nettoyage
      }

      // On rejette l'erreur enrichie
      throw error;
    }
  };

  // ... (votre bloc return reste identique)
  return {
    get: <T>(url: string, options = {}) =>
      fetchWithAuth<T>(url, { ...options, method: "GET" }),
    post: <T>(url: string, body: any, options = {}) =>
      fetchWithAuth<T>(url, { ...options, method: "POST", body }),
    put: <T>(url: string, body: any, options = {}) =>
      fetchWithAuth<T>(url, { ...options, method: "PUT", body }),
    delete: <T>(url: string, options = {}) =>
      fetchWithAuth<T>(url, { ...options, method: "DELETE" }),
  };
};
