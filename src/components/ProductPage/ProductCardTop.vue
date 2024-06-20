<template>
  <section class="product-card__top">
    <div class="product-card__left">
      <swiper :direction="'vertical'" :spaceBetween="10" :navigation="false" :effect="'fade'"
        :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="product-card__swiper-first">
        <swiper-slide class="product-card__swiper-slide product-card__swiper-slide-first" v-for="productImg in getProductImgForProduct(
          product.id
        )" :key="productImg.id">
          <img :src="productImg.imgUrl" alt="Изображение товара" class="card-catalog__img" />
        </swiper-slide>
      </swiper>

      <swiper @swiper="setThumbsSwiper" :direction="'horizontal'" :spaceBetween="12" :slidesPerView="6"
        :watchSlidesProgress="true" :modules="modules" :navigation="true" class="
        product-card__swiper-second">
        <swiper-slide class="product-card__swiper-slide product-card__swiper-slide-second" v-for="productImg in getProductImgForProduct(
          product.id
        )" :key="productImg.id">
          <img :src="productImg.imgUrl" alt="Изображение товара" class="card-catalog__img" />
        </swiper-slide>
      </swiper>
      <button class="product-card__favourite" @click="btnAddToFavourite(product.id, userId)" v-if="!isFavourite">
        <svg width="24" height="24" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.844 2.60987C20.3333 2.09888 19.7268 1.69352 19.0594 1.41696C18.3919 1.14039 17.6765 0.998047 16.954 0.998047C16.2315 0.998047 15.5161 1.14039 14.8487 1.41696C14.1812 1.69352 13.5748 2.09888 13.064 2.60987L12.004 3.66987L10.944 2.60987C9.91233 1.57818 8.51306 0.998582 7.05403 0.998582C5.59499 0.998582 4.19572 1.57818 3.16403 2.60987C2.13233 3.64156 1.55273 5.04084 1.55273 6.49987C1.55273 7.95891 2.13233 9.35818 3.16403 10.3899L4.22402 11.4499L12.004 19.2299L19.784 11.4499L20.844 10.3899C21.355 9.87912 21.7604 9.27269 22.0369 8.60523C22.3135 7.93777 22.4559 7.22236 22.4559 6.49987C22.4559 5.77738 22.3135 5.06198 22.0369 4.39452C21.7604 3.72706 21.355 3.12063 20.844 2.60987V2.60987Z"
            stroke="#606C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button class="product-card__favourite product-card__favourite--active"
        @click="btnDeleteFromFavourite(product.id, userId)" v-if="isFavourite">
        <svg width="24" height="24" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.844 2.60987C20.3333 2.09888 19.7268 1.69352 19.0594 1.41696C18.3919 1.14039 17.6765 0.998047 16.954 0.998047C16.2315 0.998047 15.5161 1.14039 14.8487 1.41696C14.1812 1.69352 13.5748 2.09888 13.064 2.60987L12.004 3.66987L10.944 2.60987C9.91233 1.57818 8.51306 0.998582 7.05403 0.998582C5.59499 0.998582 4.19572 1.57818 3.16403 2.60987C2.13233 3.64156 1.55273 5.04084 1.55273 6.49987C1.55273 7.95891 2.13233 9.35818 3.16403 10.3899L4.22402 11.4499L12.004 19.2299L19.784 11.4499L20.844 10.3899C21.355 9.87912 21.7604 9.27269 22.0369 8.60523C22.3135 7.93777 22.4559 7.22236 22.4559 6.49987C22.4559 5.77738 22.3135 5.06198 22.0369 4.39452C21.7604 3.72706 21.355 3.12063 20.844 2.60987V2.60987Z"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <div class="product-card__right">
      <div class="product-card__tag">{{ product.name }}</div>
      <div class="product-card__title">{{ product.description }}</div>
      <div class="product-card__prices">
        <div class="product-card__actual-price">{{ product.price }} ₽.</div>
        <div class="product-card__old-price">{{ product.oldPrice }}</div>
        <div class="product-card__discount"> {{ product.discount }}% </div>
      </div>
      <div class="product-card__weights">
        <button v-for="  weight in weights  " :key="weight"
          :class="{ 'product-card__weight--active': selectedWeight === weight }" @click="selectWeight(weight)"
          class="product-card__weight">
          {{ weight }}
        </button>
      </div>
      <div class="product-card__characteristics characteristics">
        <div class="characteristics__title">Характеристики</div>
        <div class="characteristics__item" v-for="characteristic in product.productCharacteristic"
          :key="characteristic">
          <dt class="characteristics__term"> {{ characteristic.name }}</dt>
          <dd class="characteristics__val"> {{ characteristic.productCharacteristicsValue.name }}</dd>
        </div>
      </div>
      <div class="product-card__btns">
        <template v-if="!isCart">
          <div class="product-card__quantity">
            <button class="product-card__quantity-button product-card__quantity-button--minus"
              @click="decrementQuantity"></button>
            <input class="product-card__quantity-input" type="text" value="1" v-model="quantity" />
            <button class="product-card__quantity-button product-card__quantity-button--plus"
              @click="incrementQuantity"></button>
          </div>
        </template>
        <button class="product-card__btn" @click="btnAddToCart(product.id, quantity, userId)" v-if="!isCart">
          В корзину
          <img src="@/assets/img/shopping-cart.svg" alt="">
        </button>
        <button class="product-card__btn product-card__btn--delete" @click="btnDeleteFromCart(product.id, userId)"
          v-else>
          В корзине <img src="@/assets/img/shopping-cart.svg" alt="">
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { useProductImgStore } from '@/store/ProductImgStore'
import { useCartStore } from '@/store/CartStore.js'
import { useUserStore } from '@/store/UserStore.js'
import { useFavouriteStore } from '@/store/FavouriteStore.js'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade';
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules'
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    userId: {

    },
    product: {
      type: Object,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      selectedWeight: '400г',
      weights: ['400г', '800г', '1200г', '3500г'],
    };
  },

  setup(props) {
    const productImgStore = useProductImgStore()
    const thumbsSwiper = ref()
    const setThumbsSwiper = swiper => {
      thumbsSwiper.value = swiper
    }
    const cartStore = useCartStore();
    const favouriteStore = useFavouriteStore();
    const userStore = useUserStore();
    const quantity = ref(1);

    const getProductImgForProduct = productId => {
      return productImgStore.productImgs.filter(
        propoductImg => propoductImg.productId === productId
      )
    }

    function btnAddToCart(productId, quantity, userId) {
      if (userId) {
        cartStore.addCartItem(productId, quantity, userId)
      }
      else {
        console.log("Авторизуйтесь");
      }
    }

    function btnAddToFavourite(productId, userId) {
      if (userId) {
        favouriteStore.addFavouriteItem(productId, userId)
      }
      else {
        console.log("Авторизуйтесь");
      }
    }

    function btnDeleteFromCart(id, userId) {
      const cartItem = cartStore.cartItems.find(cartItem => cartItem.productId === id);
      console.log(id);
      cartStore.deleteCartItem(cartItem.id, userId)
    }

    function btnDeleteFromFavourite(id, userId) {
      const favouriteItem = favouriteStore.favouriteItems.find(favouriteItem => favouriteItem.productId === id);
      console.log(id);
      favouriteStore.deleteFavouriteItem(favouriteItem.id, userId)
    }

    function incrementQuantity(id) {
      quantity.value++
      // if (isCart) {
      // 	console.log(123);
      // 	const cartItem = cartStore.cartItems.find(cartItem => cartItem.productId === id);
      // 	cartStore.updateCartItem(cartItem.id, quantity)
      // }
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
          cartItem => cartItem.productId === props.product.id
        ) !== undefined
      )
    })

    const isFavourite = computed(() => {
      return (
        favouriteStore.favouriteItems.find(
          favouriteItem => favouriteItem.productId === props.product.id
        ) !== undefined
      )
    })


    onMounted(() => {
      productImgStore.getProductImg(props.id)
    })
    return {
      getProductImgForProduct,
      productImgStore,
      thumbsSwiper,
      setThumbsSwiper,
      btnAddToCart,
      btnAddToFavourite,
      btnDeleteFromCart,
      btnDeleteFromFavourite,
      incrementQuantity,
      decrementQuantity,
      isCart,
      isFavourite,
      quantity,
      userStore,
      modules: [EffectFade, FreeMode, Navigation, Thumbs],
    }
  },

  methods: {
    selectWeight(weight) {
      this.selectedWeight = weight;
    },
  },
}
</script>
<style lang="scss" scoped>
.swiper-button-prev,
.swiper-button-next {
  border: 1px solid $gray-border;
  border-radius: 50%;
  width: 28px !important;
  height: 28px !important;
  // padding: ;
  // color: $blue-main;
  // background-color: $white-bg;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;

  &::after {
    font-size: 0;
    content: url('/src/assets/img/arrow-swiper.svg') !important;
  }

  &:hover {
    background: $blue-main;
    border: 1px solid $blue-main;

    &::after {
      font-size: 0;
      content: url('/src/assets/img/arrow-swiper2.svg') !important;
    }
  }
}

.swiper-button-prev,
.swiper-button-next {
  top: 50% !important;
  transform: translateY(30%) !important;
  right: 0;
  z-index: 5;
}

.swiper-button-prev {
  right: 0 !important;
  left: 0 !important;

  &::after {
    transform: translate(-50%, -50%);
  }
}

.swiper-button-next {
  &::after {
    transform: rotate(180deg) translate(50%, 50%);
  }
}

.product-card {

  // .product-card__top
  &__top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  // .product-card__left
  &__left {
    position: relative;
    display: flex;
    flex-direction: column;

    gap: 21px;
  }

  // .product-card__swiper-first
  &__swiper-first {
    max-width: 586px;
    width: 100%;
    max-height: 586px;
    height: 100%;
    // height: 100%;

  }

  // .product-card__swiper-slide
  &__swiper-slide {
    width: 100%;
  }

  // .product-card__swiper-slide-first
  &__swiper-slide-first {
    max-width: 586px;
    width: 100%;
    background: $white;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // .product-card__swiper-second
  &__swiper-second {
    max-width: 586px;
    width: 100%;
    max-height: 81px;
    margin-left: 0;
    margin-right: 0;
    padding-right: 40px;
    overflow: hidden;
  }

  // .product-card__swiper-slide-second
  &__swiper-slide-second {
    min-width: 81px;
    width: 100%;
    background: $white;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // .product-card__favourite
  &__favourite {
    position: absolute;
    top: 10px;
    right: 10px;
    // max-width: max-content;
    z-index: 1;

    width: 24px;
    height: 24px;

    & path {
      transition: stroke 0.1s ease-in-out;
    }


    &:hover path {
      // fill: $blue-main;
      stroke: $blue-main;
    }
  }

  // .product-card__favourite--active
  &__favourite--active {
    & path {
      fill: $blue-main;
      stroke: $blue-main;
      transition: 0.15s ease-in-out;
    }

    &:hover {

      & path {
        fill: transparent;
      }
    }
  }

  // .product-card__right
  &__right {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
  }

  // .product-card__tag
  &__tag {
    font-weight: 600;
    font-size: 16px;
    line-height: 110%;
    color: $silver-text;
    margin-bottom: 10px;
  }

  // .product-card__title
  &__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 120%;
    margin-bottom: 20px;
  }

  // .product-card__prices
  &__prices {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 21px;
  }

  // .product-card__actual-price
  &__actual-price {
    font-weight: 700;
    font-size: 21px;
    line-height: 110%;
    color: $blue-main;
    // margin-right: 5px;
  }

  // .product-card__old-price
  &__old-price {
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    text-decoration: line-through;
    color: $gray-text;
    margin-right: 11px;
  }

  // .product-card__discount
  &__discount {
    font-weight: 600;
    font-size: 12px;
    max-width: max-content;
    padding: 7px 10px;
    background: $yellow-bg;
    border-radius: 65px;
    color: $white;
  }

  // .product-card__weights
  &__weights {
    display: flex;
    flexdirtwection: row;
    // justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 30px;
  }

  // .product-card__weight
  &__weight {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    padding: 5px 8px;
    border: 1px solid $gray-bg;
    border-radius: 6px;
    transition: background 0.3s ease 0s, color 0.3s ease 0s;
  }

  // .product-card__weight--active
  &__weight--active {
    background: $gray-bg;
    color: $white;
  }

  // .product-card__characteristics
  &__characteristics {
    display: flex;
    flex-direction: column;
    max-width: 383px;
    width: 100%;
    margin-bottom: 30px;
  }

  // .product-card__btns
  &__btns {
    display: flex;
    flex-direction: row;

    // gap: 17px;
  }

  // .product-card__quantity
  &__quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 17px;
  }

  // .product-card__quantity-button
  &__quantity-button {
    position: relative;
    border: 1px solid $gray-text;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transition: border 0.1s ease-in-out;
    padding: 5px;

    &:hover {
      border: 1px solid $blue-main;

    }
  }

  // .product-card__quantity-button--minus
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


  // .product-card__quantity-button--plus
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

  // .product-card__quantity-input
  &__quantity-input {
    max-width: 24px;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    background: none;
    margin: 0 7px;

    &:focus {
      outline: none;
    }
  }

  // .product-card__btn
  &__btn {
    font-weight: 700;
    font-size: 15px;
    line-height: 120%;
    color: $white;
    background: $blue-main;
    border-radius: 50px;
    padding: 12px 20px 10px 20px;
    width: 163px;
    height: 40px;
    transition: background 0.3s ease 0s;
    // margin-left: 10px;

    & img {
      margin-left: 10px;
    }

    &:hover {
      background: $blue-second;
    }
  }

  // .product-card__btn--delete
  &__btn--delete {
    &:hover {
      background: $red;
    }
  }
}

.card-catalog {

  // .card-catalog__img
  &__img {}
}

.card-product {

  // .card-product__weight
  &__weight {}
}

.characteristics {

  // .characteristics__title
  &__title {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    margin-bottom: 15px;
  }

  // .characteristics__item
  &__item {
    display: flex;
    justify-content: space-between;
  }

  // .characteristics__term
  &__term {
    position: relative;
    overflow: hidden;
    flex-grow: 1;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: $gray-text;
    // padding-right: 5px;

    &::after {
      content: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _";
      position: absolute;
      // left: 6px;
    }
  }

  // .characteristics__val
  &__val {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    text-align: right;
    margin: 0;
    width: max-content;
  }
}
</style>