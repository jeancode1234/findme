<template>
  <div class="min-h-screen bg-slate-50 py-10 font-poppins">
    <div
      class="mx-auto grid max-w-7xl gap-8 rounded-[40px] bg-white p-4 shadow-2xl md:grid-cols-2 md:p-0"
    >
      <!-- Partie gauche : Visuel -->
      <div
        class="hidden overflow-hidden rounded-[40px] bg-cover bg-center text-white md:block"
        :style="`background-image: url(${heroImg})`"
      >
        <div
          class="flex h-full flex-col justify-between rounded-[40px] bg-slate-900/70 p-8"
        >
          <div class="space-y-4">
            <img :src="logo" alt="findMe logo" class="w-24 object-contain" />
            <h1 class="text-4xl font-bold leading-tight">
              Precision Digital Addressing for everyone.
            </h1>
          </div>
        </div>
      </div>

      <!-- Partie droite : Formulaire -->
      <div class="flex items-center justify-center px-6 py-10 md:px-16">
        <div class="w-full max-w-xl">
          <h1 class="text-3xl font-bold text-slate-900 md:text-4xl mb-2">
            Créez votre compte
          </h1>
          <p class="text-sm text-slate-500 mb-8">
            Inscrivez-vous pour accéder à vos services.
          </p>

          <form
            @submit.prevent="onRegister"
            class="mt-10 space-y-6 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm"
          >
            <!-- Nom complet -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-700"
                >Nom complet</label
              >
              <input
                v-model="form.name"
                @input="clearError('name')"
                @blur="validateField('name', form.name)"
                type="text"
                placeholder="Jean Dupont"
                :class="[
                  'w-full rounded-3xl px-5 py-4 text-sm outline-none transition-all duration-300 border-2',
                  fieldErrors.name
                    ? 'border-red-500 bg-red-50'
                    : form.name.length >= 3
                    ? 'border-green-500 bg-white'
                    : 'border-slate-200 bg-white focus:border-blue-500',
                ]"
              />
              <p v-if="fieldErrors.name" class="mt-2 text-sm text-red-600">
                {{ fieldErrors.name }}
              </p>
            </div>

            <!-- Email -->
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
                    ? 'border-red-500 bg-red-50'
                    : form.email.includes('@')
                    ? 'border-green-500 bg-white'
                    : 'border-slate-200 bg-white focus:border-blue-500',
                ]"
              />
              <p v-if="fieldErrors.email" class="mt-2 text-sm text-red-600">
                {{ fieldErrors.email }}
              </p>
            </div>

            <!-- Mot de passe -->
            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-700"
                >Mot de passe</label
              >
              <input
                v-model="form.password"
                @input="clearError('password')"
                @blur="validateField('password', form.password)"
                type="password"
                placeholder="••••••••"
                :class="[
                  'w-full rounded-3xl px-5 py-4 text-sm outline-none transition-all duration-300 border-2',
                  fieldErrors.password
                    ? 'border-red-500 bg-red-50'
                    : form.password.length >= 8
                    ? 'border-green-500 bg-white'
                    : 'border-slate-200 bg-white focus:border-blue-500',
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
              {{ isLoading ? "Création en cours..." : "Créer un compte" }}
            </button>
          </form>

          <p class="mt-8 text-center text-sm text-slate-500">
            Déjà un compte ?
            <NuxtLink to="/auth/login" class="font-semibold text-green-600"
              >Se connecter</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import logo from "~/images/logo-findme-wht.png";
import heroImg from "~/images/city.jpg";

definePageMeta({ middleware: ["guest"] });

const {
  register,
  isLoading,
  fieldErrors,
  clearError,
  validateField,
  validateForm,
} = useAuth();

const form = ref<RegisterPayload>({ name: "", email: "", password: "" });

// Bouton activé uniquement si les champs ne sont pas vides
const isFormReady = computed(
  () => form.value.name && form.value.email && form.value.password
);

const onRegister = async () => {
  // Validation avant envoi
  if (!validateForm(form.value)) {
    toast.error("Veuillez corriger les erreurs dans le formulaire.");
    return;
  }

  try {
    const role = await register(form.value);
    if (role) {
      // Redirection selon le rôle retourné par le composable
    await navigateTo('/auth/loading');
    }
  } catch (err) {
    // Les erreurs sont capturées et affichées via le composable useAuth
  }
};
</script>