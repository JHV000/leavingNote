import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}
const routes = [{
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/leave',
    name: 'leave',
    component: () => import('../views/leave.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('../views/manage.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router