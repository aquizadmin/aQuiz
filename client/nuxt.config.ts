// https://nuxt.com/docs/api/configuration/nuxt-config

import eslintPlugin from 'vite-plugin-eslint';

import {resolve} from 'path';

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '~/assets/style.scss'],
  build: {
    transpile: ['vuetify']
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:5678',
    }
  },
  ssr: false,
  modules: [
    '@nuxtjs/google-fonts',
  ],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  googleFonts: {
    families: {
      Outfit: [300, 500, 600, 700],
    }
  }
})
