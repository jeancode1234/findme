<template>
  <div class="min-h-screen bg-slate-50 py-10 font-poppins">
    <div class="mx-auto grid max-w-7xl gap-8 rounded-[40px] bg-white p-4 shadow-2xl md:grid-cols-2 md:p-0">
      <div
        class="hidden overflow-hidden rounded-[40px] bg-cover bg-center text-white md:block"
        :style="`background-image: url(${heroImg})`"
      >
        <div class="flex h-full flex-col justify-between rounded-[40px] bg-slate-900/70 p-8">
          <div class="space-y-4">

            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <img :src="logo" alt="findMe logo" class=" w-24 object-contain" />
              </div>
              <h1 class="max-w-xl text-4xl font-bold leading-tight text-white">
                Precision Digital Addressing for everyone.
              </h1>
              <p class="max-w-xl text-sm leading-6 text-slate-200/90">
                Rejoignez des milliers d'entrepreneurs et de livreurs en Afrique qui utilisent findMe pour localiser l'impossible.
              </p>
            </div>
          </div>

          <div class="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <p class="text-sm uppercase tracking-[0.3em] text-slate-200">Easy access</p>
            <p class="mt-3 text-base text-white/90">
              Gérez vos adresses numériques, suivez vos livraisons et restez connecté à votre clientèle.
            </p>
          </div>

          <div class="mt-10 flex items-center gap-4 text-sm text-slate-200">
            <div class="flex -space-x-3">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/10 text-xs font-semibold">JS</span>
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/10 text-xs font-semibold">MI</span>
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/10 text-xs font-semibold">AS</span>
            </div>
            <p class="font-semibold text-white/90">Expertise approuvée par 5 000+ utilisateurs</p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center px-6 py-10 md:px-16">
        <div class="w-full max-w-xl">
          <div class="mb-8 flex items-center gap-4">
            <div>
              <p class="text-sm uppercase text-slate-400">Bienvenue chez findMe</p>
              <h1 class="text-3xl font-bold text-slate-900 md:text-4xl">Créez votre compte</h1>
            </div>
          </div>

          <p class="text-sm text-slate-500">
            Inscrivez-vous pour accéder à vos adresses numériques, livraisons et services de localisation.
          </p>

          <form @submit.prevent="handleSubmit" class="mt-10 space-y-6 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-700" for="fullName">Nom complet</label>
              <input
                id="fullName"
                v-model="fullName"
                type="text"
                placeholder="Jean Dupont"
                class="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
              <p v-if="fullNameError" class="mt-2 text-sm text-red-600">{{ fullNameError }}</p>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-700" for="email">Email ou Téléphone</label>
              <input
                id="email"
                v-model="email"
                type="text"
                placeholder="nom@exemple.com ou +237 ..."
                class="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
              <p v-if="emailError" class="mt-2 text-sm text-red-600">{{ emailError }}</p>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-700" for="password">Mot de passe</label>
              <input
                id="password"
                v-model="password"
                type="password"
                placeholder="••••••••"
                class="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
              <p v-if="passwordError" class="mt-2 text-sm text-red-600">{{ passwordError }}</p>
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-slate-700" for="confirmPassword">Confirmez le mot de passe</label>
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                placeholder="••••••••"
                class="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
              <p v-if="confirmPasswordError" class="mt-2 text-sm text-red-600">{{ confirmPasswordError }}</p>
            </div>

            <div class="flex items-center gap-3 text-sm text-slate-600">
              <label class="inline-flex items-center gap-3">
                <input type="checkbox" v-model="agreeTerms" class="h-4 w-4 rounded border-slate-300 text-green-600 focus:ring-green-500" />
                J'accepte les conditions d'utilisation
              </label>
            </div>

            <div>
              <button
                type="submit"
                :disabled="loading || !isFormValid"
                class="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0B2C53] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#163B5A] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {{ loading ? 'Création...' : 'Créer un compte' }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M13 6l6 6-6 6"></path>
                </svg>
              </button>
            </div>

            <p v-if="errorMessage" class="rounded-3xl bg-red-50 p-4 text-sm text-red-700">
              {{ errorMessage }}
            </p>
          </form>

          <div class="relative my-8">
            <div class="absolute inset-x-0 top-1/2 h-px bg-slate-200"></div>
            <p class="relative mx-auto inline-block bg-white px-4 text-sm text-slate-500">ou continuer avec</p>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <button type="button" class="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Google
            </button>
            <button type="button" class="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Apple
            </button>
          </div>

          <p class="mt-8 text-center text-sm text-slate-500">
            Déjà un compte ?
            <NuxtLink to="/auth/login" class="font-semibold text-green-600 hover:text-green-800">Se connecter</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import { useRegisterForm } from '../../composables/useRegisterForm'
import logo from '../../images/logo-findme-wht.png'
import heroImg from '../../images/city.jpg'

const router = useRouter()
const {
  fullName,
  email,
  password,
  confirmPassword,
  agreeTerms,
  fullNameError,
  emailError,
  passwordError,
  confirmPasswordError,
  loading,
  errorMessage,
  isFormValid,
  isAuthenticated,
  handleSubmit,
} = useRegisterForm()

watch(isAuthenticated, (value) => {
  if (value) {
    router.push('/')
  }
})
</script>

<style scoped>
</style>
