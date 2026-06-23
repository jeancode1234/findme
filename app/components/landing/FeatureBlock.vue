<!-- components/landing/FeatureBlock.vue -->
<template>
  <section
    class="py-16 bg-white dark:bg-slate-900 transition-colors duration-200"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Ordre inversé sur desktop si la prop reverse est vraie -->
      <div :class="reverse ? 'md:order-2' : ''">
        <span
          v-if="badge"
          class="text-xs font-bold tracking-widest text-emerald-600 uppercase block mb-3"
        >
          {{ badge }}
        </span>
        <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
          <slot name="title" />
        </h2>
        <div class="text-slate-500 text-sm leading-relaxed mb-6">
          <slot name="description" />
        </div>
        <slot name="action" />
      </div>

      <div :class="reverse ? 'md:order-1' : ''" class="relative">
        <slot name="image" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  badge: { type: String, default: "" },
  reverse: { type: Boolean, default: false },
});
</script>