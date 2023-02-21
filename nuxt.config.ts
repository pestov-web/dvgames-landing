// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/app.scss";',
        },
      },
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    download: true,
  },
});
