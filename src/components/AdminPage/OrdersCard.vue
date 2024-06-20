<template>
  <div class="orders__card orders-card" v-for="order in order" :key="order.id">
    <PopupMenuOrder :order="order" />
    <div class="orders-card__user">
      {{ order.user.name }}
      {{ order.user.lastname }}
    </div>
    <div class="orders-card__date">
      {{ formattedDate(order.orderDate) }}
    </div>
    <div class="orders-card__price">
      {{ order.totalPrice }}
    </div>
    <div class="orders-card__status">
      {{ order.status }}
      <SelectOrder :order="order" :orderId="order.id" :options="orderStore.options" />
    </div>
    <button class="orders-card__btn" @click="deleteOrder(order.id)">Удалить</button>
  </div>
</template>

<script>
import PopupMenuOrder from '@/components/AdminPage/PopupMenuOrder.vue';
import SelectOrder from '@/components/AdminPage/SelectOrder.vue';
import { useOrderStore } from '@/store/OrderStore.js';

export default {
  components: {
    PopupMenuOrder,
    SelectOrder
  },
  props: {
    order: {}
  },
  methods: {
    formattedDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    }
  },
  setup() {
    const orderStore = useOrderStore();

    function deleteOrder(id) {
      orderStore.deleteOrder(id);
    }

    function updateOrder(id, status) {
      orderStore.updateOrder(id, status);
    }

    return {
      orderStore,
      deleteOrder,
      updateOrder
    }
  }
}
</script>

<style lang="scss">
.orders {

  // .orders__card
  &__card {
    display: flex;
    flex-direction: column;
    // align-items: center;
    background: $white;
    border-radius: 20px;
    padding: 20px;

    &:not(:last-child) {
      // margin-bottom: 20px;
    }
  }
}

.orders-card {

  // .orders-card__title
  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    margin-bottom: 10px;
    color: $blue-main;
  }

  // .orders-card__date
  &__date {
    font-size: 20px;
    line-height: 120%;
    margin-bottom: 10px;
  }

  // .orders-card__price
  &__price {
    font-size: 18px;
    margin-bottom: 10px;
    color: $blue-main;
  }

  // .orders-card__status
  &__status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    // align-items: center;
  }

  // .orders-card__btn
  &__btn {
    max-width: max-content;
    color: $red;

    &:hover {
      color: $red;
    }
  }
}
</style>