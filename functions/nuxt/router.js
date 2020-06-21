import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d23a1cb6 = () => interopDefault(import('..\\..\\src\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _59c281a4 = () => interopDefault(import('..\\..\\src\\pages\\secret.vue' /* webpackChunkName: "pages_secret" */))
const _658962e4 = () => interopDefault(import('..\\..\\src\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _d23a1cb6,
    name: "login"
  }, {
    path: "/secret",
    component: _59c281a4,
    name: "secret"
  }, {
    path: "/",
    component: _658962e4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
