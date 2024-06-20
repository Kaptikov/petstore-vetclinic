<template>
  <div class="requests">
    <h3 class="requests__title">Requests</h3>
    <div class="requests__cards">
      <RequestsCard :request="requestStore.requests" :options="requestStore.options" />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import RequestsCard from '@/components/AdminPage/RequestsCard.vue';
import { useRequestStore } from '@/store/RequestStore.js';
export default {
  components: {
    RequestsCard
  },

  setup() {
    const requestStore = useRequestStore();
    onMounted(() => {
      requestStore.getRequests();
    })
    return {
      requestStore
    }
  }
}
</script>

<style lang="scss">
.requests {

  // .requests__title
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
    margin-bottom: 39px;
  }

  // .requests__cards
  &__cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .requests__cards {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
}
</style>