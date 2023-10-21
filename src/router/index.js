import { createRouter, createWebHashHistory } from 'vue-router'
import SginIn from '../views/SignIn.vue'

const routes = [
 
  {
    path: '/sginIn',
    name: 'sginIn',
    component: SginIn
  },
  {
    path: '/sginOut',
    name: 'sginOut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignOut.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
