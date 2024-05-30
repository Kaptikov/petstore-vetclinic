<template>
  <Header />
  <main class="page catalog__page">
    <template v-if="userStore.user && userStore.user.id">
      <Cart :id="userStore.user.id" />
    </template>

    <template v-else>
      <div class="cart__container _container">
        <div class="cart__title">
          Войдите в профиль, чтобы просмотреть корзину
        </div>
      </div>
    </template>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import Cart from '@/components/CartPage/Cart.vue'

import { onMounted } from 'vue'
import { useCartStore } from '@/store/CartStore.js'
import { useUserStore } from '@/store/UserStore.js'

export default {
  components: {
    Header,
    Cart,
    Footer,
  },

  setup() {
    const cartStore = useCartStore()
    const userStore = useUserStore()

    onMounted(() => {
      userStore.getUser()

      // cartStore.getCartItems()
    })

    return {
      cartStore,
      userStore,
    }
  }
}
</script>

<style lang="scss"></style>