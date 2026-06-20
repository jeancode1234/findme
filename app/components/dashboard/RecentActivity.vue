<template>
  <div class="bg-white p-6 rounded-2xl border border-slate-100 flex-1">
    <div class="flex justify-between items-center mb-6">
      <h2 class="font-bold text-slate-900">Activité récente</h2>
      <button class="text-xs font-bold text-emerald-600">VOIR TOUT</button>
    </div>

    <div class="space-y-6">
      <div v-for="act in activities" :key="act.id" class="flex gap-4">
        <div
          class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0"
        >
          {{ act.icon }}
        </div>
        <div>
          <p class="text-sm text-slate-700">{{ act.message }}</p>
          <p class="text-[10px] text-slate-400 mt-0.5">{{ act.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activities = [
  {
    id: 1,
    icon: "✅",
    message: "Adresse vérifiée avec succès : FN-DLA-BON-104-ZA",
    time: "IL Y A 5 HEURES",
  },
  {
    id: 2,
    icon: "🚚",
    message: "DHL Cameroon a scanné votre QR Code de domicile.",
    time: "HIER, 14:35",
  },
];
</script>