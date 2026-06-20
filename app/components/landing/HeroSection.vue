<!-- components/landing/HeroSection.vue -->
<template>
  <section
    class="py-12 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-200"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <span
          class="inline-block text-xs font-bold tracking-wider uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4 dark:bg-emerald-950/50 dark:text-emerald-400"
        >
          📍 Présent au Cameroun
        </span>
        <h1
          class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6"
        >
          L'adresse précise pour chaque citoyen,
          <span class="text-emerald-600">partout au Cameroun.</span>
        </h1>
        <p class="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-lg">
          Révolutionnez la logistique et l'adressage numérique avec findMe par
          GeoLink Africa. Localisez n'importe quel point en quelques secondes
          avec une précision chirurgicale.
        </p>

        <!-- Barre de recherche rapide -->
        <form
          @submit.prevent="onSearch"
          class="flex flex-col sm:flex-row gap-3 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm max-w-md"
        >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Entrer un quartier, une rue..."
            class="bg-transparent px-4 py-3 text-sm flex-1 focus:outline-none text-slate-900 dark:text-white"
            aria-label="Rechercher un quartier ou une rue"
          />
          <BaseButton
            type="submit"
            class="!w-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2 px-6"
          >
            Rechercher
          </BaseButton>
        </form>
      </div>

      <!-- Visuel Droite -->
      <div class="relative flex justify-center">
        <div
          class="w-full max-w-md h-80 md:h-96 bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md flex items-center justify-center text-slate-400"
        >
          <!-- Remplacer par l'image finale de la maquette -->
          <span>[Illustration Utilisatrice & App findMe]</span>
        </div>
        <!-- Badge flottant d'adresse simulé -->
        <div
          class="absolute bottom-6 left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-pulse"
        >
          <div
            class="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600"
          >
            📍
          </div>
          <div>
            <p class="text-xs text-slate-400 font-medium">VOTRE ADRESSE</p>
            <p class="text-sm font-bold text-slate-900 dark:text-white">
              YA-O-8214
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const searchQuery = ref("");
const emit = defineEmits(["search"]);

const onSearch = () => {
  if (searchQuery.value.trim()) {
    emit("search", searchQuery.value);
  }
};
</script>