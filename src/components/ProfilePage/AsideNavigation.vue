<template>
  <aside class="aside-navigation">
    <div class="aside-navigation__wrapper">
      <div class="aside-navigation__title">{{ user.name }}</div>
      <nav class="aside-navigation__menu">
        <ul class="aside-navigation__list">
          <li class="aside-navigation__item">
            <a class="aside-navigation__link" href="#">Личные данные</a>
          </li>
          <li class="aside-navigation__item">
            <a class="aside-navigation__link" href="#">История заказов</a>
          </li>
          <li class="aside-navigation__item">
            <a class="aside-navigation__link" href="#">МОИ ПИТОМЦЫ</a>
          </li>
          <li class="aside-navigation__item">
            <a class="aside-navigation__link" href="#">ЗАПИСЬ НА ПРИЕМ</a>
          </li>
          <li class="aside-navigation__item">
            <button class="aside-navigation__btn" @click="logout">ВЫЙТИ</button>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script>
import { useLoginStore } from '@/store/LoginStore.js';

export default {
  props: {
    // id: {
    //   type: String,
    //   default: '',
    // },
    user: {},
  },

  methods: {
    logout() {
      const loginStore = useLoginStore()
      loginStore.logoutUser()
      // this.$router.push('/profile')
      // this.$router.go(0)
      window.location.reload()
      console.log("выход выполнен");
    },
  },
}
</script>
<style lang="scss">
.aside-navigation {
  margin-top: 70px;

  // .aside-navigation__wrapper
  &__wrapper {}

  // .aside-navigation__title
  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    margin-bottom: 34px;
  }

  // .aside-navigation__menu
  &__menu {}

  // .aside-navigation__list
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  // .aside-navigation__item
  &__item {}

  // .aside-navigation__link
  &__link {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-transform: uppercase;
  }

  // .aside-navigation__btn
  &__btn {
    // font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    text-transform: uppercase;
    transition: color 0.1s ease-in;


    &:hover {
      color: $red;
    }
  }
}

@media (max-width: 1200px) {
  .aside-navigation {
    display: none;
  }
}
</style>