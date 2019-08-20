import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Token from './views/Token.vue'
import Home from './views/Home.vue'
import Chronologify from './views/Chronologify.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/token',
      name: 'token',
      component: Token
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/chronologify',
      name: 'chronologify',
      component: Chronologify
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
