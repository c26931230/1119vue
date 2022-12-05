import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/frount_end/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import( '../views/back_end/ProductView.vue')
  },
  {
    path: '/member',
    name: 'member',
    component: () => import( '../views/back_end/MemberView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import( '../views/frount_end/NewsView.vue')
  },
  {
    path: '/back_end',
    name: 'back_end',
    component: () => import( '../views/BackEndView.vue')
  },
  {
    path: '/front_end',
    name: 'front_end',
    component: () => import( '../views/FrontEndView.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
