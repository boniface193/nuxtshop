// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    { src: "./plugins/jquery.js", mode: "client" },
    { src: "~/plugins/jquery.scrollUp.min.js", mode: "client" },
    { src: "~/plugins/price-range.js", mode: "client" },
    { src: "~/plugins/jquery.prettyPhoto.js", mode: "client" },
    { src: "~/plugins/main.js", mode: "client" },
    { src: "~/plugins/bootstrap.min.js", mode: "client" },
  ],

  devtools: { enabled: true }
})
