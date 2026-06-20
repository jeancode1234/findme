<template>
  <div>
    <label class="block text-lg font-semibold mb-4">
      Photo du bâtiment *
    </label>

    <label
      class="relative border-2 border-dashed border-slate-300 rounded-xl h-[330px] flex flex-col justify-center items-center cursor-pointer overflow-hidden hover:border-green-500 transition"
    >
      <input
        type="file"
        accept="image/*"
        class="hidden"
        @change="selectFile"
      />

      <!-- Aperçu -->
      <img
        v-if="photoPreview"
        :src="photoPreview"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Overlay -->
      <div
        v-if="!photoPreview"
        class="text-center px-6"
      >
        <div
          class="w-20 h-20 mx-auto rounded-2xl bg-green-100 flex items-center justify-center text-4xl mb-4"
        >
          📸
        </div>

        <h3 class="font-semibold text-lg">
          Glissez et déposez votre photo ici
        </h3>

        <p class="text-slate-500 mt-2">
          Format JPG, PNG (Max. 10 MB)
        </p>

        <div
          class="mt-5 inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm"
        >
          ✅ Compression automatique active
        </div>
      </div>
    </label>

    <!-- Infos compression -->
    <div
      v-if="originalSize > 0"
      class="mt-5 bg-slate-50 rounded-xl p-4 border"
    >
      <h4 class="font-semibold mb-3">
        Informations du fichier
      </h4>

      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span>Taille originale</span>

          <strong>
            {{ formatSize(originalSize) }}
          </strong>
        </div>

        <div class="flex justify-between">
          <span>Taille compressée</span>

          <strong class="text-green-600">
            {{ formatSize(compressedSize) }}
          </strong>
        </div>

        <div class="flex justify-between">
          <span>Réduction</span>

          <strong class="text-green-600">
            {{
              (
                ((originalSize - compressedSize) /
                  originalSize) *
                100
              ).toFixed(0)
            }}%
          </strong>
        </div>
      </div>
    </div>

    <p class="mt-4 text-sm italic text-slate-500">
      Une photo claire aide les livreurs et les services
      d'urgence à trouver l'adresse plus rapidement.
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  photoPreview: string;
  originalSize: number;
  compressedSize: number;
  formatSize: (size: number) => string;
}>();

const emit = defineEmits([
  "photo-selected",
]);

const selectFile = (
  event: Event
) => {
  const target =
    event.target as HTMLInputElement;

  if (!target.files?.length) return;

  emit(
    "photo-selected",
    target.files[0]
  );
};
</script>