import Main from '@/pages/Main.vue'
import CatalogPage from '@/pages/CatalogPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import FavouritePage from '@/pages/FavouritePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/catalog/',
    name: 'catalog',
    component: CatalogPage,
  },
  {
    path: '/product/:id',
    name: 'productPage',
    component: ProductPage,
  },
  {
    path: '/favourite/',
    name: 'favouritePage',
    component: FavouritePage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.BASE_URL),
})

export default router
