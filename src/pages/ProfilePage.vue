<template>
  <Header />
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
        <h3 class=" profile-page__title">Войдите в систему</h3>
        <router-link to="/login/" class="profile-page__link">Вход</router-link>
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
  background: $white-bg;

  // .profile-page__container
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

  // .profile-page__title
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 133%;
    margin-bottom: 30px;
    color: #000;
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
</style>