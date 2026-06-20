<template>
  <div
    class="h-[550px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
  >
    <ClientOnly>
      <LMap
        ref="map"
        :zoom="zoom"
        :center="mapCenter"
        :max-bounds="cameroonBounds"
        :max-bounds-viscosity="1"
        style="height: 100%; width: 100%;"
        @click="handleMapClick"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <LMarker
          v-if="latitude !== null && longitude !== null"
          :lat-lng="[latitude, longitude]"
          :draggable="true"
          @moveend="handleMarkerDrag"
        />
      </LMap>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  watch,
  nextTick,
} from "vue";

import {
  LMap,
  LTileLayer,
  LMarker,
} from "@vue-leaflet/vue-leaflet";

const props = defineProps<{
  latitude: number | null;
  longitude: number | null;
}>();

const emit = defineEmits<{
  (
    e: "update-position",
    position: {
      latitude: number;
      longitude: number;
    }
  ): void;
}>();

const map = ref();

const CAMEROON_CENTER = [5.9631, 12.6110];

const zoom = ref(7);

const cameroonBounds = [
  [1.6, 8.4],   // Sud-Ouest
  [13.2, 16.3], // Nord-Est
];

const mapCenter = computed(() => {
  if (
    props.latitude !== null &&
    props.longitude !== null
  ) {
    return [
      props.latitude,
      props.longitude,
    ];
  }

  return CAMEROON_CENTER;
});

/*
|--------------------------------------------------------------------------
| Recentrage automatique après géolocalisation
|--------------------------------------------------------------------------
*/
watch(
  () => [props.latitude, props.longitude],
  async ([lat, lng]) => {
    if (
      lat !== null &&
      lng !== null &&
      map.value?.leafletObject
    ) {
      await nextTick();

      map.value.leafletObject.setView(
        [lat, lng],
        16,
        {
          animate: true,
        }
      );
    }
  }
);

/*
|--------------------------------------------------------------------------
| Clic sur la carte
|--------------------------------------------------------------------------
*/
const handleMapClick = (
  event: any
) => {
  emit("update-position", {
    latitude: event.latlng.lat,
    longitude: event.latlng.lng,
  });
};

/*
|--------------------------------------------------------------------------
| Déplacement du marqueur
|--------------------------------------------------------------------------
*/
const handleMarkerDrag = (
  event: any
) => {
  const position =
    event.target.getLatLng();

  emit("update-position", {
    latitude: position.lat,
    longitude: position.lng,
  });
};
</script>