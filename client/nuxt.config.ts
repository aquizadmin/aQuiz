// https://nuxt.com/docs/api/configuration/nuxt-config

import eslintPlugin from 'vite-plugin-eslint';

import {resolve} from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicons/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
        { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
        { name: 'theme-color', content: '#ffffff' },
      ],
    }
  },
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
