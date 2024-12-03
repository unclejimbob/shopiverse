// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: true // <---
    }
  },  
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/supabase", "@nuxt/eslint"],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
  app: {
    head: {
      title: "Shopiverse",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js",
          defer: true,
        },
      ],
    },
  },
});