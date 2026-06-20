<!-- components/landing/CtaSection.vue -->
<template>
  <section
    class="py-16 bg-slate-50 dark:bg-slate-950 text-center rounded-2xl transition-colors duration-200"
  >
    <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-12">
      Prêt à simplifier votre quotidien ?
    </h2>

    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
      role="list"
    >
      <div
        v-for="(useCase, index) in useCases"
        :key="index"
        class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm text-center"
      >
        <div class="text-2xl mb-3" aria-hidden="true">{{ useCase.icon }}</div>
        <h3 class="font-bold mb-1 dark:text-white text-sm">
          {{ useCase.title }}
        </h3>
        <p class="text-slate-400 text-xs">{{ useCase.description }}</p>
      </div>
    </div>

    <BaseButton
      @click="$emit('cta-click')"
      variant="primary"
      class="!w-auto bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 rounded-xl px-8 py-4"
    >
      Rejoindre l'aventure findMe
    </BaseButton>
  </section>
</template>

<script setup lang="typescript">
defineEmits(["cta-click"]);

const useCases = [
  {
    icon: "🏠",
    title: "Domicile",
    description: "Générez une adresse personnelle unique pour votre maison.",
  },
  {
    icon: "🏢",
    title: "L'emplois / Entreprise",
    description: "Rendez vos bureaux et magasins facilement accessibles.",
  },
  {
    icon: "🚑",
    title: "Urgence",
    description: "Accès immédiat aux services de secours en un clic.",
  },
];
</script>