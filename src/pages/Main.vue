<template>
  <Header />
  <div class="page main__page">
    <MainBlock />
    <ProductCategories />
  </div>
  <Footer />
</template>
<script>
import Header from '@/components/Header.vue'
import MainBlock from '@/components/MainBlock.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    MainBlock,
    ProductCategories,
    Footer,
  },
}
</script>
<style lang="scss"></style>
