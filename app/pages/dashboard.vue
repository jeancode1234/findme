<template>
  <div
    class="min-h-screen bg-slate-50 px-6 py-10 lg:px-12 transition-colors duration-300 dark:bg-gray-900"
  >
    <div
      class="mx-auto max-w-6xl rounded-[40px] bg-white p-8 shadow-2xl dark:bg-gray-800 dark:border dark:border-gray-700"
    >
      <div
        class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 class="text-4xl font-bold text-slate-900 dark:text-white">
            Mon dashboard
          </h1>
          <p class="mt-3 text-sm text-slate-500 dark:text-gray-400">
            Bienvenue sur votre espace sécurisé. Gérez vos adresses numériques
            et suivez vos livraisons.
          </p>
        </div>
        <button
          @click="handleLogout"
          type="button"
          class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow"
        >
          Se déconnecter
        </button>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-2">
        <div
          class="rounded-[32px] border border-slate-200 bg-slate-50 p-8 dark:bg-gray-950 dark:border-gray-800"
        >
          <h2 class="text-xl font-semibold text-slate-900 dark:text-white">
            Votre profil
          </h2>
          <div class="mt-6 space-y-4 text-sm text-slate-600 dark:text-gray-300">
            <div>
              <span class="block text-slate-500 dark:text-gray-400"
                >Nom Complet</span
              >
              <p
                class="mt-1 rounded-3xl bg-white px-4 py-3 text-slate-900 shadow-sm font-medium dark:bg-gray-900 dark:text-white"
              >
                {{ user?.name || "Utilisateur FindMe" }}
              </p>
            </div>
            <div>
              <span class="block text-slate-500 dark:text-gray-400"
                >Adresse Email</span
              >
              <p
                class="mt-1 rounded-3xl bg-white px-4 py-3 text-slate-900 shadow-sm font-medium dark:bg-gray-900 dark:text-white"
              >
                {{ user?.email || "Chargement..." }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="rounded-[32px] border border-slate-200 bg-slate-50 p-8 dark:bg-gray-950 dark:border-gray-800"
        >
          <h2 class="text-xl font-semibold text-slate-900 dark:text-white">
            Récapitulatif
          </h2>
          <div class="mt-6 space-y-4 text-sm text-slate-600 dark:text-gray-300">
            <div class="rounded-3xl bg-white p-4 shadow-sm dark:bg-gray-900">
              <p class="text-slate-500 dark:text-gray-400">
                Statut de la session
              </p>
              <p
                class="mt-2 font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"
              >
                <span
                  class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
                ></span>
                Connecté avec succès
              </p>
            </div>
            <div class="rounded-3xl bg-white p-4 shadow-sm dark:bg-gray-900">
              <p class="text-slate-500 dark:text-gray-400">
                Actions disponibles
              </p>
              <ul
                class="mt-2 list-disc space-y-1 pl-5 text-slate-700 dark:text-gray-400"
              >
                <li>Voir vos adresses numériques</li>
                <li>Suivre vos livraisons urbaines</li>
                <li>Accéder à vos paramètres de compte</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"; // Si vous utilisez Pinia, sinon utilisez computed()
import { useAuth } from "~/composables/useAuth";
import { useToast } from "~/composables/useToast";
import { useRouter } from "vue-router";
// 1. Déclaration des middlewares de sécurité pour Nuxt
definePageMeta({
  middleware: ["auth", "role"],
  requiredRole: "user",
});

const router = useRouter();

// 2. Initialisation des composables
const auth = useAuth();
const { showInfo } = useToast();

// 🌟 CORRECTION CRUCIALE DE RÉACTIVITÉ :
// On utilise une propriété calculée (computed) ou le destructurage réactif.
// Si user était une simple propriété statique, l'interface affichait "Chargement..." indéfiniment.
const user = computed(() => auth.user.value);

// 3. Gestion de la déconnexion
const handleLogout = async () => {
  await auth.logout();
  showInfo("Vous avez été déconnecté avec succès.");

  // Redirection vers la page de connexion
  router.push("/auth/login");
};
</script>