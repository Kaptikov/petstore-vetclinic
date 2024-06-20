<template>
  <div class="login-form__container _container">
    <div class="login-form__wrapper">
      <h3 class="login-form__title">Вход</h3>
      <form class="login-form__form" @submit.prevent="submitForm">
        <label for="username" class="login-form__label">Логин:</label>
        <input type="text" name="username" placeholder="Логин" required v-model="username" class="login-form__input">
        <label for="password" class="login-form__label">Пароль:</label>
        <input type="password" placeholder="Пароль" name="password" required v-model="password"
          class="login-form__input">
        <input type="submit" value="Войти" class="login-form__btn">
        <a href="#" class="login-form__link">Забыли пароль?</a>
        <router-link to="/signup/" class="login-form__link">Регистрация</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from '@/store/LoginStore.js';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      //event.preventDefault();
      const loginStore = useLoginStore();
      loginStore.loginUser(this.username, this.password)
        .then(() => {
          this.$router.push('/profile');
          // this.$router.go(0);
        })
        .catch((error) => {
          console.error('Ошибка входа:', error);
        });
    }
  }
}
</script>

<style lang="scss">
.login-form {


  // .login-form__container
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 70px;
    padding-bottom: 70px;

  }

  // .login-form__wrapper
  &__wrapper {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    width: 100%;
    max-width: 500px;
    align-items: center;
    background: $white-bg;
    border-radius: 22px;
    padding: 40px;
  }

  // .login-form__title
  &__title {
    font-weight: 400;
    font-size: 32px;
    line-height: 110%;
    margin-bottom: 20px;
    // text-align: center;
  }

  // .login-form__form
  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  // .login-form__input
  &__input {
    max-width: 300px;
    width: 100%;
    padding: 17px;
    backdrop-filter: $white-bg;
    border-radius: 10px;
  }

  // .login-form__btn
  &__btn {
    max-width: 300px;
    width: 100%;
    padding: 17px;
    margin-bottom: 20px;
    color: $white;
    background: $blue-main;
    border-radius: 22px;
    // cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      background: $blue-second;
    }
  }

  // .login-form__link
  &__link {
    max-width: fit-content;
    align-self: center;
    // margin-top: 20px;
  }
}
</style>