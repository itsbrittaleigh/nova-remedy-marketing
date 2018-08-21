module.exports = {
  head: {
    title: 'Welcome | Nova Remedy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Smart and simple digital therapeutics platform to empower patients by development of a personalized programs of healthy lifestyle, behavior, emotion and spirit' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
  },
  loading: { color: '#1d906f' },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    vendor: ['v-click-outside'],
  },
  plugins: [
    {
      src: '~/plugins/directives/click-outside',
      ssr: false,
    },
  ],
};
