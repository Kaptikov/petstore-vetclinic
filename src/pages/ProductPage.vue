<template>
  <Header />
  <main class="page product__page">
    <div class="product-card">
      <div class="product-card__container _container">
        <ProductCardTop />
        <ProductCardBottom />
      </div>
    </div>

  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import ProductCardTop from '@/components/ProductPage/ProductCardTop.vue'
import ProductCardBottom from '@/components/ProductPage/ProductCardBottom.vue'
export default {
  components: {
    Header,
    Footer,
    ProductCardTop,
    ProductCardBottom,
  }
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