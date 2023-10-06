import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Store from '../views/Store.vue'
import Topup from '../views/Topup.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/topup',
      name: 'topup',
      component: Topup
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    }

  ]
})

export default router
