// nuxt.config.js
module.exports = {
  mode: 'universal',

  head: {
    title: 'vue-nuxt-lambda-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vue-nuxt-lambda-template' }
    ]
  },

  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      });
    },
    publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/` // <= add the path to the cached files
  },

  srcDir: 'client/',

  performance: {
    gzip: false
  },

  router: {
    base: `/`
  },

  dev: false
}
