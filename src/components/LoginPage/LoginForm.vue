<template>
  <div class="login-form__container _container">
    <form class="login-form" v-on:submit="submitForm">
      <label for="username">Логин:</label>
      <input type="text" name="username" placeholder="Логин" required v-model="username" class="login-form__input">
      <label for="password">Пароль:</label>
      <input type="password" placeholder="Пароль" name="password" required v-model="password" class="login-form__input">
      <input type="submit" value="Войти" class="login-form__btn">
      <a href="#" class="login-form__link">Забыли пароль?</a>
      <router-link to="/signup/" class="login-form__link">Регистрация</router-link>
    </form>
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
    submitForm(event) {
      event.preventDefault();
      const loginStore = useLoginStore();
      loginStore.loginUser(this.username, this.password)
        .then(() => {
          this.$router.push('/profile');
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  // .login-form__container
  &__container {
    display: flex;
    justify-content: center;
    padding: 70px 0;
    margin-top: 200px;
    margin-bottom: 200px;
    background: $white-bg;
  }

  // .login-form__input
  &__input {
    max-width: 300px;
    width: 100%;
    padding: 17px;
    backdrop-filter: $white-bg;
  }

  // .login-form__btn
  &__btn {
    max-width: 300px;
    width: 100%;
    padding: 17px;
    color: $white;
    background: $blue-main;
    border-radius: 22px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      background: $blue-second;
    }
  }

  // .login-form__link
  &__link {}
}
</style>