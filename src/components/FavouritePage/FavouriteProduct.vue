<template>
  <div class="favourite__product favourite-product">
    <div class="favourite-product__img">
      <img :src="favouriteItem.products.imgUrl" alt="">
      <div class="favourite-product__discount" v-if="favouriteItem.products.discount">
        -{{ favouriteItem.products.discount }}%
      </div>
    </div>
    <div class="favourite-product__wrapper">
      <div class="favourite-product__top">
        <div class="favourite-product__info">
          <div class="favourite-product__title">{{ favouriteItem.products.name }}</div>
          <div class="favourite-product__subtitle">{{ favouriteItem.products.description }}</div>
          <div class="favourite-product__weights">
            <button class="favourite-product__weight">
              400г
            </button>
          </div>
        </div>
        <div class="favourite-product__quantity">
          <button class="favourite-product__quantity-button favourite-product__quantity-button--minus"
            @click="decrementQuantity"></button>
          <input class="favourite-product__quantity-value" type="text" v-model="quantity" />
          <button class="favourite-product__quantity-button favourite-product__quantity-button--plus"
            @click="incrementQuantity"></button>
        </div>
        <div class="favourite-product__prices">
          <div class="favourite-product__price">{{ favouriteItem.products.price }} ₽</div>
          <div class="favourite-product__old-price"><s>{{ favouriteItem.products.oldPrice }}</s></div>
        </div>
      </div>
      <div class="favourite-product__bottom">
        <!-- <ButtonDeleteCartItem :favouriteItem="favouriteItem" /> -->
        <!-- <div class="favourite-product__availability">
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.16797 13.1666L7.5013 13.1666L7.5013 11.4999L9.16797 11.4999L9.16797 13.1666ZM9.16797 9.83325L7.5013 9.83325L7.5013 4.83325L9.16797 4.83325L9.16797 9.83325ZM8.33463 17.3333C12.9346 17.3333 16.668 13.5999 16.668 8.99992C16.668 4.39992 12.9346 0.666585 8.33464 0.666585C3.73463 0.666585 0.00130004 4.39992 0.00129963 8.99992C0.00129923 13.5999 3.73463 17.3333 8.33463 17.3333ZM8.33464 2.33325C12.0096 2.33325 15.0013 5.32492 15.0013 8.99992C15.0013 12.6749 12.0096 15.6666 8.33463 15.6666C4.65963 15.6666 1.66797 12.6749 1.66797 8.99992C1.66797 5.32492 4.65963 2.33325 8.33464 2.33325Z"
              fill="currentColor" />
          </svg>
          <span>В наличии</span>
        </div> -->

        <button class="favourite-product__button" @click="btnAddToCart(favouriteItem.products.id, quantity, id)"
          v-if="!isCart">В
          корзину <img src="@/assets/img/shopping-cart.svg" alt=""></button>
        <button class="favourite-product__button" @click="btnDeleteFromCart(favouriteItem.products.id, id)" v-else>
          В
          корзине <img src="@/assets/img/shopping-cart.svg" alt="">
        </button>
      </div>
    </div>
    <button class="favourite-product__favourite" @click="btnDeleteFromFavourite(favouriteItem.id, id)">
      <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z"
          stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>

<script>
import ButtonDeleteCartItem from '@/components/CartPage/ButtonDeleteCartItem.vue';

import { onMounted, computed, ref } from 'vue';
import { useFavouriteStore } from '@/store/FavouriteStore.js';
import { useCartStore } from '@/store/CartStore.js';

export default {
  components: {
    ButtonDeleteCartItem
  },

  props: {
    id: {},
    favouriteItem: {
      type: Object,
    }
  },

  setup(props) {
    const favouriteStore = useFavouriteStore();
    const cartStore = useCartStore();
    const quantity = ref(1);

    function btnDeleteFromFavourite(id, userId) {
      // const favouriteItem = favouriteStore.favouriteItems.find(favouriteItem => favouriteItem.productId === id);
      // console.log(id);
      favouriteStore.deleteFavouriteItem(id, userId)
    }

    function btnAddToCart(productId, quantity, userId) {
      cartStore.addCartItem(productId, quantity, userId)
    }

    function btnDeleteFromCart(id, userId) {
      const cartItem = cartStore.cartItems.find(cartItem => cartItem.productId === id);
      console.log(id);
      cartStore.deleteCartItem(cartItem.id, userId)
    }

    function incrementQuantity(id) {
      quantity.value++
      if (isCart) {
        console.log(123);
        const cartItem = cartStore.cartItems.find(cartItem => cartItem.productId === id);
        cartStore.updateCartItem(cartItem.id, quantity)
      }
    }

    function decrementQuantity(id, quantity) {
      if (quantity > 1) {
        quantity--
        if (condition) {

        }
        //cartStore.updateCartItem(id, quantity)
      }
    }

    const isCart = computed(() => {
      return (
        cartStore.cartItems.find(
          cartItem => cartItem.productId === props.favouriteItem.products.id
        ) !== undefined
      )
    })

    return {
      cartStore,
      btnDeleteFromFavourite,
      btnAddToCart,
      btnDeleteFromCart,
      incrementQuantity,
      decrementQuantity,
      isCart,
      quantity,
    }
  }
}
</script>

<style lang="scss">
.favourite {

  // .favourite__product
  &__product {
    position: relative;
    display: flex;
    flex-direction: row;
    background: $white;
    border-radius: 22px;
    padding: 20px;
  }
}

.favourite-product {

  // .favourite-product__img
  &__img {
    position: relative;
    max-width: 154px;
    width: 100%;
    height: 100%;
    margin-right: 20px;


    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // .favourite-product__discount
  &__discount {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0px 10px;
    width: 49px;
    height: 24px;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 217%;
    color: $white;
    background: $yellow-bg;
    border-radius: 65px;
  }

  // .favourite-product__wrapper
  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  // .favourite-product__top
  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  // .favourite-product__info
  &__info {
    display: flex;
    flex-direction: column;
  }

  // .favourite-product__title
  &__title {
    font-weight: 700;
    font-size: 21px;
    line-height: 110%;
    margin-bottom: 8px;
  }

  // .favourite-product__subtitle
  &__subtitle {
    font-size: 18px;
    line-height: 110%;
    color: $silver-text;
    margin-bottom: 12px;
  }

  // .favourite-product__weights
  &__weights {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 276px;
    width: 100%;
  }

  // .favourite-product__weight
  &__weight {
    font-size: 14px;
    line-height: 100%;

    color: $white;
    background: $gray-bg;
    border-radius: 6px;
    padding: 5px 6px 4px 6px;
  }

  // .favourite-product__weight--active
  &__weight--active {
    background: $blue-main;
  }

  // .favourite-product__quantity
  &__quantity {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 90px;
    width: 100%;
    font-size: 18px;
    line-height: 110%;
  }

  // .favourite-product__quantity-button
  &__quantity-button {
    position: relative;
    border: 1px solid #EDF1FB;
    border-radius: 50%;
    // width: 20px;
    // height: 20px;
    transition: border 0.1s ease-in-out;
    padding: 10px;

    &:hover {
      border: 1px solid $blue-main;
    }

  }

  // .favourite-product__quantity-button--minus  
  &__quantity-button--minus {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 1px;
      background: $gray-text;
      transition: background 0.1s ease-in-out;
    }

    &:hover::before {
      background: $blue-main;
    }
  }

  // .favourite-product__quantity-button--plus
  &__quantity-button--plus {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 1px;
      background: $gray-text;
      transition: background 0.1s ease-in-out;
    }

    &:hover::before {
      background: $blue-main;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
      width: 8px;
      height: 1px;
      background: $gray-text;
      transition: border 0.1s ease-in-out;
    }

    &:hover::after {
      background: $blue-main;
    }

  }

  // .favourite-product__quantity-input
  &__quantity-input {
    // max-width: max-content;
    width: 100%;
    text-align: center;
    margin: 0 5px;
  }

  // .favourite-product__btn
  &__btn {}


  // .favourite-product__prices
  &__prices {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  // .favourite-product__price
  &__price {
    font-weight: 700;
    font-size: 18px;
    line-height: 110%;
    color: $blue-main;
  }

  // .favourite-product__old-price
  &__old-price {
    font-weight: 600;
    font-size: 14px;
    line-height: 110%;
    text-decoration: line-through;
    color: $gray-text;
  }

  // .favourite-product__bottom
  &__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }

  // .favourite-product__btn--delete
  &__btn--delete {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11px;
    color: $red;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: $red-second;
    }
  }

  // .favourite-product__availability
  &__availability {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  // .favourite-product__favourite
  &__favourite {
    position: absolute;
    top: 10px;
    right: 10px;
    color: $blue-main;
    transition: 0.2s ease-in-out;

    & path {
      transition: 0.2s ease-in-out;
    }

    &:hover {
      color: $blue-main;

      & path {
        fill: transparent;
      }
    }

  }
}
</style>