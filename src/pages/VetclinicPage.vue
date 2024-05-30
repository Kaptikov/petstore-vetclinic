<template>
  <Header isMainPage />
  <main class="page vetclinic__page">
    <MainBlock />
    <Advantages />
    <Services />
    <template>

    </template>
    <!-- <template>
          <h4>Продукт не найден</h4>
        </template> -->


  </main>
  <Footer />
</template>

<script>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MainBlock from '@/components/VetclinicPage/MainBlock.vue'
import Advantages from '@/components/VetclinicPage/Advantages.vue'
import Services from '@/components/VetclinicPage/Services.vue'

import { useProductStore } from '@/store/ProductStore'


export default {
  components: {
    Header,
    Footer,
    MainBlock,
    Advantages,
    Services,
  },
  props: {

  },
  setup() {


    onMounted(() => {
    },
    )
    return {

    }
  },

}
</script>

<style lang="scss">
.vetclinic__page {
  display: flex;
  flex-direction: column;
  // padding-top: clamp(73px, 2.031rem + 11.25vw, 170px);
  // padding-bottom: clamp(70px, 3.347rem + 4.62vw, 110px);
  background: $white-bg;
}
</style>