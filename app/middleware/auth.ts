// middleware/auth.ts
import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuthenticated, user, me } = useAuth()

  // 1. Tenter de récupérer le profil si on a un token mais pas d'utilisateur chargé
  if (!user.value && useCookie('findme_token').value) {
    await me()
  }

  // 2. Si non authentifié, rediriger vers login
  if (!isAuthenticated.value) {
    if (to.path !== '/auth/login' && to.path !== '/auth/register') {
      return navigateTo('/auth/login')
    }
    return // Autoriser l'accès aux pages de login/register
  }

  // 3. Gestion des accès par rôle (Protection Admin)
  if (to.path.startsWith('/admin') && user.value?.role !== 'admin') {
    return navigateTo('/dashboard') // Rediriger l'utilisateur vers son propre dashboard
  }

  // 4. Si déjà connecté et qu'il essaie d'aller sur le login, le renvoyer vers son dashboard
  if ((to.path === '/auth/login' || to.path === '/auth/register') && isAuthenticated.value) {
    return user.value?.role === 'admin' ? navigateTo('/admin/dashboard') : navigateTo('/dashboard')
  }
})