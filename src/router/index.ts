import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../pages/Shop/ShopPage.vue'),
    },
  ],
})

export default router
