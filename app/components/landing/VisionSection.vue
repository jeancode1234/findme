<!-- components/landing/VisionSection.vue -->
<template>
  <section
    class="py-16 bg-slate-50 dark:bg-slate-950 text-center transition-colors duration-200"
  >
    <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
      Vision Technologique
    </h2>

    <p class="text-slate-500 max-w-2xl mx-auto mb-12 text-sm">
      Notre infrastructure repose sur trois piliers fondamentaux pour
      interconnecter l'écosystème de navigation africain au service d'une
      croissance inclusive.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(pillar, index) in pillars"
        :key="index"
        class="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm text-left border transition-all duration-200"
        :class="
          pillar.highlight
            ? 'border-emerald-500/50 ring-1 ring-emerald-500/20'
            : 'border-slate-100/50 dark:border-slate-800'
        "
      >
        <div class="text-2xl mb-4" aria-hidden="true">
          {{ pillar.icon }}
        </div>

        <h3
          class="font-bold text-lg mb-2"
          :class="pillar.highlight ? 'text-emerald-600' : 'dark:text-white'"
        >
          {{ pillar.title }}
        </h3>

        <p class="text-slate-500 text-sm leading-relaxed">
          {{ pillar.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pillars = [
  {
    icon: "🏦",
    title: "Communautés connectées",
    description:
      "L'intelligence collective pour un maillage territorial précis sans laisser aucune zone dans l'ombre.",
    highlight: false,
  },
  {
    icon: "⚡",
    title: "Livraison efficace",
    description:
      "Optimisation des trajets du dernier kilomètre pour réduire les coûts et accroître la rentabilité.",
    highlight: true,
  },
  {
    icon: "💼",
    title: "Entrepreneurs autonomes",
    description:
      "Des outils robustes et des API ouvertes pour booster l'infrastructure financière et logistique locale.",
    highlight: false,
  },
];
</script>