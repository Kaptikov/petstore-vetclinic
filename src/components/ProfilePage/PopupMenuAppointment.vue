<template>
  <button class="аppointment-history__btn btn-аppointment-history__popup" @click="openPopup"
    :class="{ 'аppointment-history-second__btn': isMainPage }">
    Записаться на прием
  </button>
  <transition name="popup-fade">
    <div class="аppointment-history__popup-menu аppointment-history-popup" v-if="isOpen">
      <div class="аppointment-history-popup__content">
        <h4 class="аppointment-history-popup__title">Запись на прием</h4>
        <p class="аppointment-history-popup__text">Оставьте свои контакты и мы обсудим все детали!</p>
        <form class="аppointment-history-popup__form">
          <div class="аppointment-history-popup__selects">
            <SelectAppointmentDoctors :doctors="scheduleStore.doctors" :schedules="scheduleStore.schedules"
              :selectedDoctorId="selectedDoctorId" />
            <template v-if="scheduleStore.scheduleDates">
              <SelectAppointmentDate :scheduleDates="scheduleStore.scheduleDates" />
            </template>
            <template v-if="scheduleStore.scheduleDates">
              <div class="аppointment-history-popup__buttons-time">
                <button v-for="scheduleTime of scheduleStore.scheduleTimes" :key="scheduleTime.id"
                  class="аppointment-history-popup__btn-time"
                  :class="{ 'аppointment-history-popup__btn-time--active': scheduleTime.startTime === selectedTime }"
                  type="button" @click="btnSelectTime(scheduleTime.startTime)">
                  {{ scheduleTime.startTime }}
                </button>
              </div>
            </template>
            <!-- <SelectAppointmentTime /> -->
          </div>
          <div class="аppointment-history-popup__items">
            <div class="аppointment-history-popup__item">
              <label class="аppointment-history-popup__label" for="name">Имя*</label>
              <input class="аppointment-history-popup__input" type="text" id="name" required
                v-model="appointmentStore.appointments.name" />
            </div>
            <div class="аppointment-history-popup__item">
              <label class="аppointment-history-popup__label" for="lastname">Фамилия*</label>
              <input class="аppointment-history-popup__input" type="text" id="lastname" required />
            </div>
            <div class="аppointment-history-popup__item">
              <label class="аppointment-history-popup__label" for="phone">Выберите питомца</label>
              <SelectAppointmentAnimals :animals="animalStore.animals" :selectedAnimal="scheduleStore.selectedAnimal" />
            </div>
            <div class="аppointment-history-popup__item">
              <label class="аppointment-history-popup__label" for="phone">Телефон*</label>
              <input class="аppointment-history-popup__input" type="tel" id="phone" placeholder="+7 (___) ___-__-__"
                required v-model="appointmentStore.appointments.phone" />
            </div>
            <!-- <div class="аppointment-history-popup__item">
              <label class="аppointment-history-popup__label" for="checkbox">Первый раз в клинике</label>
              <input class="аppointment-history-popup__input" type="checkbox" id="checkbox" />
            </div> -->
          </div>
          <button class="аppointment-history-popup__btn аppointment-history-popup__btn--save" type="submit"
            @click.prevent="btnAddAppointment(appointmentStore.appointments.name, appointmentStore.appointments.phone, id, scheduleStore.selectedAnimal, scheduleStore.selectedDoctorId, scheduleStore.selectedDate, scheduleStore.selectedTime)">
            Записаться
          </button>
        </form>
        <div class="аppointment-history-popup__privocy-policy">
          Нажимая на кнопку “Заказать расчёт” я соглашаюсь на
          <a href="" class="аppointment-history-popup__link">обработку персонал ьных данных</a>
          и соглашаюсь с
          <a href="" class="аppointment-history-popup__link">политикой конфиденциальности</a>
        </div>
        <button class="аppointment-history-popup__btn аppointment-history-popup__btn--cancel" type="button"
          @click="closePopup">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.64395 6.99989L13.6606 1.99489C13.8803 1.7752 14.0037 1.47724 14.0037 1.16656C14.0037 0.855872 13.8803 0.557912 13.6606 0.338224C13.4409 0.118537 13.143 -0.00488281 12.8323 -0.00488281C12.5216 -0.00488281 12.2236 0.118537 12.004 0.338224L6.99895 5.35489L1.99395 0.338224C1.77426 0.118537 1.4763 -0.00488281 1.16562 -0.00488281C0.854934 -0.00488281 0.556973 0.118537 0.337286 0.338224C0.117598 0.557912 -0.00582146 0.855872 -0.00582147 1.16656C-0.00582147 1.47724 0.117598 1.7752 0.337286 1.99489L5.35395 6.99989L0.337286 12.0049C0.227936 12.1133 0.141143 12.2424 0.0819125 12.3846C0.0226824 12.5267 -0.0078125 12.6792 -0.0078125 12.8332C-0.0078125 12.9872 0.0226824 13.1397 0.0819125 13.2819C0.141143 13.4241 0.227936 13.5531 0.337286 13.6616C0.445742 13.7709 0.574777 13.8577 0.716946 13.9169C0.859115 13.9762 1.01161 14.0067 1.16562 14.0067C1.31963 14.0067 1.47212 13.9762 1.61429 13.9169C1.75646 13.8577 1.8855 13.7709 1.99395 13.6616L6.99895 8.64489L12.004 13.6616C12.1124 13.7709 12.2414 13.8577 12.3836 13.9169C12.5258 13.9762 12.6783 14.0067 12.8323 14.0067C12.9863 14.0067 13.1388 13.9762 13.281 13.9169C13.4231 13.8577 13.5522 13.7709 13.6606 13.6616C13.77 13.5531 13.8568 13.4241 13.916 13.2819C13.9752 13.1397 14.0057 12.9872 14.0057 12.8332C14.0057 12.6792 13.9752 12.5267 13.916 12.3846C13.8568 12.2424 13.77 12.1133 13.6606 12.0049L8.64395 6.99989Z"
              fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  </transition>

</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { useUserStore } from '@/store/UserStore.js';
import { useAnimalStore } from '@/store/AnimalStore.js';
import { useScheduleStore } from '@/store/ScheduleStore.js';
import { useAppointmentStore } from '@/store/AppointmentStore';

import SelectAppointmentDoctors from '@/components/ProfilePage/SelectAppointmentDoctors.vue'
import SelectAppointmentDate from '@/components/ProfilePage/SelectAppointmentDate.vue'
import SelectAppointmentTime from '@/components/ProfilePage/SelectAppointmentTime.vue'
import SelectAppointmentAnimals from '@/components/ProfilePage/SelectAppointmentAnimals.vue'


export default {
  components: {
    SelectAppointmentAnimals,
    SelectAppointmentDate,
    SelectAppointmentTime,
    SelectAppointmentDoctors
  },

  methods: {
    selectTime(time) {
      this.selectedTime = time;
      // Rest of your code...
    },
  },
  props: {
    title: {},
    user: {},
    id: {},
    isMainPage: {
      type: Boolean,
      required: false,
      default: false,
    },
    selectedDoctorId: {
      type: Number,
      required: false,
      default: null
    }
  },
  setup(props) {
    const userStore = useUserStore();
    const animalStore = useAnimalStore();
    const scheduleStore = useScheduleStore();
    const appointmentStore = useAppointmentStore();
    const isOpen = ref(false);
    const selectedTime = ref(null)
    // const editedUser = ref({ ...props.user });
    // console.log(editedUser);

    const openPopup = () => {
      // userStore.getUser();
      // editedUser.value = { ...props.user };
      isOpen.value = true;
      // console.log(editedUser);
    };

    const closePopup = () => {
      isOpen.value = false;
      // applicationStore.applications.name = '';
      // applicationStore.applications.phone = '';
    };

    function btnAddAppointment(name, phone, userId, animalId, doctorId, date, time) {
      appointmentStore.addAppointment(name, phone, userId, animalId, doctorId, date, time)
      closePopup()
    }

    function btnSelectDate(date) {

      scheduleStore.getTimeForDate(props.selectedDoctorId, date)
    }

    function btnSelectTime(scheduleTime) {
      selectedTime.value = scheduleTime;
      scheduleStore.selectedTime = scheduleTime
      console.log(scheduleStore.selectedTime);
    }

    function getDate(idDoctor) {
      scheduleStore.getSchedule(idDoctor)
      // closePopup()
    }

    // const saveEdit = async () => {
    //   userStore.getUser();
    // };
    onMounted(() => {
      // userStore.getUser();
      animalStore.getAnimals(props.id);
      scheduleStore.getDoctors();
      // scheduleStore.getSchedule(scheduleStore.doctors.id);
    });

    watch(
      () => props.selectedDoctorId,
      (newId) => {
        selectedDoctorId.value = newId
      }
    )

    return {
      isOpen,
      userStore,
      appointmentStore,
      animalStore,
      scheduleStore,
      selectedTime,
      btnSelectDate,
      btnSelectTime,
      // applicationStore,
      btnAddAppointment,
      openPopup,
      closePopup,
      // saveEdit,
    };
  },
};
</script>

<style lang="scss" scoped>
.popup-fade-enter-active {
  transition: all 0.3s ease-out;
}

.popup-fade-enter-active {
  // transition: opacity 0.3s ease-out;
  transition-delay: 0.1s;
}

.popup-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  // transform: scale(0.8);
  opacity: 0;
}

.popup-fade-enter-active .аppointment-history-popup__content,
.popup-fade-leave-active .аppointment-history-popup__content {
  transition: all 0.3s ease-in-out;
}

.popup-fade-enter-active .аppointment-history-popup__content {
  transition-delay: 0.1s;
}

.popup-fade-enter-from .аppointment-history-popup__content,
.popup-fade-leave-to .аppointment-history-popup__content {
  transform: scale(0);
  // transform: scale3d(0.5, 0.5, 0.5);
  opacity: 0;
}

.stop--scroll {
  overflow: hidden;
}

// .btn-аppointment-history-popup
.btn-аppointment-history__popup {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 150px;
  padding: 60px;
  margin-bottom: 39px;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  color: $white;
  border-radius: 20px;
  background-color: $blue-main;
  z-index: 3;
}

.аppointment-history-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  // display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  z-index: 100;

  &__selects {
    position: relative;
    margin-bottom: 30px;

    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      display: block;
      width: 100%;
      height: 1px;
      background-color: $gray-border;
      margin-top: 20px;
    }
  }

  // .аppointment-history-popup__content
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 473px;
    margin: auto;
    color: $black-text;
    background-color: $white;
    padding: 30px;
    border-radius: 20px;
    overflow-y: auto;
    z-index: 100;
  }

  // .аppointment-history-popup__title
  &__title {
    max-width: 413px;
    font-weight: 400;
    font-size: 32px;
    line-height: 110%;
    text-align: center;
    margin-bottom: 10px;
  }

  // .аppointment-history-popup__text
  &__text {
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    text-align: center;
  }

  // .аppointment-history-popup__form
  &__form {
    margin-top: 30px;

  }

  &__buttons-time {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }

  // .аppointment-history-popup__btn
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px;
    font-weight: 400;
    font-size: 16px;
  }

  // .аppointment-history-popup__item
  &__item {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .аppointment-history-popup__label
  &__label {
    margin-block: 7px;
  }

  // .аppointment-history-popup__input
  &__input {
    // max-width: 413px;
    width: 100%;
    padding: 10px 17px;
    border: 1px solid $gray-border;
    border-radius: 80px;

    &:focus {
      outline: 1px solid $blue-main;
    }
  }

  // .аppointment-history-popup__privocy-policy
  &__privocy-policy {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    text-align: center;
    color: $gray-text;
  }

  // .аppointment-history-popup__link
  &__link {
    color: $blue-main;
  }

  // .аppointment-history-popup__btn
  &__btn {
    // max-width: ;
    width: 100%;
    color: $white;
    padding: 10px 15px;
    border-radius: 80px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  &__btn-time {
    padding: 10px 15px;
    max-width: fit-content;
    color: $white;
    font-size: 16px;
    background: $blue-main;
    border-radius: 22px;

    &:not(:last-child) {
      // margin-bottom: 15px;
    }

    &:hover {
      background: $blue-second;
    }
  }

  &__btn-time--active {
    background: $blue-second;
  }

  // .аppointment-history-popup__btn--save
  &__btn--save {
    background: $blue-main;
    margin: 15px 0;

    &:hover {
      background: $blue-second;
    }
  }

  // .аppointment-history-popup__btn--cancel
  &__btn--cancel {
    position: absolute;
    top: 17px;
    right: 17px;
    width: 14px;
    height: 14px;
    padding: 0;
    color: $gray-text;
    background: transparent;
    // outline: 1px solid $blue-main;

    &:hover {
      // outline: 1px solid $red;
      color: $red;
    }
  }

}

@media (max-width: 768px) {
  .аppointment-history__btn {
    display: none;
  }

}
</style>