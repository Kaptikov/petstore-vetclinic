<template>
  <Header />
  <main class="page profile-page">
    <div class="profile-page__container _container">
      <template v-if="isLoggedIn">
        <AsideNavigation />
        <PersonalData />
      </template>
      <template v-else>
        <h3 class="profile-page__title">Войдите в систему</h3>
        <router-link to="/login/" class="profile-page__link">Вход</router-link>
      </template>
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AsideNavigation from '@/components/ProfilePage/AsideNavigation.vue'
import PersonalData from '@/components/ProfilePage/PersonalData.vue'

import { useLoginStore } from '@/store/LoginStore.js'
import { useUserStore } from '@/store/UserStore.js';

export default {
  components: {
    Header,
    AsideNavigation,
    PersonalData,
    Footer
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
  // setup() {
  //   const userStore = useUserStore();
  //   const user = userStore.user;

  //   return {
  //     user,
  //   };
  // },
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

  // .profile-page__title
  &__title {
    font-size: 48px;
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