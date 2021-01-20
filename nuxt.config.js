export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'og title' },
      { property: 'og:description', content: 'og description' },
      { property: 'og:image', content: 'https://i.pinimg.com/originals/1b/90/7c/1b907cad177181b12cea64203dcb7623.jpg' },
      { property: 'og:image:alt', content: 'cover photo' },
      { property: 'og:site_name', content: 'Nordisk musculupati(site name)' },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/folders/vue/nuxt-test/favicon.ico' }
    ]
  },
  

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  router:{
    base: '/folders/vue/nuxt-test/'
  },

  target: 'static',

  ssr: true,

  generate: {
    fallback: '404.html'
  },
}
