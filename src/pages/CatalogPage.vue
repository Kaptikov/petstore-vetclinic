<template>
  <Header />
  <main class="page catalog__page">
    <Catalog />
    <Appointment />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'


import Footer from '@/components/Footer.vue'

import Catalog from '@/components/CatalogPage/Catalog.vue'
import Appointment from '@/components/Appointment.vue'

export default {
  components: {
    Header,
    Footer,
    Catalog,
    Appointment,
  }
}
</script>

<style lang="scss">
.catalog__page {
  padding-top: clamp(73px, 1.691rem + 12.76vw, 183px);
  padding-bottom: clamp(4.375rem, 1.138rem + 14.39vw, 12.125rem);
  background: $white-bg;
}
</style>