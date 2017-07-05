const axios = require('axios')
module.exports = {
  modules: [
    '@nuxtjs/font-awesome'
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false}
  ],
  css: [
    'normalize.css/normalize.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Kevin Coyle | Freelance Fullstack Drupal and Laravel Developer.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true
  },
  generate: {
    routes: function() {
      return axios.get("https://backend.webdev.pro/jsonapi/node/blog")
        .then((res) => {
          return res.data.data.map((blog) => {
            return '/blog/' + blog.id
          })
        })
    }
  }
}
