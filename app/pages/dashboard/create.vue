<template>
  <div class="p-8 max-w-7xl mx-auto">
    <h1 class="text-3xl font-extrabold text-slate-900 mb-2">
      Créer une adresse
    </h1>
    <p class="text-slate-500 mb-8">
      Donnez une identité numérique à votre emplacement.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div
        class="lg:col-span-2 bg-slate-200 rounded-3xl h-[500px] shadow-inner overflow-hidden"
      >
        <ClientOnly>
          <div
            class="w-full h-full flex items-center justify-center text-slate-500"
          >
            [Intégration Leaflet/Mapbox]
          </div>
        </ClientOnly>
      </div>

      <div class="space-y-6">
        <div class="bg-slate-900 p-6 rounded-2xl text-white">
          <p class="text-xs uppercase tracking-widest text-slate-400 mb-2">
            Étape {{ step }} sur 3
          </p>
          <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              class="h-full bg-emerald-500 transition-all duration-500"
              :style="{ width: (step / 3) * 100 + '%' }"
            ></div>
          </div>
        </div>

        <component
          :is="currentStepComponent"
          v-model="formData"
          @next="step++"
          @back="step--"
          @submit="saveAddress"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import StepOneLocation from "~/components/create/StepOneLocation.vue";
import StepTwoDetails from "~/components/create/StepTwoDetails.vue";
import StepThreeSummary from "~/components/create/StepThreeSummary.vue";

definePageMeta({ layout: "dashboard" });

const step = ref(1);
const formData = ref({
  /* vos champs ici */
});

const currentStepComponent = computed(() => {
  if (step.value === 1) return StepOneLocation;
  if (step.value === 2) return StepTwoDetails;
  return StepThreeSummary;
});

const saveAddress = () => {
  // Logique d'appel API
  console.log("Adresse enregistrée :", formData.value);
};
</script>