<template>
  <div class="аppointment-history">
    <div class="аppointment-history__wrapper">
      <h4 class="profile-page__title аppointment-history__title">История записей</h4>
      <PopupMenuAppointment :id="id" />
      <template v-if="appointmentStore.appointments && appointmentStore.appointments.length > 0">
        <div class="аppointment-history__items">
          <AppointmentsHistoryCard v-for="аppointment of appointmentStore.appointments" :key="аppointment.id"
            :appointment="аppointment" />
        </div>
      </template>
      <template v-else>
        <h3 class="profile-page__subtitle">Записи отсутствуют</h3>
      </template>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import AppointmentsHistoryCard from '@/components/ProfilePage/AppointmentsHistoryCard.vue'
import PopupMenuAppointment from '@/components/ProfilePage/PopupMenuAppointment.vue'
import { useAppointmentStore } from '@/store/AppointmentStore.js';
export default {
  components: {
    AppointmentsHistoryCard,
    PopupMenuAppointment,
  },

  props: {
    id: {}
  },
  setup(props) {
    const appointmentStore = useAppointmentStore();

    onMounted(() => {
      appointmentStore.getAppointments(props.id);
    })
    return {
      appointmentStore,
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