<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans pb-16 md:pb-0 md:pl-64">
    <aside class="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4">
      <div class="font-bold text-lg mb-6 text-brand">findMe Dashboard</div>
      <nav class="flex flex-col gap-2">
        <NuxtLink to="/dashboard" class="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Mes Adresses</NuxtLink>
        <NuxtLink to="/addresses/create" class="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Ajouter une adresse</NuxtLink>
      </nav>
    </aside>

    <main class="flex-1 p-4 max-w-md mx-auto w-full md:max-w-full">
      <slot />
    </main>

    <nav class="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-around items-center z-50" aria-label="Navigation principale mobile">
      <NuxtLink to="/dashboard" class="flex flex-col items-center text-xs gap-1" active-class="text-brand font-bold">
        <span>📍</span>
        <span>Adresses</span>
      </NuxtLink>
      <NuxtLink to="/addresses/create" class="flex flex-col items-center text-xs gap-1" active-class="text-brand font-bold">
        <span>➕</span>
        <span>Créer</span>
      </NuxtLink>
      <NuxtLink to="/support" class="flex flex-col items-center text-xs gap-1" active-class="text-brand font-bold">
        <span>💬</span>
        <span>Support</span>
      </NuxtLink>
    </nav>
  </div>
</template>