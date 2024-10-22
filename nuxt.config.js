export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'goldlombard.ru',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'vuesax/dist/vuesax.css',
        'boxicons/css/boxicons.min.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/vuesax'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        [
            '@naumstory/nuxtjs-yandex-metrika',
            {
                id: '69772645',
                webvisor: true
                clickmap:true,
                useCDN:false,
                trackLinks:true,
                accurateTrackBounce:true,
            }
        ]
    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}