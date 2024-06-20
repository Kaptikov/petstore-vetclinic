<template>
  <Header />
  <main class="page catalog__page">
    <Catalog />
    <Appointment />
    <Recommendations />
  </main>
  <BottomMenu :id="userStore.user.id" />
  <Footer />
</template>

<script>
// import { onMounted, onUpdated, defineComponent } from 'vue'
import { useProductStore } from '../store/ProductStore'
import { useUserStore } from "@/store/UserStore";

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Catalog from '@/components/CatalogPage/Catalog.vue'
import Appointment from '@/components/Appointment.vue'
import Recommendations from '@/components/CatalogPage/Recommendations.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import { onMounted } from 'vue'


export default {
  components: {
    Header,
    Footer,
    Catalog,
    Appointment,
    Recommendations,
    BottomMenu,
  },


  // props: {
  //   id: {
  //     type: String,
  //     default: '',
  //   },
  // },

  setup(props) {
    // const productStore = useProductStore()
    const userStore = useUserStore()
    onMounted(() => {
      // productStore.getProduct(props.id)
      userStore.getUser()
    })
    return {
      // productStore,
      userStore,
    }
  },
}
</script>

<style lang="scss">
.catalog__page {
  padding-top: clamp(73px, 1.691rem + 12.76vw, 183px);
  padding-bottom: clamp(4.375rem, 1.138rem + 14.39vw, 12.125rem);
  background: $white-bg;
}
</style>