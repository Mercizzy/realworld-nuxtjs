/**
 * nuxt配置项
 */

module.exports = {
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css' },
      { rel: 'stylesheet', href: '/css/main.css' },
    ],
  },
  router: {
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      routes.push(...[
        {
          name: 'register',
          path: '/register',
          component: resolve(__dirname, 'pages/login/index.vue')
        }
      ])
    }
  },
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js',
  ],
}