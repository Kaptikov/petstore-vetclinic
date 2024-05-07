<template>
  <section class="product-card__top">
    <div class="product-card__left">
      <swiper :direction="'vertical'" :spaceBetween="10" :navigation="false" :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules" class="product-card__swiper-first">
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
        <div class="characteristics__item">
          <dt class="characteristics__term">Бренд</dt>
          <dd class="characteristics__val">FLORIDA</dd>
        </div>
        <div class="characteristics__item">
          <dt class="characteristics__term">Класс корма</dt>
          <dd class="characteristics__val">Топ</dd>
        </div>
        <div class="characteristics__item">
          <dt class="characteristics__term">Возраст</dt>
          <dd class="characteristics__val">1-5 лет</dd>
        </div>
        <div class="characteristics__item">
          <dt class="characteristics__term">Страна производства</dt>
          <dd class="characteristics__val">Китай</dd>
        </div>
        <div class="characteristics__item">
          <dt class="characteristics__term">Особенности</dt>
          <dd class="characteristics__val">Для стерилизаванных</dd>
        </div>

      </div>
      <div class="product-card__btns">
        <div class="product-card__quantity">
          <button class="product-card__quantity-button product-card__quantity-button--minus"></button>
          <input class="product-card__quantity-input" type="text" value="1" />
          <button class="product-card__quantity-button product-card__quantity-button--plus"></button>
        </div>
        <button class="product-card__btn">
          В корзину
          <img src="@/assets/img/shopping-cart.svg" alt="">
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { useProductImgStore } from '@/store/ProductImgStore'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
export default {
  props: {
    id: {
      type: String,
      default: '',
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

    const getProductImgForProduct = productId => {
      return productImgStore.productImgs.filter(
        propoductImg => propoductImg.productId === productId
      )
    }


    onMounted(() => {
      productImgStore.getProductImg(props.id)
    })
    return {
      getProductImgForProduct,
      productImgStore,
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    }
  },

  methods: {
    selectWeight(weight) {
      this.selectedWeight = weight;
    },
  },
}
</script>
<style lang="scss">
.product-card {

  // .product-card__top
  &__top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  // .product-card__left
  &__left {
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