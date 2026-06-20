<template>
  <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
    <h3 class="font-bold text-lg">Résumé de l'adresse</h3>
    
    <div class="space-y-3 text-sm">
      <div class="flex justify-between border-b pb-2">
        <span class="text-slate-500">Type</span>
        <span class="font-bold uppercase">{{ modelValue.type }}</span>
      </div>
      <div class="flex justify-between border-b pb-2">
        <span class="text-slate-500">Nom</span>
        <span class="font-bold">{{ modelValue.name || 'Non défini' }}</span>
      </div>
      <div class="flex justify-between border-b pb-2">
        <span class="text-slate-500">Coordonnées</span>
        <span class="font-mono text-xs">{{ modelValue.gps.latitude }}, {{ modelValue.gps.longitude }}</span>
      </div>
    </div>

    <div class="flex gap-3">
      <button @click="$emit('back')" class="flex-1 py-3 border border-slate-200 rounded-xl font-bold text-slate-600">
        Retour
      </button>
      <button @click="$emit('submit')" class="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition">
        Valider et enregistrer
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<any>();
defineEmits(['back', 'submit']);
</script>