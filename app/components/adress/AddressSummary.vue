<template>
  <div class="bg-slate-50 rounded-xl p-6">
    <h2 class="text-2xl font-bold mb-6">Vérification</h2>

    <div class="space-y-3">
      <p>
        <strong>Pays :</strong>
        {{ form.country }}
      </p>

      <p>
        <strong>Ville :</strong>
        {{ form.city }}
      </p>

      <p>
        <strong>Quartier :</strong>
        {{ form.district }}
      </p>

      <p>
        <strong>Rue :</strong>
        {{ form.street }}
      </p>

      <p>
        <strong>Latitude :</strong>
        {{ form.latitude }}
      </p>

      <p>
        <strong>Longitude :</strong>
        {{ form.longitude }}
      </p>
    </div>

    <img
      v-if="form.photoPreview"
      :src="form.photoPreview"
      class="mt-6 rounded-xl max-h-72"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  form: any;
}>();
</script>