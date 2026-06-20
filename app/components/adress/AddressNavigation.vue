<template>
  <div class="flex justify-between mt-10 border-t pt-6">
    <button
      v-if="step > 1"
      @click="$emit('previous')"
      class="px-6 py-3 border rounded-xl"
    >
      Précédent
    </button>

    <button
      @click="$emit('next')"
      :disabled="disabled"
      class="px-6 py-3 bg-[#082F5A] text-white rounded-xl disabled:bg-slate-300"
    >
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  step: number;
  disabled: boolean;
  label: string;
}>();

defineEmits(["next", "previous"]);
</script>