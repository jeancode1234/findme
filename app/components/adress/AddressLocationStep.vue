<template>
  <div class="bg-white border rounded-2xl p-6">

    <!-- Header -->
    <div
      class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8"
    >
      <div>
        <h2 class="text-3xl font-bold text-[#203B51]">
          Localisation & Carte
        </h2>

        <p class="text-slate-500 mt-2">
          Positionnez précisément votre adresse sur la carte.
        </p>
      </div>

      <button
        @click="$emit('locate')"
        class="px-6 py-3 rounded-xl bg-[#203B51] text-white font-medium hover:bg-[#082F5A] transition"
      >
        📡 Me localiser
      </button>
    </div>

    <!-- Carte + Coordonnées -->
    <div class="grid lg:grid-cols-4 gap-6">

      <div class="lg:col-span-3">
        <AddressMap
          :latitude="latitude"
          :longitude="longitude"
          @update-position="$emit('update-position', $event)"
        />
      </div>

      <div>
        <AddressCoordinates
          :latitude="latitude"
          :longitude="longitude"
        />
      </div>

    </div>

    <!-- Message d'aide -->
    <div
      class="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700"
    >
      Déplacez le marqueur ou cliquez sur la carte pour ajuster votre position avec précision.
    </div>

    <!-- Erreur de localisation -->
    <div
      v-if="errors.location"
      class="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600"
    >
      {{ errors.location }}
    </div>

    <!-- Navigation -->
    <div class="mt-8 pt-6 border-t flex justify-end">

      <button
        :disabled="latitude === null || longitude === null"
        @click="$emit('next')"
        class="px-8 py-3 rounded-xl font-medium transition-all"
        :class="
          latitude !== null && longitude !== null
            ? 'bg-[#203B51] text-white hover:bg-[#082F5A]'
            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
        "
      >
        Suivant →
      </button>

    </div>

  </div>
</template>

<script setup lang="ts">
import AddressMap from "./AddressMap.vue";
import AddressCoordinates from "./AddressCoordinates.vue";

defineProps<{
  latitude: number | null;
  longitude: number | null;
  errors: Record<string, string>;
}>();

defineEmits([
  "locate",
  "update-position",
  "next",
]);
</script>