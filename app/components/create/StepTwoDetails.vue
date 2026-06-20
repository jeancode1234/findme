<template>
  <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <h3 class="font-bold mb-4">Détails de l'adresse</h3>
    <div class="grid grid-cols-2 gap-4 mb-6">
      <button
        @click="modelValue.type = 'residence'"
        class="p-4 border rounded-xl"
        :class="
          modelValue.type === 'residence'
            ? 'border-emerald-500 bg-emerald-50'
            : ''
        "
      >
        🏠 Résidence
      </button>
      <button
        @click="modelValue.type = 'commerce'"
        class="p-4 border rounded-xl"
      >
        🏢 Commerce
      </button>
    </div>
    <input
      v-model="modelValue.name"
      placeholder="Nom de l'adresse"
      class="w-full border p-3 rounded-xl mb-6"
    />

    <div class="flex gap-3">
      <button
        @click="$emit('back')"
        class="flex-1 py-3 border rounded-xl font-bold"
      >
        Retour
      </button>
      <button
        @click="$emit('next')"
        class="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-bold"
      >
        Continuer
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<any>();
defineEmits(["next", "back"]);
</script>