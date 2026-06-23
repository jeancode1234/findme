<template>
  <div class="min-h-screen bg-slate-50 py-10 font-poppins">
    <div
      class="mx-auto grid max-w-7xl gap-8 rounded-[40px] bg-white p-4 shadow-2xl md:grid-cols-2 md:p-0"
    >
      <div
        class="hidden overflow-hidden rounded-[40px] bg-cover bg-center text-white md:block"
        :style="`background-image: url(${heroImg})`"
      >
        <div
          class="flex h-full flex-col justify-between rounded-[40px] bg-slate-900/70 p-8"
        >
          <div class="space-y-4">
            <img :src="logo" alt="findMe logo" class="w-24 object-contain" />
            <h1 class="max-w-xl text-4xl font-bold leading-tight text-white">
              Precision Digital Addressing for everyone.
            </h1>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center px-6 py-10 md:px-16">
        <div class="w-full max-w-xl">
          <h1 class="text-3xl font-bold text-slate-900 md:text-4xl mb-8">
            Connectez-vous à votre espace
          </h1>

          <form
            @submit.prevent="onLogin"
            class="mt-10 space-y-6 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm"
          >
            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-700"
                >Email</label
              >
              <input
                v-model="form.email"
                @input="clearError('email')"
                @blur="validateField('email', form.email)"
                type="email"
                placeholder="nom@exemple.com"
                :class="[
                  'w-full rounded-3xl px-5 py-4 text-sm outline-none transition-all duration-300 border-2',
                  fieldErrors.email
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : form.email.includes('@')
                    ? 'border-green-500 bg-white'
                    : 'border-slate-200 bg-white focus:border-green-600',
                ]"
              />
              <p v-if="fieldErrors.email" class="mt-2 text-sm text-red-600">
                {{ fieldErrors.email }}
              </p>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between">
                <label class="text-sm font-semibold text-slate-700"
                  >Mot de passe</label
                >
                <NuxtLink
                  to="/auth/forgot-password"
                  class="text-sm text-green-700 hover:underline"
                >
                  Oublié ?
                </NuxtLink>
              </div>
              <input
                v-model="form.password"
                @input="clearError('password')"
                @blur="validateField('password', form.password)"
                type="password"
                placeholder="••••••••"
                :class="[
                  'w-full rounded-3xl px-5 py-4 text-sm outline-none transition-all duration-300 border-2',
                  fieldErrors.password
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : form.password.length >= 8
                    ? 'border-green-500 bg-white'
                    : 'border-slate-200 bg-white focus:border-green-600',
                ]"
              />
              <p v-if="fieldErrors.password" class="mt-2 text-sm text-red-600">
                {{ fieldErrors.password }}
              </p>
            </div>

            <button
              type="submit"
              :disabled="isLoading || !isFormReady"
              class="w-full rounded-full bg-[#0B2C53] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#163B5A] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLoading ? "Connexion en cours..." : "Se connecter" }}
            </button>
          </form>

          <p class="mt-8 text-center text-sm text-slate-500">
            Pas encore de compte ?
            <NuxtLink to="/auth/register" class="font-semibold text-green-600"
              >Créer un compte</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "~/images/logo-findme-wht.png";
import heroImg from "~/images/city.jpg";
import { toast } from "vue-sonner";

definePageMeta({ middleware: ["guest"] });

const {
  login,
  isLoading,
  fieldErrors,
  clearError,
  validateField,
  validateForm,
} = useAuth();

const form = ref({ email: "", password: "" });

// Activation du bouton conditionnée
const isFormReady = computed(() => form.value.email && form.value.password);

const onLogin = async () => {
  if (!validateForm(form.value)) {
    toast.error("Veuillez corriger les erreurs avant de soumettre.");
    return;
  }

  try {
    const role = await login(form.value);
    if (role) {
      await navigateTo("/auth/loading");
    }
  } catch (err: any) {
    // Les erreurs d'API (401, 422, etc.) sont gérées via handleApiError dans le composable
  }
};
</script>