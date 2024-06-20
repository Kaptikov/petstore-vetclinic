<template>
  <div class="requests__card requests-card" v-for="request in request" :key="request.id">
    <div class="requests-card__title">
      {{ request.name }}
    </div>
    <div class="requests-card__phone">
      {{ request.phone }}
    </div>
    <div class="requests-card__description" v-if="request.description">
      {{ request.description }}
    </div>
    <div class="requests-card__select">
      <SelectStatus :options="options" :request="request" :requestId="request.id" />
    </div>
    <div class="requests-card__status">
      {{ request.status }}
    </div>

    <button class="requests-card__btn" @click="deleteRequest(request.id)">Удалить</button>
  </div>
</template>

<script>
import SelectStatus from '@/components/AdminPage/SelectStatus.vue';
import { useRequestStore } from '@/store/RequestStore.js';


export default {
  components: {
    SelectStatus,
  },
  props: {
    options: {},
    request: {}
  },

  setup() {
    const requestStore = useRequestStore();

    function deleteRequest(id) {
      requestStore.deleteRequest(id);
    }

    function updateRequest(id, status) {
      requestStore.updateRequest(id, status);
    }

    return {
      requestStore,
      deleteRequest,
      updateRequest,
    }
  }
}
</script>

<style lang="scss">
.requests {

  // .requests__card
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

.requests-card {

  // .requests-card__title
  &__title {
    font-weight: 600;
    font-size: 21px;
    line-height: 120%;
    margin-bottom: 20px;
  }

  // .requests-card__phone
  &__phone {
    font-size: 21px;
    line-height: 120%;
    margin-bottom: 10px;
  }

  // .requests-card__description
  &__description {
    font-size: 21px;
    line-height: 120%;
    margin-bottom: 20px;
    width: 100%;
  }

  // .requests-card__status
  &__status {
    margin-bottom: 20px;
  }

  // .requests-card__select
  &__select {
    margin-bottom: 20px;
  }

  // .requests-card__btn
  &__btn {
    max-width: max-content;
    // margin-left: auto;
    width: 100%;
    height: 50px;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    margin-top: auto;
    color: $red;
  }
}
</style>