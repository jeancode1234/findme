<template>
  <div
    class="min-h-screen grid grid-cols-1 lg:grid-cols-12 font-sans bg-white dark:bg-slate-900 transition-colors duration-200"
  >
    <div
      class="hidden lg:flex lg:col-span-5 relative bg-slate-950 p-12 flex-col justify-between overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-[url('/images/urban-background.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-emerald-600/60 to-slate-950/90"
      ></div>
      <div class="relative z-10">
        <NuxtLink
          to="/"
          class="text-2xl font-extrabold text-white flex items-center gap-2"
        >
          <span class="text-emerald-400">📍</span> findMe
        </NuxtLink>
      </div>
    </div>

    <div
      class="col-span-1 lg:col-span-7 flex flex-col justify-center px-6 sm:px-16 lg:px-24 py-12"
    >
      <div class="w-full max-w-md mx-auto">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          Créer un compte
        </h1>
        <p class="text-slate-500 text-sm mb-8">
          Rejoignez findMe en quelques secondes.
        </p>

        <form @submit.prevent="onRegister" class="space-y-5">
          <div>
            <label class="text-xs font-bold text-slate-700 block mb-1"
              >Nom complet</label
            >
            <input
              v-model="form.name"
              @input="clearError('name')"
              @blur="validateField('name', form.name)"
              type="text"
              placeholder="John Doe"
              class="w-full px-4 py-3.5 rounded-xl border bg-slate-50 border-slate-200 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
              :class="{ 'border-red-500': fieldErrors.name }"
            />
            <p v-if="fieldErrors.name" class="text-xs text-red-500 mt-1">
              {{ fieldErrors.name }}
            </p>
          </div>

          <div>
            <label class="text-xs font-bold text-slate-700 block mb-1"
              >Email</label
            >
            <input
              v-model="form.email"
              @input="clearError('email')"
              @blur="validateField('email', form.email)"
              type="email"
              placeholder="nom@exemple.com"
              class="w-full px-4 py-3.5 rounded-xl border bg-slate-50 border-slate-200 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
              :class="{ 'border-red-500': fieldErrors.email }"
            />
            <p v-if="fieldErrors.email" class="text-xs text-red-500 mt-1">
              {{ fieldErrors.email }}
            </p>
          </div>

          <div>
            <label class="text-xs font-bold text-slate-700 block mb-1"
              >Mot de passe</label
            >
            <input
              v-model="form.password"
              @input="clearError('password')"
              @blur="validateField('password', form.password)"
              type="password"
              placeholder="••••••••"
              class="w-full px-4 py-3.5 rounded-xl border bg-slate-50 border-slate-200 text-sm focus:ring-2 focus:ring-emerald-600 outline-none"
              :class="{ 'border-red-500': fieldErrors.password }"
            />
            <p v-if="fieldErrors.password" class="text-xs text-red-500 mt-1">
              {{ fieldErrors.password }}
            </p>
          </div>

          <BaseButton
            :loading="isLoading"
            type="submit"
            class="w-full bg-emerald-700 text-white rounded-xl py-3.5 font-bold"
          >
            S'inscrire ➔
          </BaseButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import { useAuth } from "~/composables/useAuth";
import BaseButton from "~/components/BaseButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
definePageMeta({ layout: false });
const router = useRouter();
const {
  register,
  isLoading,
  fieldErrors,
  clearError,
  validateField,
  validateForm,
} = useAuth();

const form = ref<RegisterPayload>({ name: "", email: "", password: "" });

const onRegister = async () => {
  // 1. Validation de sécurité avant soumission
  if (!validateForm(form.value)) {
    toast.error("Veuillez corriger les erreurs avant de valider.");
    return;
  }

  // 2. Appel API
  try {
    const role = await register(form.value);
    if (role) {
      toast.success("Compte créé avec succès !");
      router.push("/dashboard");
    }
  } catch (err: any) {
    // Les erreurs serveurs sont traitées dans le composable via handleApiError
  }
};
</script>