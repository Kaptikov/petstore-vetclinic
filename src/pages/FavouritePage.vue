<template>
  <Header />
  <main class="page catalog__page">
    <template v-if="userStore.user && userStore.user.id">
      <Favourite :id="userStore.user.id" />
    </template>
    <template v-else>
      <div class="favourite__container _container">
        <div class="favourite__title">
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
import Favourite from '@/components/FavouritePage/Favourite.vue'
import { useUserStore } from '@/store/UserStore'
import { onMounted } from 'vue'

export default {
  components: {
    Header,
    Footer,
    Favourite,
  },

  setup() {
    const userStore = useUserStore()

    onMounted(() => {
      // favouriteStore.getFavouriteItems()
      userStore.getUser()
    })

    return {
      userStore
    }
  }
}
</script>

<style lang="scss"></style>
