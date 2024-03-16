<template>
  <Header isMainPage />
  <main class="page main__page">
    <MainBlock />
    <ProductCategories />
    <PopularProducts />
    <OurBrands />
    <Advantages />
    <Promotions />
    <Locations />
    <News />
    <Appointment />
    <PopupMenu />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import MainBlock from '@/components/MainPage/MainBlock.vue'
import ProductCategories from '@/components/MainPage/ProductCategories.vue'
import PopularProducts from '@/components/MainPage/PopularProducts.vue'
import OurBrands from '@/components/MainPage/OurBrands.vue'
import Advantages from '@/components/MainPage/Advantages.vue'
import Promotions from '@/components/MainPage/Promotions.vue'
import Locations from '@/components/MainPage/Locations.vue'
import News from '@/components/MainPage/News.vue'
import Appointment from '@/components/MainPage/Appointment.vue'
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
    Appointment,
    PopupMenu,
    Footer,
  },

}
</script>

<style lang="scss"></style>
