// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-07-29",
  app: {
    head: {
      title: "Pirates Memory",
    },
  },
  imports: {
    dirs: ["stores"],
  },
  modules: ["@pinia/nuxt"],
});
