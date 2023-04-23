import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labs from 'vuetify/labs/components'


export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        directives,
        components: {
            ...components,
            ...labs,
        },
        theme: {
            defaultTheme: 'dark',
            themes: {
                dark: {
                    dark: true,
                    colors: {
                        primary: '#09090A',
                        'primary-lighten-1': '#04011C',
                        secondary: '#1E1B33'
                    },
                }
            }
        }
    });

    nuxtApp.vueApp.use(vuetify)
});
