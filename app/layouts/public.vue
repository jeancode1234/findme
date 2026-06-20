<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
    <header class="w-full bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50 px-4 py-3 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-extrabold text-brand dark:text-brand-light flex items-center gap-1" aria-label="findMe - Accueil">
        findMe <span class="text-accent text-sm font-medium">by GeoLink</span> [cite: 1]
      </NuxtLink>
      
      <div class="flex items-center gap-4">
        <button 
          @click="toggleTheme" 
          class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
          :aria-label="isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'"
        >
          <span v-if="isDarkMode">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
    </header>

    <main class="flex-1 w-full max-w-md mx-auto md:max-w-4xl px-4 py-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
const { isDarkMode, toggleTheme, initTheme } = useTheme()
onMounted(() => initTheme())
</script>