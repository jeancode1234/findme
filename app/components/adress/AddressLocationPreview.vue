<template>
  <div class="space-y-6">

    <div
      class="bg-white border rounded-2xl overflow-hidden"
    >
      <div
        class="flex justify-between p-4"
      >
        <span>
          📍 Localisation
        </span>

        <span>
          {{ latitude }},
          {{ longitude }}
        </span>
      </div>

      <div
        class="h-[250px]"
      >
        <ClientOnly>
          <LMap
            :zoom="16"
            :center="[
              latitude,
              longitude
            ]"
            style="height:100%;width:100%;"
          >
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LMarker
              :lat-lng="[
                latitude,
                longitude
              ]"
            />
          </LMap>
        </ClientOnly>
      </div>
    </div>

    <div
      class="bg-white border rounded-2xl overflow-hidden"
    >
      <div class="p-4">
        📸 Photo du bâtiment
      </div>

      <img
        :src="photoPreview"
        class="w-full h-[260px] object-cover"
      >
    </div>

  </div>
</template>

<script setup lang="ts">
import {LMap,LTileLayer,LMarker} from "@vue-leaflet/vue-leaflet";

defineProps<{
  latitude: number;
  longitude: number;
  photoPreview: string;
}>();
</script>