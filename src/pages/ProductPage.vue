<template>
  <Header />
  <main class="page product__page">
    <div class="product-card">
      <div class="product-card__container _container">
        <template v-if="productStore.products">
          <ProductCardTop :product="productStore.product" />
          <ProductCardBottom :product="productStore.product" />
          <ProductReviews :product="productStore.product" :id="userStore.user.id" :isAdmin="userStore.isAdmin" />
        </template>
        <template v-else>
          <h4>Продукт не найден</h4>
        </template>
      </div>
    </div>

  </main>
  <Footer />
</template>

<script>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import ProductCardTop from '@/components/ProductPage/ProductCardTop.vue'
import ProductCardBottom from '@/components/ProductPage/ProductCardBottom.vue'
import ProductReviews from '@/components/ProductPage/ProductReviews.vue'


import { useProductStore } from '@/store/ProductStore'
import { useUserStore } from '@/store/UserStore'

export default {
  components: {
    Header,
    Footer,
    ProductCardTop,
    ProductCardBottom,
    ProductReviews,
  },
  props: {

  },
  setup() {
    const userStore = useUserStore()
    const productStore = useProductStore()
    const route = useRoute()

    onMounted(() => {
      const currentProductId = route.params.id
      productStore.getProduct(currentProductId)
    },
    )
    watch(() => route.params.id, (newId) => {
      productStore.getProduct(newId)
    });
    return {
      userStore,
      productStore,
    }
  },

}
</script>

<style lang="scss">
.product__page {
  display: flex;
  flex-direction: column;
  padding-top: clamp(73px, 2.031rem + 11.25vw, 170px);
  padding-bottom: clamp(70px, 3.347rem + 4.62vw, 110px);
  background: $white-bg;
}
</style>