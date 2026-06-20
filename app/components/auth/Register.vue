<template>
  <div
    class="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950"
  >
    <div
      class="w-full max-w-lg bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"
    >
      <h1 class="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
        Créer un compte
      </h1>
      <p class="text-slate-500 text-sm mb-8">
        Rejoignez l'écosystème findMe en quelques étapes.
      </p>

      <div
        v-if="globalError"
        class="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-sm text-red-600 rounded-xl"
      >
        {{ globalError }}
      </div>

      <form @submit.prevent="onRegister" class="space-y-4">
        <div>
          <label class="text-xs font-bold text-slate-700 dark:text-slate-300"
            >Nom complet</label
          >
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full mt-1 p-3 rounded-xl border bg-slate-50 dark:bg-slate-800"
            :class="fieldErrors.name ? 'border-red-500' : 'border-slate-200'"
          />
          <span
            v-if="fieldErrors.name"
            class="text-xs text-red-500 font-semibold"
            >{{ fieldErrors.name }}</span
          >
        </div>

        <div>
          <label class="text-xs font-bold text-slate-700 dark:text-slate-300"
            >Adresse Email</label
          >
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full mt-1 p-3 rounded-xl border bg-slate-50 dark:bg-slate-800"
            :class="fieldErrors.email ? 'border-red-500' : 'border-slate-200'"
          />
          <span
            v-if="fieldErrors.email"
            class="text-xs text-red-500 font-semibold"
            >{{ fieldErrors.email }}</span
          >
        </div>

        <div>
          <label class="text-xs font-bold text-slate-700 dark:text-slate-300"
            >Mot de passe</label
          >
          <input
            v-model="form.password"
            type="password"
            required
            class="w-full mt-1 p-3 rounded-xl border bg-slate-50 dark:bg-slate-800"
            :class="
              fieldErrors.password ? 'border-red-500' : 'border-slate-200'
            "
          />
          <span
            v-if="fieldErrors.password"
            class="text-xs text-red-500 font-semibold"
            >{{ fieldErrors.password }}</span
          >
        </div>

        <BaseButton
          type="submit"
          :loading="isLoading"
          class="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold mt-4"
        >
          S'inscrire maintenant
        </BaseButton>
      </form>

      <p class="text-center text-xs text-slate-500 mt-6">
        Déjà membre ?
        <NuxtLink to="/auth/login" class="text-emerald-600 font-bold"
          >Connectez-vous</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "auth" });

// Récupération des outils métier
const { register, isLoading, globalError, fieldErrors } = useAuth();

// Typage strict du formulaire
const form = ref<RegisterPayload>({
  name: "",
  email: "",
  password: "",
});

// Validation temps réel : nettoie les erreurs de champ à chaque saisie
watch(
  form,
  () => {
    if (globalError.value) globalError.value = "";
    if (fieldErrors.value.name) delete fieldErrors.value.name;
    if (fieldErrors.value.email) delete fieldErrors.value.email;
    if (fieldErrors.value.password) delete fieldErrors.value.password;
  },
  { deep: true }
);

const onRegister = async () => {
  // register() doit retourner le rôle (voir mise à jour du composable)
  const role = await register(form.value);

  if (role) {
    // Redirection dynamique basée sur le rôle reçu de l'API
    if (role === "admin") {
      await navigateTo("/admin/dashboard");
    } else {
      await navigateTo("/dashboard");
    }
  }
};
</script>