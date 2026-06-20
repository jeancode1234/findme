<template>
  <div class="min-h-screen bg-slate-50 py-10 font-poppins">
    <div
      class="mx-auto grid max-w-7xl gap-8 rounded-[40px] bg-white p-4 shadow-2xl md:grid-cols-2 md:p-0"
    >
      <!-- Partie gauche -->
      <div
        class="hidden overflow-hidden rounded-[40px] bg-cover bg-center text-white md:block"
        :style="`background-image: url(${heroImg})`"
      >
        <div
          class="flex h-full flex-col justify-between rounded-[40px] bg-slate-900/70 p-8"
        >
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <img
                :src="logo"
                alt="findMe logo"
                class="w-24 object-contain"
              />
            </div>

```
        <h1 class="max-w-xl text-4xl font-bold leading-tight text-white">
          Precision Digital Addressing for everyone.
        </h1>

        <p class="max-w-xl text-sm leading-6 text-slate-200/90">
          Rejoignez des milliers d'entrepreneurs et de livreurs en Afrique
          qui utilisent findMe pour localiser l'impossible.
        </p>
      </div>

      <div
        class="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
      >
        <p class="text-sm uppercase tracking-[0.3em] text-slate-200">
          Easy access
        </p>

        <p class="mt-3 text-base text-white/90">
          Gérez vos adresses numériques, suivez vos livraisons et restez
          connecté à votre clientèle.
        </p>
      </div>
    </div>
  </div>

  <!-- Partie droite -->
  <div class="flex items-center justify-center px-6 py-10 md:px-16">
    <div class="w-full max-w-xl">
      <div class="mb-8">
        <p class="text-sm uppercase text-slate-400">
          Bon retour !
        </p>

        <h1 class="text-3xl font-bold text-slate-900 md:text-4xl">
          Connectez-vous à votre espace
        </h1>
      </div>

      <p class="text-sm text-slate-500">
        Connectez-vous pour accéder à vos adresses numériques,
        livraisons et notifications.
      </p>

      <form
        @submit.prevent="handleSubmit"
        class="mt-10 space-y-6 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm"
      >
        <!-- Email -->
        <div>
          <label
            for="email"
            class="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email
          </label>

          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="nom@exemple.com"
            :class="[
              'w-full rounded-3xl px-5 py-4 text-sm outline-none transition',
              emailError
                ? 'border border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border border-slate-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-200',
            ]"
          />

          <p
            v-if="emailError"
            class="mt-2 text-sm text-red-600"
          >
            {{ emailError }}
          </p>
        </div>

        <!-- Password -->
        <div>
          <div class="mb-2 flex items-center justify-between">
            <label
              for="password"
              class="text-sm font-semibold text-slate-700"
            >
              Mot de passe
            </label>

            <NuxtLink
              to="/auth/forgot-password"
              class="text-sm text-green-700 hover:text-green-900"
            >
              Mot de passe oublié ?
            </NuxtLink>
          </div>

          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="••••••••"
            :class="[
              'w-full rounded-3xl px-5 py-4 text-sm outline-none transition',
              passwordError
                ? 'border border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border border-slate-200 bg-white focus:border-green-600 focus:ring-2 focus:ring-green-200',
            ]"
          />

          <p
            v-if="passwordError"
            class="mt-2 text-sm text-red-600"
          >
            {{ passwordError }}
          </p>
        </div>

        <!-- Remember me -->
        <div
          class="flex items-center justify-between text-sm text-slate-600"
        >
          <label class="inline-flex items-center gap-3">
            <input
              v-model="remember"
              type="checkbox"
              class="h-4 w-4 rounded border-slate-300 text-green-600 focus:ring-green-500"
            />

            Se souvenir de moi
          </label>
        </div>

        <!-- Global Error -->
        <div
          v-if="errorMessage"
          class="rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {{ errorMessage }}
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading || !isFormValid"
          class="inline-flex w-full items-center justify-center rounded-full bg-[#0B2C53] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#163B5A] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span v-if="loading">
            Connexion...
          </span>

          <span v-else>
            Se connecter
          </span>
        </button>
      </form>

      <!-- Social -->
      <div class="relative my-8">
        <div
          class="absolute inset-x-0 top-1/2 h-px bg-slate-200"
        />

        <p
          class="relative mx-auto inline-block bg-white px-4 text-sm text-slate-500"
        >
          ou continuer avec
        </p>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          class="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Google
        </button>

        <button
          type="button"
          class="rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Apple
        </button>
      </div>

      <p class="mt-8 text-center text-sm text-slate-500">
        Pas encore de compte ?

        <NuxtLink
          to="/auth/register"
          class="font-semibold text-green-600 hover:text-green-800"
        >
          Créer un compte
        </NuxtLink>
      </p>
    </div>
  </div>
</div>
```

  </div>
</template>

<script setup lang="ts">
import logo from "~/images/logo-findme-wht.png";
import heroImg from "~/images/city.jpg";

import { useLoginForm } from "~/composables/useLoginForm";

definePageMeta({
  middleware: ["guest"],
});

const {
  email,
  password,
  remember,

  emailError,
  passwordError,

  errorMessage,

  loading,

  isFormValid,

  handleSubmit,
} = useLoginForm();
</script>

<style scoped>
</style>
