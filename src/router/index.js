import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Store from '../views/Store.vue';
import Topup from '../views/Topup.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Navbar from '../components/Navbar.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        navbar: Navbar, 
      },
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: Register,
        navbar: Navbar, 
      },
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login,
        navbar: Navbar, 
      },
    },
    {
      path: '/topup',
      name: 'topup',
      components: {
        default: Topup,
        navbar: Navbar, 
      },
    },
    {
      path: '/store',
      name: 'store',
      components: {
        default: Store,
        navbar: Navbar, 
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound,
    },
  ],
});

export default router;
