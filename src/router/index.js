import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Store from '../views/Store.vue';
import Topup from '../views/Topup.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/topup',
    name: 'topup',
    component: Topup,
  },
  {
    path: '/store',
    name: 'store',
    component: Store,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
