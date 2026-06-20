<template>
  <div class="flex flex-col gap-1 w-full mb-4">
    <label
      :for="id"
      class="text-sm font-medium text-slate-700 dark:text-slate-300"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${id}-error` : undefined"
      class="w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand"
      :class="{ 'border-red-500 focus:ring-red-500': error }"
    />
    <span
      v-if="error"
      :id="`${id}-error`"
      class="text-xs font-medium text-red-500 mt-1"
      role="alert"
    >
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="typescript">
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: "text" },
  modelValue: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  error: { type: String, default: "" },
});
defineEmits(["update:modelValue"]);
</script>