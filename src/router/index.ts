import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/Home.vue';
import AboutView from '../components/About.vue';
import TestComponent from '../components/TestComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/testComponent',
      name: 'testComponent',
      component: TestComponent,
    },
  ],
});

export default router;
