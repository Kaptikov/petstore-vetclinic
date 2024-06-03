<template>
  <Header />
  <main class="page favourite__page">
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

<style lang="scss">
.favourite {

  &__page {
    padding-top: clamp(73px, 1.691rem + 12.76vw, 183px);
    padding-bottom: clamp(4.375rem, 1.138rem + 14.39vw, 12.125rem);
    background: $white-bg;
  }
}
</style>
