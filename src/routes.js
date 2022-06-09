import { createRouter, createWebHashHistory } from 'vue-router';
import CoinDashboard from './components/coin-dashboard/CoinDashboard.vue';

const routes = [
  {
    path: '/:coinId(.*)',
    component: CoinDashboard,
  },
];

export default createRouter({ history: createWebHashHistory(), routes });
