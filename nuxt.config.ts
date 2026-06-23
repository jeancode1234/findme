// nuxt.config.ts
export default defineNuxtConfig({
  // Rendu côté serveur pour le SEO et les performances
  ssr: true,

  // Modules Nuxt
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "vue-sonner/nuxt"],

  // Variables d'environnement
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        "https://your-mock-server-url.pstmn.io/api",
    },
  },

  // Configuration globale de l'application
  app: {
    head: {
      title: "findMe – Géolocalisation & Adressage Urbain Intelligent",

      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        {
          name: "description",
          content:
            "Créez, cartographiez et exportez vos adresses numériques normalisées en Afrique avec findMe.",
        },
      ],

      htmlAttrs: {
        lang: "fr",
      },
    },
  },

  // Configuration TypeScript
  typescript: {
    strict: true,
    typeCheck: false,
  },

  // Outils de développement
  devtools: {
    enabled: true,
  },

  compatibilityDate: "2026-05-01",
});
