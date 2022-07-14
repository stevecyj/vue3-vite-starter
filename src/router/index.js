import { createRouter, createWebHistory } from 'vue-router';
// eslint-disable-next-line
import { setupLayouts } from 'virtual:generated-layouts';
// eslint-disable-next-line
import generatedRoutes from 'virtual:generated-pages';

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
