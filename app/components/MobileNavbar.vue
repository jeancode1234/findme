<template>
  <div>
    <!-- Menu Mobile -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden bg-white border-t border-slate-100 shadow-lg"
      >
        <div class="px-6 py-6 space-y-5 font-poppins">
          <NuxtLink
            v-for="menu in menus"
            :key="menu.to"
            :to="menu.to"
            class="block text-base font-medium"
            :class="
              route.path === menu.to ? 'text-[#005230]' : 'text-slate-700'
            "
            @click="closeMenu"
          >
            {{ menu.label }}
          </NuxtLink>

          <div class="border-t pt-5 space-y-4">
            <button
              class="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-[#082F5A]"
            >
              <span>FR</span>
            </button>
              <NuxtLink v-if="isAuthenticated"
              to="/dashboard"
              class="block w-full text-center py-3 rounded-full bg-[#203B51] text-white font-semibold hover:bg-[#005230] transition"
              @click="closeMenu"
            >
              Get Started
            </NuxtLink>
            <NuxtLink v-else
              to="/auth/login"
              class="block w-full text-center py-3 rounded-full bg-[#203B51] text-white font-semibold hover:bg-[#005230] transition"
              @click="closeMenu"
            >
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {useAuth} from '@/composables/useAuth'
const {isAuthenticated} = useAuth();
const props = defineProps({
  mobileMenuOpen: { type: Boolean, default: false },
  closeMenu: { type: Function, required: true },
  menus: { type: Array, default: () => [] },
})

const route = useRoute();
</script>

<style>
</style>