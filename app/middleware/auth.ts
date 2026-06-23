// middleware/auth.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { me, isAuthenticated } = useAuth();

  // On tente de récupérer le profil utilisateur via le token (cookie)
  await me();

  // Si l'utilisateur n'est pas authentifié et essaie d'accéder au dashboard
  if (!isAuthenticated.value && to.path.includes("/dashboard")) {
    return navigateTo("/auth/login");
  }
});
