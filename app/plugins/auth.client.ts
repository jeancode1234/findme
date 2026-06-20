// plugins/auth.client.ts ou middleware/auth.client.ts
export default defineNuxtPlugin((nuxtApp) => {
  // On récupère le composable d'authentification
  const auth = useAuth()

  // 🛠️ SÉCURITÉ : On vérifie d'abord que 'auth' existe bien, 
  // puis on utilise l'accès optionnel (?.) ou un déballage sécurisé
  const isAuth = auth && typeof auth.isAuthenticated !== 'undefined' ? auth.isAuthenticated.value : false

  if (isAuth) {
    // Votre logique si l'utilisateur est connecté
    const logger = useLogger()
    logger.debug("Plugin Client : Session utilisateur active détectée", "AUTH")
  }
})