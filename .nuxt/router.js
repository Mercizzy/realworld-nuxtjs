import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6627c70e = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _b6702162 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "pages/settings/index" */))
const _0fb3cda8 = () => interopDefault(import('..\\pages\\article\\components\\article-comment.vue' /* webpackChunkName: "pages/article/components/article-comment" */))
const _25e5a288 = () => interopDefault(import('..\\pages\\article\\components\\article-meta.vue' /* webpackChunkName: "pages/article/components/article-meta" */))
const _8e0664f8 = () => interopDefault(import('..\\pages\\article\\_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _5957907d = () => interopDefault(import('..\\pages\\editor\\_slug.vue' /* webpackChunkName: "pages/editor/_slug" */))
const _edfd06c8 = () => interopDefault(import('..\\pages\\profile\\_username.vue' /* webpackChunkName: "pages/profile/_username" */))
const _014d8cd2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _6627c70e,
    name: "login"
  }, {
    path: "/settings",
    component: _b6702162,
    name: "settings"
  }, {
    path: "/article/components/article-comment",
    component: _0fb3cda8,
    name: "article-components-article-comment"
  }, {
    path: "/article/components/article-meta",
    component: _25e5a288,
    name: "article-components-article-meta"
  }, {
    path: "/article/:slug?",
    component: _8e0664f8,
    name: "article-slug"
  }, {
    path: "/editor/:slug?",
    component: _5957907d,
    name: "editor-slug"
  }, {
    path: "/profile/:username?",
    component: _edfd06c8,
    name: "profile-username"
  }, {
    path: "/",
    component: _014d8cd2,
    name: "index"
  }, {
    path: "/register",
    component: _6627c70e,
    name: "register"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
