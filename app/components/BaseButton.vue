<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-brand disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[
      variant === 'primary'
        ? 'bg-brand text-white hover:bg-brand-dark'
        : 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
    ]"
    :aria-busy="loading"
  >
    <span
      v-if="loading"
      class="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
      aria-hidden="true"
    />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String as () => "button" | "submit",
    default: "button",
  },
  variant: {
    type: String,
    default: "primary",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>