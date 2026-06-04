<template>
  <div class="fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-3">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="[
        'group flex items-start gap-4 rounded-3xl border px-4 py-4 shadow-lg transition duration-200',
        toast.type === 'success' ? 'border-emerald-100 bg-emerald-50 text-emerald-800' : '',
        toast.type === 'error' ? 'border-rose-100 bg-rose-50 text-rose-800' : '',
        toast.type === 'info' ? 'border-sky-100 bg-sky-50 text-sky-800' : '',
      ]"
    >
      <div class="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/75 text-xl font-bold shadow-sm">
        <span v-if="toast.type === 'success'">✓</span>
        <span v-else-if="toast.type === 'error'">!</span>
        <span v-else>i</span>
      </div>

      <div class="min-w-0 flex-1">
        <p class="text-sm font-semibold">{{ toast.title }}</p>
        <p class="mt-1 text-sm leading-6 opacity-90">{{ toast.message }}</p>
      </div>

      <button
        type="button"
        class="text-slate-500 transition hover:text-slate-900"
        @click="removeToast(toast.id)"
        aria-label="Fermer la notification"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../composables/useToast'
const { toasts, removeToast } = useToast()
</script>
