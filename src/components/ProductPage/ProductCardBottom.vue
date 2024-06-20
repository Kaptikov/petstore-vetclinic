<template>
  <section class="product-card__bottom">
    <div class="product-card__tabs">
      <button class="product-card__tab" v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
        :class="{ 'active': activeTab === index }">
        {{ tab.title }}
      </button>
    </div>
    <div class="product-card__content">
      <div class="product-card__left">
        <div class="product-card__article">
          Артикул {{ product.article }}
        </div>
        <div class="product-card__item">

          <div class="product-card__text" v-if="product.productDescription">
            <b>{{ product.name }}</b> - {{ product.productDescription.name }}
          </div>
        </div>
        <div class="product-card__item">
          <div class="product-card__title">
            Преимущества корма:
          </div>
          <div class="product-card__list" v-for="advantage in product.productAdvantage" :key="advantage">
            <div class="product-card__subtitle"> {{
              advantage.name }}</div>
            <div class="product-card__description">{{
              advantage.description }}</div>
          </div>
        </div>
        <div class="product-card__item">
          <div class="product-card__title">
            Состав
          </div>
          <div class="product-card__text" v-if="product.productDescription">
            {{ product.productComposition.name }}
          </div>
        </div>
      </div>
      <div class="product-card__right">
        <div class="product-card__characteristics characteristics">
          <div class="characteristics__title">Характеристики</div>
          <div class="characteristics__item" v-for="characteristic in product.productCharacteristic"
            :key="characteristic">
            <dt class="characteristics__term"> {{ characteristic.name }}</dt>
            <dd class="characteristics__val"> {{ characteristic.productCharacteristicsValue.name }}</dd>
          </div>
        </div>
        <!-- <div class="product-card__nutrition">
          <div class="product-card__nutrition-title">
            Питательная ценность:
          </div>
          <div class="product-card__nutrition-list">
            <div class="product-card__nutrition-item" v-for="productNutritionalValue in product.productNutritionalValue"
              :key="productNutritionalValue">
              {{ productNutritionalValue.name }}
            </div>
            <div class="product-card__nutrition-item" v-for="characteristic in product.characteristics"
              :key="characteristic">
              {{ characteristic }}
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- <div class="product-card__content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">

        <div class="product-card__article" v-for="(content, contentIndex) in tab.content" :key="contentIndex">
          {{ content.article }}
        </div>
        <div class="product-card" v-for="(content, contentIndex) in tab.content" :key="contentIndex">
          {{ content.dscription }}
        </div>
        <div class="product-card__benefits" v-for="(content, contentIndex) in tab.content" :key="contentIndex">
          {{ content.benefits }}
        </div>
        <div class="product-card" v-for="(content, contentIndex) in tab.content" :key="contentIndex">
          {{ content.structure }}
        </div>

      </div>
    </div> -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: 'Описание',
          content: [
            {
              dscription: 'Florida Salmon & Blueberry - сухой корм супер - премиум - класса с лососем и черникой для стерилизованных кошек в возрасте от 1 до 8 лет.Сбалансированное полнорационное питание заботится о коже и шерсти и способствует здоровому пищеварению.В рационе кормов Florida используется только белок животного происхождения.'
            },
            { article: 'Артикул 53974' },
            { structure: 'structure' },
            { benefits: 'benefits' },
          ]
        },
        {
          title: 'О бренде',
          content: [
            {
              dscription: 'lorem'
            },
            { article: 'Артикул 243421421' },
            { structure: 'Content for tab 3' },
          ]
        },
        {
          title: 'Доставка',
          content: [
            {
              dscription: 'Florida Salmon & Blueberry - сухой корм супер - премиум - класса с лососем и черникой для стерилизованных кошек'
            },
            { article: 'Артикул 52315231123' },
            { structure: 'Content for tab 3' },
          ]
        },
      ],
    };
  },
  props: {
    product: {
    }
  },
  setup(props) {

    return {
    }
  }
}
</script>
<style lang="scss">
.product-card {

  // .product-card__bottom
  &__bottom {
    margin-top: 60px;
  }

  // .product-card__tabs
  &__tabs {
    display: flex;
    flex-direction: row;

    margin-bottom: 35px;
  }

  // .product-card__tab
  &__tab {
    font-weight: 400;
    font-size: 24px;
    line-height: 110%;
    color: $silver-text;
    transition: 0.1s ease-in-out;

    &:not(:last-child) {
      margin-right: 50px;
    }

    &.active {
      position: relative;
      color: $blue-main;
      font-weight: 700;

      &::after {
        content: "";
        position: absolute;
        bottom: -15px;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 20px;
        background-color: $blue-main;
      }
    }

    &:hover {
      color: $black-text;
    }
  }

  // .product-card__content
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  // .product-card__left
  &__left {
    display: flex;
    flex-direction: column;
    flex: 0 1 57.634%;
  }

  // .product-card__article
  &__article {
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: $silver-text;
    margin-bottom: 15px;
  }

  // .product-card__item
  &__item {
    margin-bottom: 25px;
  }

  // .product-card__text
  &__text {
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    // margin-bottom: 25px;
  }

  // .product-card__title
  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    margin-bottom: 15px;
  }

  // .product-card__list
  &__list {
    padding-left: 27px;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .product-card__subtitle
  &__subtitle {
    position: relative;

    &::before {
      content: " ";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -16px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: $blue-main;
    }
  }

  // .product-card__description
  &__description {
    color: $silver-text;
  }

  // .product-card__right
  &__right {
    display: flex;
    flex-direction: column;
    flex: 0 1 32.131%;
  }

  // .product-card__characteristics
  &__characteristics {
    display: flex;
    flex-direction: column;
    max-width: 383px;
    width: 100%;
    margin-bottom: 30px;
  }
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

    &:not(:last-child) {
      margin-bottom: 10px;
    }
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