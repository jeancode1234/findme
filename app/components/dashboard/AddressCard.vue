<template>
  <div
    class="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between"
  >
    <div class="flex justify-between items-start mb-4">
      <div
        class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"
      >
        📍
      </div>
      <span
        class="text-[10px] font-bold px-2 py-1 rounded-md"
        :class="
          address.status === 'active'
            ? 'bg-emerald-50 text-emerald-600'
            : 'bg-orange-50 text-orange-600'
        "
      >
        {{ address.status === "active" ? "VÉRIFIÉ" : "EN COURS..." }}
      </span>
    </div>

    <h3 class="font-bold text-slate-900 mb-1">{{ address.label }}</h3>
    <div
      class="text-xs font-mono text-slate-500 mb-4 bg-slate-50 p-1.5 rounded"
    >
      {{ address.id }}
    </div>
    <p class="text-sm text-slate-600">
      {{ address.district }}, {{ address.city }}
    </p>

    <div class="mt-6 pt-4 border-t flex justify-between items-center">
      <button
        @click="shareAddress(address.id, 'whatsapp')"
        class="text-slate-400 hover:text-emerald-600 transition"
        title="Partager"
      >
        🔗
      </button>

      <button
        @click="exportAddressPdf(address.id)"
        class="text-xs font-bold text-slate-700 flex items-center gap-1 hover:text-emerald-600 transition"
      >
        📄 Télécharger PDF
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAddress } from "~/composables/useAddress";
import type { Address } from "~/types/address";

defineProps<{
  address: Address;
}>();

// On récupère les fonctions d'action du composable
const { shareAddress, exportAddressPdf } = useAddress();
</script>