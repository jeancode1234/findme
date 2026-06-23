<template>
  <div class="p-8 max-w-7xl mx-auto space-y-6" v-if="activeAddress">
    <div class="flex justify-between items-start">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span
            class="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded uppercase"
            >Vérifié</span
          >
          <span
            class="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase"
            >{{ activeAddress.label }}</span
          >
        </div>
        <h1 class="text-3xl font-extrabold text-slate-900">
          {{ activeAddress.label }}
        </h1>
        <div
          class="flex items-center gap-2 mt-2 bg-slate-100 px-3 py-1.5 rounded-lg w-max"
        >
          <span class="font-mono font-bold text-slate-700"
            ># {{ activeAddress.id }}</span
          >
          <button class="text-slate-400 hover:text-emerald-600">📋</button>
        </div>
      </div>
      <div class="flex gap-3">
        <button
          @click="shareAddress(activeAddress.id, 'whatsapp')"
          class="flex items-center gap-2 px-5 py-2.5 border rounded-xl font-bold hover:bg-slate-50"
        >
          🔗 Partager
        </button>
        <button
          @click="exportAddressPdf(activeAddress.id)"
          class="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700"
        >
          📄 Plan PDF
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-white p-4 rounded-3xl border border-slate-200 h-[400px]">
          <div id="map" class="w-full h-full rounded-2xl"></div>
        </div>

        <div class="bg-white p-6 rounded-3xl border border-slate-200">
          <h2 class="font-bold text-lg mb-4">Détails généraux</h2>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold">
                Ville / Quartier
              </p>
              <p class="font-medium">
                {{ activeAddress.city }} / {{ activeAddress.district }}
              </p>
            </div>
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold">
                Coordonnées GPS
              </p>
              <p class="font-mono">
                {{ activeAddress.gps.latitude }}° N,
                {{ activeAddress.gps.longitude }}° E
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-slate-900 p-6 rounded-3xl text-white">
          <h3 class="font-bold mb-4">Scan Rapide</h3>
          <div class="bg-white p-4 rounded-xl mb-4 flex justify-center">
            <div class="w-32 h-32 bg-slate-200"></div>
          </div>
          <button
            class="w-full py-3 bg-emerald-600 rounded-xl font-bold text-sm"
          >
            Télécharger le QR Code
          </button>
        </div>

        <div class="bg-white p-6 rounded-3xl border border-slate-200">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold">Photo du bâtiment</h3>
            <button class="text-emerald-600 text-xs font-bold">Modifier</button>
          </div>
          <img
            :src="activeAddress.photo"
            class="w-full h-32 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useAddress } from "~/composables/useAddress";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

definePageMeta({ layout: "dashboard" });
const route = useRoute();
const { activeAddress, fetchAddressById, shareAddress, exportAddressPdf } =
  useAddress();

const initMap = () => {
  if (!activeAddress.value) return;
  const { latitude, longitude } = activeAddress.value.gps;
  const map = L.map("map").setView([latitude, longitude], 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  L.marker([latitude, longitude]).addTo(map);
};

onMounted(async () => {
  if (route.params.id) {
    await fetchAddressById(route.params.id as string);
    nextTick(() => initMap());
  }
});
</script>

<style>
/* Nécessaire pour que Leaflet s'affiche correctement */
#map {
  z-index: 0;
}
</style>