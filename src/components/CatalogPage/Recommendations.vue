<template>
  <section class="recommendations">
    <div class="recommendations__container _container" v-if="productStore.products.length > 0">
      <h4 class="recommendations__title title">Вы смотрели/Вам понравится</h4>
      <swiper :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" :breakpoints="{
        996: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        }
      }" class="recommendations__swiper swiper">
        <swiper-slide class="recommendations__slide" v-for="product in productStore.products" :key="product.id">
          <CardProduct :product="product" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/store/ProductStore'

import CardProduct from '@/components/CardProduct.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardProduct,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const productStore = useProductStore()
    onMounted(() => {
      productStore.getProduct(props.id)
    })
    return {
      productStore,
      modules: [Navigation],
    }
  },
};
</script>
<style lang="scss">
.recommendations {
  background: $white-bg;
  // padding: 98px 0 85px 0;
  // margin-bottom: clamp(70px, 2.169rem + 9.8vw, 110px); 

  // .recommendations__container
  &__container {
    // position: relative;
  }

  // .recommendations__title
  &__title {
    position: relative;
    margin-bottom: -48px;
    font-weight: 700;
    font-size: clamp(24px, 1.291rem + 0.93vw, 110px);
    line-height: 110%;
    max-width: max-content;
    z-index: 2;
  }

  // .recommendations__swiper
  &__swiper {
    padding-top: 78px;
    width: 100%;
  }

  // .recommendations__slide
  &__slide {
    // max-width: 283px;
  }
}
</style>