<template>
  <div class="favourite">
    <div class="favourite__container _container">
      <template v-if="favouriteStore.favouriteItems.length > 0">
        <div class="favourite__title">Избранное</div>
        <div class="favourite__wrapper">
          <FavouriteProduct v-for="favouriteItem in favouriteStore.favouriteItems" :key="favouriteItem.id"
            :favouriteItem="favouriteItem" :id="id" />
        </div>
      </template>
      <template v-else>
        <div class="cart__title">Избранное пусто</div>
      </template>
    </div>
  </div>

</template>

<script>
import { onMounted } from 'vue'
import FavouriteProduct from '@/components/FavouritePage/FavouriteProduct.vue'

import { useFavouriteStore } from '@/store/FavouriteStore'
import { useCartStore } from '@/store/CartStore'

// import { useProductStore } from '@/store/ProductStore'
export default {
  components: {
    FavouriteProduct,
  },

  props: {
    id: {}
  },

  setup(props) {
    const favouriteStore = useFavouriteStore()
    const cartStore = useCartStore()

    onMounted(() => {
      favouriteStore.getFavouriteItems(props.id)
      cartStore.getCartItems(props.id)
    })

    return {
      favouriteStore,
      cartStore
    }
  }
}
</script>

<style lang="scss">
.favourite {
  padding-top: 60px;

  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 30px;
  }
}
</style>