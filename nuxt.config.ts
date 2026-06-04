// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [path.resolve(process.cwd(), 'assets/css/tailwind.css')],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [viteTsconfigPaths()],
  },
   modules: ['@nuxt/fonts'],
  fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'google'
      }
    ]
  }
})
