// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  script: [
    {
      src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
    }
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  app: {
    pageTransition: { name: 'about', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
})
/*
  css: ["~assets/css/main.css"],
  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["~assets/scss/mixins.scss", "~assets/scss/variables.scss"],
  },
  */

