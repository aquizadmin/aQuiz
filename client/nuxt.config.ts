// https://nuxt.com/docs/api/configuration/nuxt-config

import eslintPlugin from 'vite-plugin-eslint';

import { resolve } from 'path';

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/")
    },
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', '~/assets/style.scss'],
    build: {
        transpile: ['vuetify']
    },
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
            Outfit: true
        }
    }
})
