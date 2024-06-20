import Main from '../pages/Main.vue'
import CatalogPage from '../pages/CatalogPage.vue'
import ProductPage from '../pages/ProductPage.vue'
import FavouritePage from '../pages/FavouritePage.vue'
import CartPage from '../pages/CartPage.vue'
import VetclinicPage from '../pages/VetclinicPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import AdminPage from '../pages/AdminPage.vue'
import AdminOrdersPage from '../pages/AdminOrdersPage.vue'
import AdminRequestsPage from '../pages/AdminRequestsPage.vue'

import { useUserStore } from '@/store/UserStore.js'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/catalog/:id(\\d+)',
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
    path: '/vetclinic/',
    name: 'vetclinicPage',
    component: VetclinicPage,
  },
  {
    path: '/admin/',
    name: 'adminPage',
    component: AdminPage,
    meta: {
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/orders/',
    name: 'adminOrdersPage',
    component: AdminOrdersPage,
    meta: {
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/requests/',
    name: 'adminRequestsPage',
    component: AdminRequestsPage,
    meta: {
      requiresAdmin: true,
    },
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

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore() // Получение экземпляра хранилища пользователей

  if (to.meta.requiresAdmin) {
    // Проверка, требуется ли роль администратора для доступа к пути
    if (userStore.isAdmin) {
      // Проверка, имеет ли пользователь роль администратора
      next() // Доступ разрешен
    } else {
      next({ name: 'main' }) // Доступ запрещен, перенаправление на главную
    }
  } else {
    next() // Доступ разрешен
  }
})

export default router
