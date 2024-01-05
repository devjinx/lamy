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
  { path: '/', name: 'home', component: HomeView },
  { path: '/register', name: 'register', component: Register },
  { path: '/login', name: 'login', component: Login },
  { path: '/topup', name: 'topup', component: Topup },
  { path: '/store', name: 'store', component: Store },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/dashboard/settings', name: 'DashboardSettings', component: DashboardSettings },
  { path: '/dashboard/historytopup', name: 'DashboardHistoryTopup', component: DashboardHistoryTopup },
  { path: '/dashboard/historybuy', name: 'DashboardHistoryBuy', component: DashboardHistoryBuy },
  { path: '/dashboard/credituser', name: 'DashboardCreditUser', component: DashboardCreditUser },
  { path: '/dashboard/productcategories', name: 'DashboardProductCategories', component: DashboardProductCategories },
  { path: '/dashboard/ruleuser', name: 'DashboardRuleUser', component: DashboardRuleUser },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFound }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
export default router;