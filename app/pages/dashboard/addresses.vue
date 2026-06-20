<template>
  <div class="p-8">
    <h1 class="text-2xl font-extrabold mb-6">Toutes mes adresses</h1>
    <div class="bg-white rounded-2xl border border-slate-100 p-6">
      <div class="flex gap-4 mb-6">
        <input placeholder="Rechercher..." class="border p-2 rounded-lg w-64" />
        <select class="border p-2 rounded-lg">
          <option>Tous les statuts</option>
        </select>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardAddressCard
          v-for="addr in addresses"
          :key="addr.id"
          :address="addr"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DashboardAddressCard from "~/components/dashboard/AddressCard.vue";
import { useAddress } from "~/composables/useAddress";
definePageMeta({ layout: "dashboard" });
const { addresses, fetchAddresses } = useAddress();
onMounted(fetchAddresses);
</script>