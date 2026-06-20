<template>
  <div class="space-y-8">

    <div class="grid lg:grid-cols-3 gap-6">

      <!-- Résumé -->
      <div class="lg:col-span-2">

        <AddressSummaryCard
          :form="form"
        />

      </div>

      <!-- Carte + photo -->
      <div class="space-y-6">

        <AddressLocationPreview
          :latitude="form.latitude"
          :longitude="form.longitude"
          :photo-preview="form.photoPreview"
        />

      </div>

    </div>

    <div
      class="flex justify-between items-center"
    >
      <button
        @click="$emit('previous')"
        class="px-8 py-4 border rounded-xl"
      >
        ← Précédent
      </button>

      <button
        :disabled="loading"
        @click="submit"
        class="px-8 py-4 bg-green-700 text-white rounded-xl"
      >
        {{ loading
          ? 'Publication...'
          : '✔ Confirmer et Publier'
        }}
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import AddressSummaryCard from "./AddressSummaryCard.vue";
import AddressLocationPreview from "./AddressLocationPreview.vue";

const props = defineProps<{
  form: any;
}>();

const emit = defineEmits([
  "previous",
  "submit",
]);

const loading = ref(false);

const submit = async () => {
  loading.value = true;

  await emit("submit");

  loading.value = false;
};
</script>