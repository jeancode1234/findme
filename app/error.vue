<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number; message?: string } }>()
const statusCode = props.error?.statusCode ?? 500
const message = props.error?.message || 'Une erreur inattendue est survenue. Merci de réessayer plus tard.'
</script>

<template>
  <div class="min-h-screen bg-slate-100 px-6 py-24 text-slate-900 font-poppins">
    <div class="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-2xl">
      <div class="flex items-center gap-4 text-slate-700">
        <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-3xl font-bold text-rose-700">!</div>
        <div>
          <p class="text-sm uppercase tracking-[0.3em] text-rose-500">Erreur applicative</p>
          <h1 class="mt-3 text-4xl font-semibold text-slate-900">Oups, quelque chose s’est mal passé.</h1>
        </div>
      </div>

      <div class="mt-8 space-y-4 text-slate-600">
        <p class="text-sm">Code : <span class="font-semibold text-slate-900">{{ statusCode }}</span></p>
        <p class="rounded-3xl bg-slate-50 p-6 text-base leading-7 text-slate-700">{{ message }}</p>
        <p class="text-sm text-slate-500">Cette page a été interceptée par le gestionnaire d’erreur global. Vous pouvez retourner à l’accueil ou réessayer ultérieurement.</p>
      </div>

      <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <NuxtLink to="/" class="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">Retour à l’accueil</NuxtLink>
        <NuxtLink to="/auth/login" class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">Réessayer</NuxtLink>
      </div>
    </div>
  </div>
</template>
