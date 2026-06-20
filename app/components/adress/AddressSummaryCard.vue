<template>
  <div
    class="bg-white border rounded-2xl p-8"
  >
    <div
      class="flex justify-between items-center mb-8"
    >
      <h2
        class="text-3xl font-bold"
      >
        Récapitulatif de votre adresse
      </h2>

      <span
        class="bg-slate-100 px-3 py-2 rounded-lg"
      >
        Brouillon
      </span>
    </div>

    <div
      class="grid md:grid-cols-2 gap-8"
    >
      <div>
        <p
          class="text-sm uppercase text-slate-500"
        >
          Nom complet
        </p>

        <h3 class="text-2xl mt-2">
          {{ form.addressName }}
        </h3>
      </div>

      <div>
        <p
          class="text-sm uppercase text-slate-500"
        >
          Ville & Quartier
        </p>

        <h3 class="text-2xl mt-2">
          {{ form.city }},
          {{ form.district }}
        </h3>
      </div>

      <div>
        <p
          class="text-sm uppercase text-slate-500"
        >
          Rue / Avenue
        </p>

        <h3 class="text-2xl mt-2">
          {{ form.street }}
        </h3>
      </div>

      <div>
        <p
          class="text-sm uppercase text-slate-500"
        >
          Numéro de porte
        </p>

        <h3 class="text-2xl mt-2">
          {{ form.houseNumber }}
        </h3>
      </div>
    </div>

    <div
      v-if="form.landmark"
      class="mt-8 bg-slate-50 border-l-4 border-green-700 p-5 rounded-lg"
    >
      <p
        class="uppercase text-sm text-slate-500"
      >
        Points de repère
      </p>

      <p class="mt-2">
        {{ form.landmark }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  form: any;
}>();
</script>