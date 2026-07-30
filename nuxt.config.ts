import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-29',
  app: {
    head: {
      title: 'Pirates Memory',
    },
  },
  css: ['assets/css/main.css'],
  imports: {
    dirs: ['stores'],
  },
  modules: ['@pinia/nuxt', '@nuxt/eslint'],
  vite: {
    plugins: [tailwindcss()],
  },
});
