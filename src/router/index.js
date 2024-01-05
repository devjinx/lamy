import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Store from '../views/Store.vue';
import Topup from '../views/Topup.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Dashboard from '../views/Dashboard.vue';
import DashboardSettings from '../views/Dashboard/Settings.vue';
import DashboardHistoryTopup from '../views/Dashboard/HistoryTopUp.vue';
import DashboardHistoryBuy from '../views/Dashboard/HistoryBuy.vue';
import DashboardCreditUser from '../views/Dashboard/CreditUser.vue';
import DashboardProductCategories from '../views/Dashboard/ProductCategories.vue';
import DashboardRuleUser from '../views/Dashboard/RuleUser.vue';
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
    path: '/dashboard/settings',
    name: 'DashboardSettings',
    component: DashboardSettings,
  },
  {
    path: '/dashboard/historytopup',
    name: 'DashboardHistoryTopup',
    component: DashboardHistoryTopup,
  },
  {
    path: '/dashboard/HistoryBuy',
    name: 'DashboardHistoryBuy',
    component: DashboardHistoryBuy,
  },
  {
    path: '/dashboard/CreditUser',
    name: 'DashboardCreditUser',
    component: DashboardCreditUser,
  },
  {
    path: '/dashboard/ProductCategories',
    name: 'DashboardProductCategories',
    component: DashboardProductCategories,
  },
  {
    path: '/dashboard/RuleUser',
    name: 'DashboardRuleUser',
    component: DashboardRuleUser,
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
