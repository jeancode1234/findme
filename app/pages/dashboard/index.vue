<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <DashboardStatCard
        label="Mes adresses créées"
        :value="addresses.length"
        sub="+2 ce mois"
      />
      <DashboardStatCard label="Adresses vérifiées" value="08" sub="100%" />
      <DashboardStatCard label="Partages actifs" value="24" sub="Actives" />
      <DashboardStatCard label="Lieux enregistrés" value="05" sub="Favoris" />
    </div>

    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-slate-900">Adresses récentes</h2>
        <div class="flex gap-2">
          <button class="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50">Filtrer</button>
          <button class="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800">Exporter CSV</button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardAddressCard
          v-for="addr in addresses"
          :key="addr.id"
          :address="addr"
        />
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <DashboardRecentActivity />
      <DashboardUpgradeCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardStatCard from "~/components/dashboard/StatCard.vue";
import DashboardAddressCard from "~/components/dashboard/AddressCard.vue";
import DashboardRecentActivity from "~/components/dashboard/RecentActivity.vue";
import DashboardUpgradeCard from "~/components/dashboard/UpgradeCard.vue";
import { useAddress } from "~/composables/useAddress";
definePageMeta({ 
  layout: "dashboard", 
  middleware: "auth" 
});

const { addresses, fetchAddresses } = useAddress();

// Chargement des données au montage du composant
onMounted(async () => {
  await fetchAddresses();
});
</script>