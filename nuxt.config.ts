// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxt/ui'],
    css: [
        '~/assets/css/main.css'
    ],
    imports: {
        dirs: ['models/*.ts', 'server/utils/*.ts']
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false, // [!code ++]
        },
    ],
    colorMode: {
        preference: 'dark'
    }
})
