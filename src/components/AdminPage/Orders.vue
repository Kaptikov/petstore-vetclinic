<template>
  <div class="orders">
    <h3 class="orders__title">Orders</h3>
    <div class="orders__cards">
      <OrdersCard :order="orderStore.allOrders" />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import OrdersCard from '@/components/AdminPage/OrdersCard.vue'
import { useOrderStore } from '@/store/OrderStore.js';
export default {
  components: {
    OrdersCard
  },

  setup() {
    const orderStore = useOrderStore();
    onMounted(() => {
      orderStore.getAllOrders();
    })
    return {
      orderStore
    }
  }
}
</script>

<style lang="scss">
.orders {
  // margin-top: 70px;

  // .orders__title
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
    margin-bottom: 39px;
  }

  // .orders__cards
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}
</style>