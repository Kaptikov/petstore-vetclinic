<template>
  <div class="order-history__item">
    <div class="order-history__item-top">
      <!-- <router-link to="/order/" class="order-history__item-title">Заказ № 1745745734</router-link> -->
      <PopupMenuOrder :order="order" />
      <div class="order-history__item-date"> от {{ order.orderDate }}</div>
    </div>

    <div class="order-history__item-bottom">
      <div class="order-history__item-status">{{ order.status }}</div>
      <div class="order-history__item-price">{{ order.totalPrice }} ₽</div>
    </div>
  </div>
</template>
<script>
import PopupMenuOrder from '@/components/ProfilePage/PopupMenuOrder.vue'
export default {
  components: {
    PopupMenuOrder
  },
  props: {
    order: {}
  }
}
</script>
<style lang="scss">
.order-history {

  // .order-history__item
  &__item {
    background: $white;
    width: 100%;
    padding: 20px 30px;
    // border: 1px solid #ede9e8;
    border-radius: 20px;
  }

  // .order-history__item-top
  &__item-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  // .order-history__item-title
  &__item-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 208%;
    color: $blue-main;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: $blue-second;
    }
  }

  // .order-history__item-date
  &__item-date {
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
  }

  // .order-history__item-bottom
  &__item-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  // .order-history__item-status
  &__item-status {
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
  }

  // .order-history__item-price
  &__item-price {
    font-weight: 700;
    font-size: 18px;
    line-height: 110%;
    color: $blue-main;
  }
}
</style>
