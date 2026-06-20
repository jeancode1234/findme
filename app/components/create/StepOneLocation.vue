<template>
  <div
    class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4"
  >
    <h3 class="font-bold text-lg">Localisation</h3>

    <div id="map" class="h-64 w-full rounded-xl border border-slate-200"></div>

    <div class="p-4 bg-slate-50 rounded-xl font-mono text-sm">
      <p>Lat: {{ modelValue.gps.latitude.toFixed(6) }}</p>
      <p>Long: {{ modelValue.gps.longitude.toFixed(6) }}</p>
    </div>

    <button
      @click="$emit('next')"
      class="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition"
    >
      Confirmer la position
    </button>
  </div>
</template>

<script setup lang="ts">
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";
const modelValue = defineModel<{
  gps: { latitude: number; longitude: number };
}>();
defineEmits(["next"]);

onMounted(() => {
  // Initialisation de la carte sur Douala
  const map = L.map("map").setView(
    [modelValue.value.gps.latitude, modelValue.value.gps.longitude],
    13
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Marqueur déplaçable
  const marker = L.marker(
    [modelValue.value.gps.latitude, modelValue.value.gps.longitude],
    {
      draggable: true,
    }
  ).addTo(map);

  // Mise à jour de modelValue quand on déplace le marqueur
  marker.on("dragend", () => {
    const pos = marker.getLatLng();
    modelValue.value.gps.latitude = pos.lat;
    modelValue.value.gps.longitude = pos.lng;
  });
});
</script>

<style scoped>
/* Correction pour le marqueur Leaflet qui peut parfois mal s'afficher avec Nuxt */
:deep(.leaflet-control-attribution) {
  display: none;
}
</style>