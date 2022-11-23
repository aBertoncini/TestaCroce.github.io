// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Eliminacode",
      meta: [],
      script: [
        //scripts per CDN
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  //target: "server",
  css: ["@/assets/main.scss"],
});
