<template>
  <Header />
  <main class="page admin-page">
    <div class="admin-page__container _container" v-if="userStore.user && userStore.user.id">
      <Requests />
      <!-- <Orders /> -->
    </div>
  </main>
  <Footer />
</template>

<script>
import { onMounted, watchEffect } from 'vue';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import Requests from '@/components/AdminPage/Requests.vue'
import Orders from '@/components/AdminPage/Orders.vue'

import { useLoginStore } from '@/store/LoginStore.js'
import { useUserStore } from '@/store/UserStore.js';
import { useAnimalStore } from '@/store/AnimalStore.js';

export default {
  components: {
    Header,
    Requests,
    Orders,
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
    })

    return {
      userStore,
      animalStore,
    };
  },
}
</script>

<style lang="scss">
// .admin-page
.admin-page {
  background: $white-bg;

  // .admin-page__container
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 170px;
    margin-bottom: 100px;
  }

  // .admin-page__wrapper
  &__wrapper {
    display: flex;
    flex-direction: column;
    max-width: 888px;
    width: 100%;
    gap: 50px;
  }

  // .admin-page__title
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 133%;
    margin-bottom: 30px;
    color: #000;
  }

  // // .admin-page__link
  // &__link {
  //   text-align: center;
  //   color: $white;
  //   background: $blue-main;
  //   padding: 15px;
  //   max-width: 150px;
  //   width: 100%;
  //   border-radius: 22px;
  //   transition: background 0.2s ease-in-out;

  //   &:hover {
  //     color: $white;
  //     background: $blue-second;
  //     transition: background 0.2s ease-in-out;
  //   }
  // }
}
</style>