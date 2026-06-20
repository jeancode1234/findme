// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true, // Obligatoire pour le référencement SEO et la performance

  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt",'vue-sonner/nuxt'],
  runtimeConfig: {
    public: {
      // URL par défaut pointant vers votre Mock Server Postman [cite: 1]
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        "https://your-mock-server-url.pstmn.io/api",
    },
  },

  app: {
    head: {
      title: "findMe – Géolocalisation & Adressage Urbain Intelligent",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        }, // Mobile-first strict [cite: 33, 49]
        {
          name: "description",
          content:
            "Créez, cartographiez et exportez vos adresses numériques normalisées en Afrique avec GeoLink Africa.",
        },
      ],
      htmlAttrs: {
        lang: "fr", // Gestion de la sémantique de base [cite: 30, 33, 50]
      },
    },
  },

  compatibilityDate: "2026-05-01",
});