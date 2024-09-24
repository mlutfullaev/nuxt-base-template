// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/index.scss'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt'
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: '@/components/Ui'
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: import.meta.env.BACKEND_API_BASE_URL
    }
  }
})