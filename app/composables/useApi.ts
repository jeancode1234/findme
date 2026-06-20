// composables/useApi.ts
export const useApi = () => {
  const config = useRuntimeConfig()
  const authToken = useCookie('findme_token') // Stockage sécurisé de la session demandé par le CDC [cite: 38]

  const fetchWithAuth = async <T>(url: string, options: any = {}): Promise<T> => {
    // Fusion des headers
    options.headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    // Ajout automatique du Token JWT si disponible [cite: 1]
    if (authToken.value) {
      options.headers['Authorization'] = `Bearer ${authToken.value}`
    }

    try {
      return await $fetch<T>(`${config.public.apiBaseUrl}${url}`, options)
    } catch (error: any) {
      // Gestion centralisée des états d'erreurs demandée par le Directeur Technique [cite: 23, 31, 33]
      if (!navigator.onLine || error.status === 503) {
        error.customMessage = "Le service est temporairement indisponible. Vérifiez votre connexion internet." [cite: 39]
      } else if (error.status === 401) {
        error.customMessage = "Votre session a expiré. Veuillez vous reconnecter."
        authToken.value = null // Nettoyage
      } else {
        error.customMessage = error.data?.error?.message || "Une erreur inattendue est survenue." [cite: 39]
      }
      throw error
    }
  }

  return {
    get: <T>(url: string, options = {}) => fetchWithAuth<T>(url, { ...options, method: 'GET' }),
    post: <T>(url: string, body: any, options = {}) => fetchWithAuth<T>(url, { ...options, method: 'POST', body }),
    put: <T>(url: string, body: any, options = {}) => fetchWithAuth<T>(url, { ...options, method: 'PUT', body }),
    delete: <T>(url: string, options = {}) => fetchWithAuth<T>(url, { ...options, method: 'DELETE' }),
  }
}