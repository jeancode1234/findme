<template>
  <div class="space-y-4">

    <div class="bg-white border rounded-xl p-5">

      <p class="text-sm text-slate-500">
        Latitude
      </p>

      <p class="text-xl font-bold text-[#203B51]">
        {{ latitude ?? '---' }}
      </p>

    </div>

    <div class="bg-white border rounded-xl p-5">

      <p class="text-sm text-slate-500">
        Longitude
      </p>

      <p class="text-xl font-bold text-[#203B51]">
        {{ longitude ?? '---' }}
      </p>

    </div>

    <div
      class="bg-green-50 border border-green-100 rounded-xl p-5"
    >
      <p class="text-sm text-green-700">
        Cliquez sur la carte ou utilisez la
        géolocalisation automatique pour
        positionner votre adresse.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  latitude: number | null
  longitude: number | null
}>()
</script>