// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          //additionalData: '@use "@/assets/bootstrap/bsStyle.scss" as *;',
        },
      },
    },
  },
  css: ["@/assets/_color.scss"]
});
