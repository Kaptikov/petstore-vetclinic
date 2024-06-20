<template>
  <div class="favourite">
    <div class="favourite__container _container">
      <template v-if="favouriteStore.favouriteItems.length > 0">
        <div class="favourite__title">Избранное</div>
        <div class="favourite__items">
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
  // padding-top: 60px;

  &__title {
    font-weight: 700;
    font-size: clamp(2.625rem, 2.179rem + 2.23vw, 3.25rem);
    line-height: 110%;
    margin-bottom: 59px;
  }

  &__items {
    display: grid;
    grid-template-columns: 1fr;

    gap: 20px;
  }
}

@media (max-width: 768px) {
  .favourite {

    // padding-top: 30px;
    &__items {
      grid-template-columns: repeat(auto-fill, minmax(250px, 283px));
      justify-content: center;
      gap: 20px;
    }

  }
}
</style>