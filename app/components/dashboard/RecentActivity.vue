<template>
  <div
    class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1"
  >
    <div class="flex justify-between items-center mb-6">
      <h2 class="font-bold text-slate-900">Activité récente</h2>
      <button class="text-xs font-bold text-emerald-600 hover:text-emerald-700">
        VOIR TOUT
      </button>
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
          <p class="text-[10px] font-bold text-slate-400 uppercase mt-0.5">
            {{ act.time }}
          </p>
        </div>
      </div>

      <p v-if="activities.length === 0" class="text-sm text-slate-400 italic">
        Aucune activité récente.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Définition de l'interface pour la sécurité des types
export interface Activity {
  id: number | string;
  icon: string;
  message: string;
  time: string;
}

defineProps<{
  activities: Activity[];
}>();
</script>