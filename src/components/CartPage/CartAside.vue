<template>
  <div class="cart__aside">
    <div class="cart__aside-quantity">Товаров: {{ cartItemsLength }}</div>
    <div class="cart__aside-total">
      <div class="cart__aside-title">Итого</div>
      <div class="cart__aside-price">{{ finalPrice }} руб.</div>
    </div>
    <button class="cart__aside-btn" @click="addToOrder(orderNumber, id, orderDate, status, finalPrice,)">Оформить
      заказ</button>
    <!-- <PopupMenu /> -->
  </div>
</template>

<script>
import PopupMenu from '@/components/CartPage/PopupMenu.vue';
import { useCartStore } from '@/store/CartStore.js';
import { useOrderStore } from '@/store/OrderStore.js';
export default {
  components: {
    PopupMenu
  },
  props: {
    id: {},
    cartItem: {},
    finalPrice: {},
    cartItemsLength: {}
  },

  setup(props) {
    const cartStore = useCartStore();
    const orderStore = useOrderStore();

    function addToOrder(orderNumber, userId, orderDate, status, totalPrice) {
      orderStore.addOrder(orderNumber, userId, orderDate, status, totalPrice);
    }

    return {
      cartStore,
      orderStore,
      addToOrder,
    }
  }
}
</script>

<style lang="scss">
.cart {

  // .cart__aside
  &__aside {
    background: $white;
    padding: 20px;
    border-radius: 22px;
    max-width: 384px;
    width: 100%;
    height: 100%;
  }

  // .cart__aside-quantity
  &__aside-quantity {
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 20px;
  }

  // .cart__aside-total
  &__aside-total {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 20px;
      left: 0;
      width: 100%;
      height: 1px;
      background: $gray-text;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  // .cart__aside-title
  &__aside-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
  }

  // .cart__aside-price
  &__aside-price {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    color: $blue-main;
  }

  // .cart__aside-btn
  &__aside-btn {
    width: 100%;
    margin-top: 20px;
    background: $blue-main;
    border-radius: 66px;
    padding: 10px;
    color: $white;
    transition: background 0.1s ease-in-out;

    &:hover {
      background: $blue-second;
    }
  }
}
</style>