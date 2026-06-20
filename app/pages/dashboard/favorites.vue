<template>
  <div class="p-8">
    <h1 class="text-2xl font-extrabold mb-6">Mes Favoris</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <DashboardAddressCard
        v-for="addr in favoriteAddresses"
        :key="addr.id"
        :address="addr"
      />
    </div>
  </div>
</template>

<script setup>
import DashboardAddressCard from "~/components/dashboard/AddressCard.vue";
import { useAddress } from "~/composables/useAddress";
definePageMeta({ layout: "dashboard" });
const { addresses } = useAddress();
// Filtre simple pour les besoins de l'exemple
const favoriteAddresses = computed(() => addresses.value.slice(0, 1));
</script>