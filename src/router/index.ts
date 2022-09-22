import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import { RouteRecordRaw } from 'vue-router';
import IndexPage from '../pages/IndexPage.vue';
import GamePage from '../pages/GamePage.vue';
import ConfigPage from '../pages/ConfigPage.vue';

const routes = [
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/game',
    component: GamePage
  },
  {
    path: '/config',
    component: ConfigPage
  }
] as RouteRecordRaw[];

// 路由
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

export { routes };
export default router;
