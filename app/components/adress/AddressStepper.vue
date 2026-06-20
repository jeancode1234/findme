<template>
  <div class="bg-white rounded-2xl shadow-sm border p-6 mb-8  ">
    <div class="flex items-center justify-between ">

      <div
        v-for="item in steps"
        :key="item.id"
        class="flex items-center flex-1 w-full container mx-auto"
      >
        <div class="flex flex-col items-center">

          <div
            class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all"
            :class="
              currentStep >= item.id
                ? 'bg-[#2E7D32] text-white'
                : 'bg-slate-200 text-slate-500'
            "
          >
            {{ item.id }}
          </div>

          <span
            class="mt-3 text-sm font-medium text-center"
            :class="
              currentStep >= item.id
                ? 'text-[#2E7D32]'
                : 'text-slate-500'
            "
          >
            {{ item.label }}
          </span>

        </div>

        <div
          v-if="item.id !== 3"
          class="flex-1 h-1 mx-4 rounded-full"
          :class="
            currentStep > item.id
              ? 'bg-[#2E7D32]'
              : 'bg-slate-200'
          "
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentStep: number
}>()

const steps = [
  {
    id: 1,
    label: 'Localisation'
  },
  {
    id: 2,
    label: 'Informations'
  },
  {
    id: 3,
    label: 'Confirmation'
  }
]
</script>