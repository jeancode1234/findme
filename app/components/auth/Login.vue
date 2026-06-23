<template>
  <div
    class="min-h-screen grid grid-cols-1 lg:grid-cols-12 font-sans bg-white dark:bg-slate-900 transition-colors duration-200"
  >
    <div
      class="hidden lg:flex lg:col-span-5 relative bg-slate-950 p-12 flex-col justify-between overflow-hidden"
    ></div>

    <div
      class="col-span-1 lg:col-span-7 flex flex-col justify-center px-6 sm:px-16 lg:px-24 py-12"
    >
      <div class="w-full max-w-md mx-auto">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          Bon retour !
        </h1>
        <p class="text-slate-500 dark:text-slate-400 text-sm mb-8">
          Connectez-vous pour accéder à vos adresses.
        </p>

        <form @submit.prevent="onSubmit" class="space-y-5">
          <div>
            <label
              class="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1"
              >Email</label
            >
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                >👤</span
              >
              <input
                v-model="credentials.email"
                type="email"
                required
                placeholder="nom@exemple.com"
                class="w-full pl-11 pr-4 py-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                :class="{ 'border-red-500': fieldErrors.email }"
              />
            </div>
            <p v-if="fieldErrors.email" class="text-xs text-red-500 mt-1">
              {{ fieldErrors.email }}
            </p>
          </div>

          <div>
            <label
              class="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1"
              >Mot de passe</label
            >
            <div class="relative">
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                >🔒</span
              >
              <input
                v-model="credentials.password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="••••••••"
                class="w-full pl-11 pr-12 py-3.5 rounded-xl border bg-slate-50/50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
                :class="{ 'border-red-500': fieldErrors.password }"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-sm"
              >
                {{ showPassword ? "👁️" : "🙈" }}
              </button>
            </div>
            <p v-if="fieldErrors.password" class="text-xs text-red-500 mt-1">
              {{ fieldErrors.password }}
            </p>
          </div>

          <BaseButton
            :loading="isLoading"
            type="submit"
            class="w-full bg-emerald-700 text-white rounded-xl py-3.5 font-bold"
          >
            Se connecter ➔
          </BaseButton>
        </form>

        <p class="text-center text-xs text-slate-500 mt-6">
          Pas de compte ?
          <NuxtLink to="/auth/register" class="text-emerald-600 font-bold"
            >Inscrivez-vous</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import { useAuth } from "~/composables/useAuth";
import type { LoginPayload } from "~/types/auth"; // <--- AJOUTEZ CET IMPORT

definePageMeta({ layout: false });

const { login, isLoading, fieldErrors } = useAuth();
const showPassword = ref(false);

// Typage explicite
const credentials = ref<LoginPayload>({
  email: "",
  password: "",
});

const onSubmit = async () => {
  try {
    const role = await login(credentials.value);

    if (role) {
      toast.success("Connexion réussie !");
      await navigateTo(role === "admin" ? "/admin/dashboard" : "/dashboard");
    }
  } catch (error: any) {
    // La gestion d'erreur est déjà faite dans useAuth via toast.error
    // On peut simplement logger ici si besoin
  }
};
</script>