<template>
  <Header />
  <main class="page cart__page">
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

<style lang="scss">
.cart {
  &__page {
    padding-top: clamp(7.5rem, 4.688rem + 14.06vw, 11.438rem);
    padding-bottom: clamp(4.375rem, 1.138rem + 14.39vw, 12.125rem);
    background: $white-bg;
  }

  &__title {
    font-weight: 700;
    font-size: clamp(2.25rem, 1.886rem + 1.82vw, 3.25rem);
    line-height: 110%;
    // text-align: center;
  }
}
</style>