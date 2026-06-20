<!-- pages/index.vue -->
<template>
  <div class="overflow-x-hidden space-y-4">
    <!-- 1. Hero Section -->
    <LandingHeroSection @search="handleSearch" />

    <!-- 2. Vision Technologique -->
    <LandingVisionSection />

    <!-- 3. Impact Résidentiel (Utilisation du bloc générique) -->
    <LandingFeatureBlock>
      <template #title>
        Impact Résidentiel :
        <span class="text-emerald-600">L'autonomie</span> au pas de votre porte
      </template>
      <template #description>
        <blockquote
          class="border-l-4 border-emerald-500 pl-4 italic text-slate-600 dark:text-slate-300 mb-4 text-xs"
        >
          « Chaque foyer mérite une identité géographique propre »
        </blockquote>
        <p>
          Grâce à notre système d'adressage unique, recevez vos courriers, vos
          livraisons et vos proches avec une simplicité inégalée. Plus besoin de
          points de repères vagues.
        </p>
      </template>
      <template #action>
        <BaseButton
          variant="primary"
          class="!w-auto bg-slate-900 text-white text-xs px-6 py-3"
          @click="navigateTo('/auth/register')"
        >
          Devenir membre ➔
        </BaseButton>
      </template>
      <template #image>
        <div
          class="w-full h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400"
        >
          <span>[Image Ambulance / Véhicule]</span>
        </div>
      </template>
    </LandingFeatureBlock>

    <!-- 4. Section Urgence Santé (Fond Sombre) -->
    <LandingUrgencySection />

    <!-- 5. Économie Locale (Bloc générique en mode inversé "reverse") -->
    <LandingFeatureBlock reverse badge="Commerce de proximité">
      <template #title>
        Booster l'économie locale
        <span class="text-emerald-600">par la visibilité</span>
      </template>
      <template #description>
        <p class="mb-4">
          Les commerçants de proximité sont le moteur de l'économie. Avec
          findMe, chaque boutique devient trouvable par ses fournisseurs et ses
          clients.
        </p>
        <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
          <li>✓ Optimisation des tournées de livraison.</li>
          <li>✓ Référencement digital immédiat pour PME.</li>
          <li>✓ Confiance accrue et fiscalité fiabilisée.</li>
        </ul>
      </template>
      <template #action>
        <BaseButton
          variant="primary"
          class="!w-auto bg-emerald-600 text-white text-xs px-6 py-3"
          @click="navigateTo('/auth/register')"
        >
          Inscrire mon commerce
        </BaseButton>
      </template>
      <template #image>
        <div
          class="w-full h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400"
        >
          <span>[Image Livreur Moto]</span>
        </div>
      </template>
    </LandingFeatureBlock>

    <!-- 6. Appel à l'action final -->
    <LandingCtaSection @cta-click="navigateTo('/auth/register')" />
  </div>
</template>

<script setup lang="typescript">
definePageMeta({
  layout: "public",
});

const handleSearch = (query: string) => {
  console.log("Recherche de quartier :", query);
  // Redirection ou traitement de la recherche rapide
};
</script>