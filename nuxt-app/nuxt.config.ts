/* // https://v3.nuxtjs.org/api/configuration/nuxt.config
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
  css: ["@/assets/main.scss"],
  //script: [{ src: `/bootstrap.bundle.min.js` }, { src: "/hello.js" }],
  head: {
    title: "Prova Nuxt",
    script: [
      { src: "/bootstrap.bundle.min.js" },
    ],
  },
});
 */