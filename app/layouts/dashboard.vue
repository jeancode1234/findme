<template>
  <div class="min-h-screen bg-slate-50 flex">
    <aside
      class="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-6"
    >
      <div>
        <NuxtLink
          to="/"
          class="text-2xl font-extrabold text-slate-900 flex items-center gap-2 mb-10"
        >
          <span class="text-emerald-500">📍</span> findMe
        </NuxtLink>

        <nav class="space-y-2">
          <NuxtLink
            to="/dashboard"
            class="flex items-center gap-3 p-3 rounded-xl bg-slate-900 text-white font-medium"
          >
            <span>🔲</span> Tableau de bord
          </NuxtLink>
          <NuxtLink
            to="/dashboard/addresses"
            class="flex items-center gap-3 p-3 text-slate-600 hover:bg-slate-100 rounded-xl"
          >
            <span>📍</span> Mes adresses
          </NuxtLink>
          <NuxtLink
            to="/dashboard/create"
            class="flex items-center gap-3 p-3 text-slate-600 hover:bg-slate-100 rounded-xl"
          >
            <span>➕</span> Créer une adresse
          </NuxtLink>
          <NuxtLink
            to="/dashboard/favorites"
            class="flex items-center gap-3 p-3 text-slate-600 hover:bg-slate-100 rounded-xl"
          >
            <span>❤️</span> Favoris
          </NuxtLink>
        </nav>
      </div>

      <div class="border-t pt-6">
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold"
          >
            JB
          </div>
          <div>
            <p class="text-sm font-bold text-slate-900">Jean-Baptiste</p>
            <p class="text-[10px] text-emerald-600 font-bold uppercase">
              Premium Account
            </p>
          </div>
          <button @click="logout" class="ml-auto text-slate-400">➔</button>
        </div>
      </div>
    </aside>

    <div class="flex-1 flex flex-col">
      <header
        class="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8"
      >
        <div class="relative w-96">
          <input
            type="text"
            placeholder="Rechercher une adresse ou un lieu..."
            class="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm border-none focus:ring-2 focus:ring-emerald-500"
          />
          <span class="absolute left-3 top-2.5 text-slate-400">🔍</span>
        </div>
        <div class="flex items-center gap-6">
          <span class="text-xl">🔔</span>
          <span class="text-xl">❓</span>
          <NuxtLink
            to="/dashboard/create"
            class="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm"
          >
            + Nouvelle adresse
          </NuxtLink>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
const { logout } = useAuth();
</script>