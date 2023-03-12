// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=500, initial-scale=1",
      title: "DVGames",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "возрождение портала", content: "портал двгеймс." },
      ],
    },
  },
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
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
});
