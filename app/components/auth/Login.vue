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
        class="absolute inset-0 bg-gradient-to-b from-brand/60 to-slate-950/90 z-0"
      ></div>

      <div class="relative z-10">
        <NuxtLink
          to="/"
          class="text-2xl font-extrabold text-white flex items-center gap-2"
        >
          <span class="text-emerald-400">📍</span> findMe
        </NuxtLink>
        <h2
          class="text-4xl font-extrabold text-white mt-16 leading-tight max-w-sm"
        >
          Precision Digital Addressing for everyone.
        </h2>
      </div>

      <div
        class="relative z-10 max-w-sm bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
      >
        <span
          class="text-xs font-bold tracking-wider text-emerald-400 block mb-2 uppercase"
          >🛡️ TECHNOLOGIE GEOLINK</span
        >
        <p class="text-xs text-slate-200 leading-relaxed">
          Rejoignez des milliers d'entrepreneurs et de citoyens au Cameroun
          utilisant findMe pour localiser l'impossible.
        </p>
      </div>

      <div class="relative z-10 flex items-center gap-3">
        <div class="flex -space-x-3">
          <div
            class="w-8 h-8 rounded-full bg-slate-300 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-slate-800"
          >
            JD
          </div>
          <div
            class="w-8 h-8 rounded-full bg-emerald-400 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-slate-900"
          >
            ME
          </div>
          <div
            class="w-8 h-8 rounded-full bg-orange-300 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-slate-800"
          >
            AS
          </div>
        </div>
        <p class="text-xs text-slate-400 font-medium">
          Expertise européenne et africaine approuvée.
        </p>
      </div>
    </div>

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

        <div
          v-if="globalError"
          class="mb-6 p-4 bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 rounded-xl text-sm text-red-600 dark:text-red-400"
        >
          {{ globalError }}
        </div>

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
            <span
              v-if="fieldErrors.email"
              class="text-xs font-semibold text-red-500 mt-1 block"
              >{{ fieldErrors.email }}</span
            >
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
            <span
              v-if="fieldErrors.password"
              class="text-xs font-semibold text-red-500 mt-1 block"
              >{{ fieldErrors.password }}</span
            >
          </div>

          <BaseButton
            :loading="isLoading"
            type="submit"
            class="w-full bg-emerald-700 text-white rounded-xl py-3.5 font-bold"
          >
            Se connecter ➔
          </BaseButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useAuth } from "~/composables/useAuth";

definePageMeta({ layout: false });

const { login, isLoading, globalError, fieldErrors } = useAuth();
const showPassword = ref(false);

const credentials = ref<LoginPayload>({
  email: "",
  password: "",
});

// Validation temps réel
watch(
  credentials,
  () => {
    if (globalError.value) globalError.value = "";
    if (fieldErrors.value.email) delete fieldErrors.value.email;
    if (fieldErrors.value.password) delete fieldErrors.value.password;
  },
  { deep: true }
);

const onSubmit = async () => {
  // La fonction login doit retourner le rôle de l'utilisateur
  const role = await login(credentials.value);
  
  if (role) {
    // Redirection dynamique selon le rôle
    if (role === 'admin') {
      await navigateTo('/admin/dashboard');
    } else {
      await navigateTo('/dashboard');
    }
  }
};
</script>