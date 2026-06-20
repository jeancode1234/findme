<template>
  <header
    class="bg-white border-b border-slate-100 shadow-sm font-poppins sticky top-0 z-50"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="h-20 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/images/logo-findme.png"
            alt="FindMe"
            class="w-[180px] object-contain"
          />
        </NuxtLink>

        <ul class="hidden lg:flex items-center gap-10">
          <li v-for="menu in menus" :key="menu.to">
            <NuxtLink
              :to="menu.to"
              class="relative text-[15px] font-semibold transition-all duration-300"
              :class="
                route.path === menu.to
                  ? 'text-[#082F5A]'
                  : 'text-slate-700 hover:text-[#082F5A]'
              "
            >
              {{ menu.label }}

              <span
                v-if="route.path === menu.to"
                class="absolute left-0 -bottom-7 h-[3px] w-full rounded-full bg-[#005230]"
              />
            </NuxtLink>
          </li>
        </ul>

        <div class="hidden lg:flex items-center gap-4">
          <button
            class="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-[#082F5A] font-medium hover:bg-slate-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.6 9h16.8M3.6 15h16.8"
              />
            </svg>

            <span>FR</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
           <p class="text-sm text-gray-600 font-poppins">{{ auth.user.value?.email }}</p>
          <NuxtLink
            v-if="auth.user.value?.role=='user'"
            to="/dashboard"
            class="px-6 py-2 rounded-full bg-[#203B51] text-white font-poppins shadow-md hover:bg-[#005230] transition"
          >
            Dashboard
          </NuxtLink>
          <NuxtLink
            v-else
            to="/auth/login"
            class="px-6 py-2 rounded-full bg-[#203B51] text-white font-poppins shadow-md hover:bg-[#005230] transition"
          >
            Get Started
          </NuxtLink>
        </div>

        <button class="lg:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-[#203B51]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-[#203B51]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <MobileNavbar
      :closeMenu="closeMenu"
      :mobileMenuOpen="mobileMenuOpen"
      :menus="menus"
    />
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"; // 🌟 Correction 1 : Import explicite de ref et computed
import { useRoute } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const route = useRoute();
const auth = useAuth();

// 🌟 Correction 2 : Remplacement de isAuthenticated inexistant par une propriété calculée basée sur auth.user
// const isAuthenticated = computed(() => !!auth.user.value);

const mobileMenuOpen = ref(false);

// 🌟 Correction 3 : Une vraie fonction de fermeture pour l'enfant MobileNavbar
const closeMenu = () => {
  mobileMenuOpen.value = false;
};

const menus = [
  { label: "Accueil", to: "/" },
  { label: "Fonctionnalités", to: "/fonctionnalites" },
  { label: "Comment ça marche", to: "/comment-ca-marche" },
  { label: "À propos", to: "/a-propos" },
  { label: "Support", to: "/support" },
];
</script>