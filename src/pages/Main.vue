<template>
  <Header />
  <div class="page main__page">
    <MainBlock />
    <ProductCategories />
    <PopupMenu />
  </div>
  <Footer />
</template>
<script>
import Header from '@/components/Header.vue'
import MainBlock from '@/components/MainBlock.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import PopupMenu from '@/components/PopupMenu.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    MainBlock,
    ProductCategories,
    PopupMenu,
    Footer,
  },
}
</script>
<style lang="scss"></style>
