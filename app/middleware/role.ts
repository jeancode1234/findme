// middleware/role.ts
export default defineNuxtRouteMiddleware((to) => {
  const { user, hasRole } = useAuth();

  // 1. Si l'utilisateur n'est pas connecté, retour au login
  if (!user.value) {
    return navigateTo("/auth/login");
  }

  // 2. Récupération du rôle requis défini sur la page de destination
  const requiredRole = to.meta.requiredRole as string;

  // 3. Si la page demande un rôle spécifique et que l'utilisateur ne l'a pas
  if (requiredRole && !hasRole.value(requiredRole)) {
    // Redirection vers une page 403 (Non autorisé) ou vers son espace par défaut
    return navigateTo("/dashboard");
  }
});
