<template>
  <footer class="bg-slate-950 text-slate-200">
    <div class="mx-auto max-w-7xl space-y-8 px-6 py-14 sm:px-8">
      <div class="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <h2 class="mb-4 text-2xl font-semibold text-white">findMe</h2>
          <p class="max-w-lg text-sm leading-7 text-slate-400">
            findMe simplifie l'accès aux adresses numériques, optimise les livraisons et connecte les acteurs du terrain.
          </p>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold text-white">Liens rapides</h3>
          <ul class="space-y-3 text-sm text-slate-400">
            <li><NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink></li>
            <li><NuxtLink to="/auth/login" class="hover:text-white">Connexion</NuxtLink></li>
            <li><NuxtLink to="/auth/register" class="hover:text-white">Inscription</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-semibold text-white">Contact</h3>
          <p class="text-sm text-slate-400">support@findme.africa</p>
          <p class="mt-3 text-sm text-slate-400">+237 699 123 456</p>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © 2026 findMe. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
