<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded shadow z-50">
      Aller au contenu principal
    </a>

    <nav class="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur sticky top-0 z-40" role="navigation" aria-label="Navigation principale">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold text-blue-600 dark:text-blue-500">
          findMe <span class="text-xs font-normal text-gray-400">by GeoLink</span>
        </NuxtLink>
        <div class="flex items-center gap-4">
          <template v-if="auth.isAuthenticated.value">
            <span class="text-sm text-gray-500 hidden sm:inline">{{ auth.user.value?.email }}</span>
            <button @click="auth.logout" type="button" class="text-sm font-medium text-red-600 dark:text-red-400 hover:underline">Déconnexion</button>
          </template>
          <template v-else>
            <NuxtLink to="/auth/login" class="text-sm font-medium hover:underline">Connexion</NuxtLink>
            <NuxtLink to="/auth/register" class="text-sm font-medium bg-blue-600 text-white px-3 py-1.5 rounded shadow-sm hover:bg-blue-700 transition-colors">S'inscrire</NuxtLink>
          </template>
        </div>
      </div>
    </nav>

    <main id="main-content" class="flex-1 focus:outline-none" tabindex="-1">
      <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 py-4 text-center text-xs text-gray-400">
      <p>&copy; 2026 GeoLink Africa. Tous droits réservés.</p>
    </footer>

    <ToastContainer />
  </div>
</template>

<script setup>
const auth = useAuth()
</script>