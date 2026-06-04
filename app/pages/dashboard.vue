<template>
  <div class="min-h-screen bg-slate-50 px-6 py-10 lg:px-12">
    <div class="mx-auto max-w-6xl rounded-[40px] bg-white p-8 shadow-2xl">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 class="text-4xl font-bold text-slate-900">Mon dashboard</h1>
          <p class="mt-3 text-sm text-slate-500">Bienvenue sur votre espace sécurisé. Gérez vos adresses numériques et suivez vos livraisons.</p>
        </div>
        <button @click="logout" class="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
          Se déconnecter
        </button>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-2">
        <div class="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
          <h2 class="text-xl font-semibold text-slate-900">Votre profil</h2>
          <div class="mt-6 space-y-4 text-sm text-slate-600">
            <div>
              <span class="block text-slate-500">Nom</span>
              <p class="mt-1 rounded-3xl bg-white px-4 py-3 text-slate-900 shadow-sm">{{ user?.name || 'Utilisateur' }}</p>
            </div>
            <div>
              <span class="block text-slate-500">Email</span>
              <p class="mt-1 rounded-3xl bg-white px-4 py-3 text-slate-900 shadow-sm">{{ user?.email || 'Non renseigné' }}</p>
            </div>
          </div>
        </div>

        <div class="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
          <h2 class="text-xl font-semibold text-slate-900">Récapitulatif</h2>
          <div class="mt-6 space-y-4 text-sm text-slate-600">
            <div class="rounded-3xl bg-white p-4 shadow-sm">
              <p class="text-slate-500">Statut</p>
              <p class="mt-2 font-semibold text-slate-900">Connecté</p>
            </div>
            <div class="rounded-3xl bg-white p-4 shadow-sm">
              <p class="text-slate-500">Actions disponibles</p>
              <ul class="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                <li>Voir vos adresses</li>
                <li>Suivre vos livraisons</li>
                <li>Accéder à vos paramètres</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const auth = useAuth()
const router = useRouter()

const user = auth.user

const logout = () => {
  auth.logout()
  router.push('/')
}

definePageMeta({ middleware: ['auth', 'logging'] })
</script>
