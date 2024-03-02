<template>
  <Header />
  <main class="page main__page">
    <MainBlock />
    <ProductCategories />
    <PopularProducts />
    <OurBrands />
    <Advantages />
    <Promotions />
    <Locations />
    <News />
    <PopupMenu />
  </main>
  <Footer />
</template>
<script>
import Header from '@/components/Header.vue'
import MainBlock from '@/components/MainBlock.vue'
import ProductCategories from '@/components/ProductCategories.vue'
import PopularProducts from '@/components/PopularProducts.vue'
import OurBrands from '@/components/OurBrands.vue'
import Advantages from '@/components/Advantages.vue'
import Promotions from '@/components/Promotions.vue'
import Locations from '@/components/Locations.vue'
import News from '@/components/News.vue'
import PopupMenu from '@/components/PopupMenu.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    MainBlock,
    ProductCategories,
    PopularProducts,
    OurBrands,
    Advantages,
    Promotions,
    Locations,
    News,
    PopupMenu,
    Footer,
  },
}
</script>
<style lang="scss"></style>
