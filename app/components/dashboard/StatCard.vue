<template>
  <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
      {{ label }}
    </p>
    <div class="flex justify-between items-end">
      <h3 class="text-3xl font-extrabold text-slate-900">{{ value }}</h3>

      <span
        v-if="sub"
        class="text-[10px] font-bold px-2 py-1 rounded-full"
        :class="
          variant === 'neutral'
            ? 'bg-slate-100 text-slate-600'
            : 'bg-emerald-50 text-emerald-600'
        "
      >
        {{ sub }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    value: string | number;
    sub?: string;
    variant?: "emerald" | "neutral"; // Permet de varier le style
  }>(),
  {
    variant: "emerald",
  }
);
</script>