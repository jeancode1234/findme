<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center bg-slate-50 font-poppins"
  >
    <div class="relative flex flex-col items-center">
      <div
        class="h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-green-600"
      ></div>

      <h2 class="mt-8 text-2xl font-bold text-slate-800">
        Préparation de votre espace...
      </h2>
      <p class="mt-2 text-slate-500">Un instant, nous chargeons vos données.</p>
    </div>
  </div>
</template>

<script setup>
import useAuth from "~/composables/useAuth";
import { onMounted } from "vue";
const { user } = useAuth();

onMounted(() => {
  // Simule une courte attente pour l'effet de transition
  setTimeout(() => {
    const role = user.value?.role;
    window.location.href = role === "admin" ? "/admin/dashboard" : "/dashboard";
  }, 1500); // 1.5 secondes de chargement
});
</script>