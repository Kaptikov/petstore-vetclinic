import Main from '../pages/Main.vue'
import CatalogPage from '../pages/CatalogPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import FavouritePage from '../pages/FavouritePage.vue'
import CartPage from '../pages/CartPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'

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
    path: '/favorite/',
    name: 'favouritePage',
    component: FavouritePage,
  },
  {
    path: '/cart/',
    name: 'cartPage',
    component: CartPage,
  },
  {
    path: '/profile/',
    name: 'profilePage',
    component: ProfilePage,
  },
  {
    path: '/login/',
    name: 'loginPage',
    component: LoginPage,
  },
  {
    path: '/signup/',
    name: 'signUpPage',
    component: SignUpPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.BASE_URL),
})

export default router
