import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import WelcomePage from 'src/views/WelcomePage.vue';
import Page1 from 'src/views/Page1.vue';
import Page2 from 'src/views/Page2.vue';
import NotFound from 'src/views/NotFound.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: WelcomePage },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
