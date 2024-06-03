<template>
  <div class="аppointment-history">
    <div class="аppointment-history__wrapper">
      <h4 class="profile-page__title аppointment-history__title">История записей</h4>
      <!-- <template v-if="аppointmentStore.аppointments && аppointmentStore.аppointments.length > 0"> -->
      <PopupMenuAppointment :id="id" />
      <div class="аppointment-history__items">
        <AppointmentsHistoryCard />
        <!-- <OrderHistoryCard v-for="аppointment of аppointmentStore.аppointments" :key="аppointment.id"
					:аppointment="аppointment" /> -->
      </div>
      <!-- </template>
<template v-else>
				<h3 class="profile-page__subtitle">Записи отсутствуют</h3>
			</template> -->
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import AppointmentsHistoryCard from '@/components/ProfilePage/AppointmentsHistoryCard.vue'
import PopupMenuAppointment from '@/components/ProfilePage/PopupMenuAppointment.vue'
// import { useOrderStore } from '@/store/OrderStore.js';
export default {
  components: {
    AppointmentsHistoryCard,
    PopupMenuAppointment,
  },

  props: {
    id: {}
  },
  setup(props) {
    // const аppointmentStore = useOrderStore();

    onMounted(() => {
      // аppointmentStore.getOrders(props.id);
    })
    return {
      // аppointmentStore
    }
  }
}
</script>

<style lang="scss">
.аppointment-history {

  // .аppointment-history__wrapper
  &__wrapper {
    // display: flex;
    // flex-direction: column;
    // gap: 20px;
  }

  // .аppointment-history__title
  &__title {}

  // .аppointment-history__items
  &__items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.profile-page {

  // .profile-page__title
  &__title {}

  // .profile-page__subtitle
  &__subtitle {
    font-weight: 400;
    font-size: 21px;
    line-height: 100%;
  }
}
</style>