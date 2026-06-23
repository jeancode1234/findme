// middleware/auth.ts
export default defineNuxtRouteMiddleware(async (to) => {
  const { me, isAuthenticated, user } = useAuth();

  // 1. Tenter de rafraîchir l'état utilisateur à chaque navigation
  await me();

  // 2. Cas : Utilisateur DÉJÀ connecté
  // S'il essaie d'accéder à /auth/login ou /auth/register, on le renvoie au dashboard
  if (isAuthenticated.value && to.path.startsWith("/auth")) {
    const dashboard =
      user.value?.role === "admin" ? "/admin/dashboard" : "/dashboard";
    return navigateTo(dashboard);
  }

  // 3. Cas : Utilisateur NON connecté
  // S'il essaie d'accéder à une route protégée (/dashboard ou /admin), on le renvoie au login
  if (
    !isAuthenticated.value &&
    (to.path.includes("/dashboard") || to.path.includes("/admin"))
  ) {
    return navigateTo("/auth/login");
  }
});
