<template>
  <div class="space-y-8">
    <div v-if="user" class="mb-6">
      <h1 class="text-2xl font-bold text-slate-900">
        Bonjour, {{ user.name || "Utilisateur" }} 👋
      </h1>
      <p class="text-slate-500">
        Voici un récapitulatif de vos adresses findMe.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <DashboardStatCard
        label="Mes adresses créées"
        :value="addresses.length"
        :sub="addresses.length > 0 ? 'Total actuel' : 'Aucune'"
      />
      <DashboardStatCard
        label="Adresses vérifiées"
        :value="verifiedCount"
        sub="100%"
      />
      <DashboardStatCard
        label="Partages actifs"
        :value="sharedCount"
        sub="Actives"
      />
      <DashboardStatCard label="Lieux enregistrés" value="05" sub="Favoris" />
    </div>

    <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-slate-900">Adresses récentes</h2>
        <div class="flex gap-2">
          <button
            class="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50"
          >
            Filtrer
          </button>
          <button
            class="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800"
          >
            Exporter CSV
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardAddressCard
          v-for="addr in addresses"
          :key="addr.id"
          :address="addr"
        />
        <div
          v-if="addresses.length === 0"
          class="col-span-3 text-center py-10 text-slate-400"
        >
          Aucune adresse trouvée. Commencez par en créer une !
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <DashboardRecentActivity :activities="recentActivities" />
      <DashboardUpgradeCard />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useAddress } from "~/composables/useAddress";
import { useAuth } from "~/composables/useAuth";
import DashboardStatCard from "~/components/dashboard/StatCard.vue";
import DashboardAddressCard from "~/components/dashboard/AddressCard.vue";
import DashboardRecentActivity from "~/components/dashboard/RecentActivity.vue";
import DashboardUpgradeCard from "~/components/dashboard/UpgradeCard.vue";

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
 // Assure la protection via le middleware
});

const { addresses, fetchAddresses } = useAddress();
const { user } = useAuth();

// Statistiques calculées
const verifiedCount = computed(
  () => addresses.value.filter((a) => a.status === "active").length
);
const sharedCount = ref(24);

const recentActivities = computed(() =>
  addresses.value
    .map((a, index) => ({
      id: index,
      icon: "📍",
      message: `Adresse ${a.label} enregistrée à ${a.city}`,
      time: "RÉCEMMENT",
    }))
    .slice(0, 3)
);

// Chargement des données au montage
onMounted(async () => {
  await fetchAddresses();
});
</script>