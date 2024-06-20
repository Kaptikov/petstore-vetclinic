<template>
  <div class="bottom-menu">
    <div class="bottom-menu__wrapper">
      <div class="bottom-menu__item">
        <a href="#" class="bottom-menu__link bottom-menu__link-search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.0004 20.9999L16.6504 16.6499" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <div class="bottom-menu__label">Поиск</div>
        </a>
      </div>
      <div class="bottom-menu__item">
        <router-link :to="'/profile/'" class="bottom-menu__link bottom-menu__link-profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="bottom-menu__label" v-if="!id">Войти</div>
          <div class="bottom-menu__label" v-else>Профиль</div>
        </router-link>
      </div>
      <div class="bottom-menu__item">
        <router-link :to="'/favorite/'" class="bottom-menu__link bottom-menu__link-favorites">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6726 2.99829 16.9501 2.99829C16.2276 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2226 22.4519 8.50012C22.4519 7.77763 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012V4.61012Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="bottom-menu__label">Избранное</div>
          <div class="bottom-menu__count" v-if="favouriteStore.favouriteItems.length > 0">
            {{ favouriteStore.favouriteItems.length }}
          </div>
        </router-link>
      </div>
      <div class="bottom-menu__item">
        <router-link :to="'/cart/'" class="bottom-menu__link bottom-menu__link-cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="bottom-menu__label">Корзина</div>
          <div class="bottom-menu__count" v-if="cartStore.cartItems.length > 0">
            {{ cartStore.cartItems.length }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, watch } from 'vue';

import { useCartStore } from '@/store/CartStore';
import { useFavouriteStore } from '@/store/FavouriteStore';

export default {
  props: {
    id: {

    }
  },

  setup(props) {
    const cartStore = useCartStore();
    const favouriteStore = useFavouriteStore();

    onMounted(() => {
      // favouriteStore.getFavouriteItems(props.id);
      // cartStore.getCartItems(props.id);
    });

    watch(() => props.id, (newId) => {
      cartStore.getCartItems(newId);
      favouriteStore.getFavouriteItems(newId);
    });

    return {
      cartStore,
      favouriteStore,
    };
  },
}
</script>
<style lang="scss">
.bottom-menu {
  display: none;
  position: fixed;
  bottom: 0;
  background: $white;
  border-radius: 10px 10px 0 0;
  width: 100%;
  overflow: hidden;
  z-index: 10;

  // .bottom-menu__wrapper
  &__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    gap: 1px;
    padding: 5px 0;
  }

  // .bottom-menu__item
  &__item {
    width: 100%;
    // height: 44px;
    padding: 6px 0;


  }

  // .bottom-menu__label
  &__label {
    font-weight: 400;
    font-size: 12px;
    // text-align: center;
    padding-top: 7px;
    color: #a9a9a9;
    transition: 0.2s ease-in-out;
  }

  // .bottom-menu__link
  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    // transition: 0.1s ease-in-out;

    & svg {
      transition: 0.1s ease-in-out;
    }

    &:hover {
      & svg {
        transform: scale(0.9);
        transition: 0.1s ease-in-out;
      }

      .bottom-menu__label {
        color: $blue-main;
      }
    }
  }

  // .bottom-menu__count
  &__count {
    position: absolute;
    top: -5px;
    left: 56%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    width: 15px;
    height: 15px;
    background: $blue-main;
    border-radius: 50%;
  }

  // .bottom-menu__link-search
  &__link-search {}

  // .bottom-menu__link-profile
  &__link-profile {}

  // .bottom-menu__link-favorites
  &__link-favorites {
    position: relative;

  }

  // .bottom-menu__link-cart
  &__link-cart {
    position: relative;

  }
}

@media (max-width: 996px) {
  .bottom-menu {
    display: block;
  }
}
</style>