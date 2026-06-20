<template>
  <div class="fixed top-5 right-5 z-[9999] flex flex-col gap-3 w-full max-w-sm px-4 pointer-events-none">
    <transition-group name="toast">
      <div
        v-for="toast in notifications"
        :key="toast.id"
        class="pointer-events-auto p-4 rounded-2xl border shadow-xl flex items-start gap-3 bg-white dark:bg-gray-800 transition-all duration-300"
        :class="typeClasses[toast.type]"
      >
        <span class="text-xl mt-0.5">{{ typeIcons[toast.type] }}</span>
        
        <div class="flex-1">
          <p class="text-sm font-semibold text-slate-900 dark:text-white">
            {{ toast.message }}
          </p>
        </div>

        <button 
          @click="removeNotification(toast.id)" 
          class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
        >
          ✕
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const { notifications, removeNotification } = useToast()

// Couleurs Tailwind adaptées selon le type
const typeClasses = {
  success: 'border-green-200 bg-green-50/90 text-green-800 dark:border-green-900 dark:bg-green-950/90',
  error: 'border-red-200 bg-red-50/90 text-red-800 dark:border-red-900 dark:bg-red-950/90',
  warning: 'border-amber-200 bg-amber-50/90 text-amber-800 dark:border-amber-900 dark:bg-amber-950/90',
  info: 'border-slate-200 bg-slate-50/90 text-slate-800 dark:border-gray-700 dark:bg-gray-900/90',
}

// Émojis ou icônes selon le type
const typeIcons = {
  success: '🎉',
  error: '⚠️',
  warning: '🔔',
  info: 'ℹ️',
}
</script>

<style scoped>
/* Animations fluides d'apparition et de disparition */
.toast-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.9);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>