<template>
  <div class="max-w-3xl p-8">
    <h1 class="text-2xl font-extrabold mb-6">Paramètres</h1>
    <div class="bg-white p-6 rounded-2xl border border-slate-100 space-y-6">
      <div>
        <h3 class="font-bold">Informations personnelles</h3>
        <p class="text-sm text-slate-500">Gérez vos informations de compte.</p>
        <div class="mt-4 space-y-4">
          <input
            type="text"
            value="Jean-Baptiste"
            class="border p-3 rounded-xl w-full"
          />
          <input
            type="email"
            value="jb@exemple.com"
            class="border p-3 rounded-xl w-full"
          />
        </div>
      </div>
      <button class="bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold">
        Sauvegarder
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "dashboard" });
</script>