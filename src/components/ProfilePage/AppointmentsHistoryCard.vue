<template>
  <div class="аppointment-history__item">
    <div class="аppointment-history__item-pet">
      <div class="аppointment-history__item-img">
        <template v-if="!appointment.animal.imgUrl">
          <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M44.2208 39.5048H5.77835C2.59165 39.5048 0 36.9132 0 33.7265V10.2923C0 7.10557 2.59165 4.51392 5.77835 4.51392H13.6225L14.3091 2.19769C14.5894 0.930266 15.748 0 17.1107 0H32.8894C34.2136 0 35.3856 0.925471 35.6958 2.20923L35.7141 2.2882L36.34 4.51377H44.2216C47.4084 4.51377 50 7.10542 50 10.2921V33.7262C49.9991 36.9132 47.4066 39.5048 44.2208 39.5048ZM5.77835 6.44008C3.65378 6.44008 1.92617 8.16785 1.92617 10.2923V33.7263C1.92617 35.8509 3.65393 37.5785 5.77835 37.5785H44.2208C46.3453 37.5785 48.0729 35.8508 48.0729 33.7263V10.2923C48.0729 8.1677 46.3452 6.44008 44.2208 6.44008H34.8811L33.8266 2.67931C33.7293 2.24205 33.3354 1.92527 32.8885 1.92527H17.1097C16.6561 1.92527 16.2708 2.23531 16.1716 2.68036L15.0584 6.44008H5.77835ZM25.001 33.683C18.2607 33.683 12.7769 28.2003 12.7769 21.4609C12.7769 14.7205 18.2605 9.23777 25.001 9.23777C31.7396 9.23777 37.2223 14.7214 37.2223 21.4609C37.2222 28.1994 31.7395 33.683 25.001 33.683ZM25.001 11.1629C19.3228 11.1629 14.7031 15.7817 14.7031 21.46C14.7031 27.1382 19.323 31.756 25.001 31.756C30.6782 31.756 35.2962 27.1372 35.2962 21.46C35.296 15.7817 30.6772 11.1629 25.001 11.1629ZM42.9774 10.0149C41.9952 10.0149 41.2005 10.8113 41.2005 11.7918C41.2005 12.7732 41.995 13.5686 42.9774 13.5686C43.9588 13.5686 44.7533 12.773 44.7533 11.7918C44.7524 10.8113 43.9578 10.0149 42.9774 10.0149Z"
              fill="#292929" />
          </svg>
        </template>
        <template v-else>
          <img :src="appointment.animal.imgUrl" alt="">
        </template>
        <!-- <img src="@/assets/img/pet.png" alt=""> -->
      </div>
      <div class="аppointment-history__item-name">{{ appointment.animal.name }}</div>
    </div>
    <div class="аppointment-history__item-info">
      <div class="аppointment-history__item-address">
        Комсомольский пр-кт д.00, каб.000
      </div>
      <div class="аppointment-history__item-doctor">
        Врач - {{ appointment.doctor.name }}
      </div>
    </div>
    <div class="аppointment-history__item-datetime">
      <div class="аppointment-history__item-date"> {{ formattedDate(appointment.date) }} </div>
      <div class="аppointment-history__item-time"> {{ appointment.time }} </div>
    </div>
  </div>
</template>

<script>
// import PopupMenuOrder from '@/components/ProfilePage/PopupMenuOrder.vue'
export default {
  components: {
    // PopupMenuOrder
  },
  props: {
    appointment: {
    }
  },
  methods: {
    formattedDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    }
  },
}
</script>

<style lang="scss">
.аppointment-history {

  // .аppointment-history__item
  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: $white;
    border-radius: 20px;
    padding: 20px 30px;
  }

  // .аppointment-history__item-pet
  &__item-pet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // .аppointment-history__item-img
  &__item-img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    background: $white-bg;
    width: 113px;
    height: 113px;
    border-radius: 50%;
    overflow: hidden;

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }

  // .аppointment-history__item-name
  &__item-name {
    text-align: center;
    width: max-content;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
  }

  // .аppointment-history__item-info
  &__item-info {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
  }

  // .аppointment-history__item-address
  &__item-address {
    margin-bottom: 35px;
  }

  // .аppointment-history__item-doctor
  &__item-doctor {}

  // .аppointment-history__item-datetime
  &__item-datetime {
    font-weight: 400;
    font-size: 21px;
  }

  // .аppointment-history__item-date
  &__item-date {
    margin-bottom: 10px;
  }

  // .аppointment-history__item-time
  &__item-time {
    color: $blue-main;
    text-align: end;
  }
}
</style>
