<template>
  <Header :id="userStore.user.id" />
  <main class="page profile-page">
    <div class="profile-page__container _container">
      <template v-if="isLoggedIn">
        <AsideNavigation :user="userStore.user" />
        <div class="profile-page__wrapper" v-if="userStore.user && userStore.user.id">
          <PersonalData :user="userStore.user" />
          <OrderHistory :user="userStore.user" :id="userStore.user.id" />
          <Animals :id="userStore.user.id" />
          <AppointmentsHistory :id="userStore.user.id" />
        </div>
      </template>
      <!-- <template v-else-if="isLoading">
        <Loader />
      </template> -->
      <template v-else>
        <div class="profile-page__wrapper-second">
          <h3 class="profile-page__title profile-page__title--second">Войдите в систему</h3>
          <router-link to="/login/" class="profile-page__link">Вход</router-link>
        </div>
      </template>
    </div>
  </main>
  <Footer />
</template>

<script>
import { onMounted, watchEffect } from 'vue';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AsideNavigation from '@/components/ProfilePage/AsideNavigation.vue'
import PersonalData from '@/components/ProfilePage/PersonalData.vue'
import OrderHistory from '@/components/ProfilePage/OrderHistory.vue'
import Animals from '@/components/ProfilePage/Animals.vue'
import AppointmentsHistory from '@/components/ProfilePage/AppointmentsHistory.vue'

import Loader from '@/components/Loader.vue';

import { useLoginStore } from '@/store/LoginStore.js'
import { useUserStore } from '@/store/UserStore.js';
import { useAnimalStore } from '@/store/AnimalStore.js';

export default {
  components: {
    Header,
    AsideNavigation,
    PersonalData,
    OrderHistory,
    Animals,
    AppointmentsHistory,
    Loader,
    Footer
  },

  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    isLoggedIn() {
      const loginStore = useLoginStore()
      return !!loginStore.token
    },
  },
  created() {
    const loginStore = useLoginStore()
    loginStore.initialize()
  },
  setup() {
    const userStore = useUserStore();
    const animalStore = useAnimalStore();

    onMounted(() => {
      userStore.getUser();
      // console.log("id", userStore.user);
      // animalStore.getAnimals(userStore.user.id);
    })

    return {
      userStore,
      animalStore,
    };
  },
}
</script>

<style lang="scss">
// .profile-page
.profile-page {
  &__page {
    padding-top: clamp(7.5rem, 4.688rem + 14.06vw, 11.438rem);
    padding-bottom: clamp(4.375rem, 1.138rem + 14.39vw, 12.125rem);
    background: $white-bg;
  }

  background: $white-bg;

  // .profile-page__container
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // align-items: center;
    margin-top: 170px;
    margin-bottom: 100px;
  }

  // .profile-page__wrapper
  &__wrapper {
    display: flex;
    flex-direction: column;
    max-width: 888px;
    width: 100%;
    gap: 50px;
  }

  // .profile-page__wrapper-second
  &__wrapper-second {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  // .profile-page__title
  &__title {
    font-weight: 700;
    font-size: clamp(2.25rem, 1.886rem + 1.82vw, 3.25rem);
    line-height: 110%;
    // text-align: center;
    margin-bottom: 50px;
  }

  // .profile-page__title--second
  &__title--second {
    text-align: center;
  }


  // .profile-page__link
  &__link {
    text-align: center;
    color: $white;
    background: $blue-main;
    padding: 15px;
    max-width: 150px;
    width: 100%;
    border-radius: 22px;
    transition: background 0.2s ease-in-out;

    &:hover {
      color: $white;
      background: $blue-second;
      transition: background 0.2s ease-in-out;
    }
  }
}

@media (max-width: 1200px) {
  .profile-page {
    &__wrapper {
      max-width: 100%;
    }
  }
}
</style>