<template>
  <div
    class="flex h-screen w-full flex-col items-center justify-center bg-slate-50 font-poppins px-6"
  >
    <div v-if="!error" class="flex flex-col items-center">
      <div
        class="h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-green-600"
      ></div>
      <h2 class="mt-8 text-2xl font-bold text-slate-800">
        Chargement de votre espace...
      </h2>
    </div>

    <div v-else class="text-center max-w-md">
      <div class="text-6xl mb-6">⚠️</div>
      <h2 class="text-2xl font-bold text-slate-800 mb-2">
        Impossible de se connecter
      </h2>
      <p class="text-slate-600 mb-8">
        {{ errorMessage }}
      </p>
      <button
        @click="retry"
        class="rounded-full bg-[#0B2C53] px-8 py-3 text-white font-semibold hover:bg-[#163B5A] transition"
      >
        Réessayer maintenant
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";
import { ref, onMounted } from "vue";

const { me, user } = useAuth();
const error = ref(false);
const errorMessage = ref("");

const loadData = async () => {
  error.value = false;
  try {
    // Appel API
    await me();

    if (!user.value) {
      await navigateTo("/auth/login");
      return;
    }

    const targetRoute =
      user.value.role === "admin" ? "/admin/dashboard" : "/dashboard";
    setTimeout(async () => await navigateTo(targetRoute), 800);
  } catch (err: any) {
    error.value = true;
    // Personnalisation du message selon le type d'erreur
    errorMessage.value = err?.message?.includes("Network Error")
      ? "Le serveur est injoignable. Vérifiez votre connexion internet."
      : "Une erreur technique est survenue. Veuillez réessayer plus tard.";
  }
};

const retry = () => {
  loadData();
};

onMounted(loadData);
</script>