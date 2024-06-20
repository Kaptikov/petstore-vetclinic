<template>
  <div class="signup-form__container _container">
    <div class="signup-form__wrapper">
      <h3 class="signup-form__title">Регистрация</h3>
      <form class="signup-form__form" @submit.prevent="registerUser">
        <label for="username" class="signup-form__label">Логин:</label>
        <input type="text" name="username" v-model="username" placeholder="Имя" required class="signup-form__input">
        <!-- <input type="text" name="name" v-model="name" placeholder="Имя" required class="signup-form__input">
      <input type="text" v-model="surname" placeholder="Фамилия" class="signup-form__input">
      <input type="email" name="email" v-model="email" placeholder="Email" class="signup-form__input"> -->
        <label for="password" class="signup-form__label">Пароль:</label>
        <input type="password" name="password" v-model="password" placeholder="Пароль" required
          class="signup-form__input">
        <input type="submit" value="Зарегистрироваться" class="signup-form__btn">
        <router-link to="/login/" class="signup-form__link">Вход</router-link>
      </form>
    </div>
  </div>
</template>
<script>
import { useSignUpStore } from '@/store/SignUpStore.js'

export default {
  data() {
    return {
      // name: '',
      // surname: '',
      // email: '', 
      username: '',
      password: '',
    }
  },
  methods: {
    async registerUser() {
      console.log('User data:', {
        username: this.username,
        password: this.password,
      })
      const signUpStore = useSignUpStore()
      await signUpStore.registerUser({
        username: this.username,
        password: this.password,
      })
      if (signUpStore.success) {
        this.$router.push('/login');
      }
    },
  },
}
</script>
<style lang="scss">
.signup-form {


  // .signup-form__container
  &__container {
    display: flex;
    justify-content: center;

  }

  // .signup-form__wrapper
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
    padding: 40px;
    background: $white-bg;
    border-radius: 22px;
  }

  // .signup-form__title
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    text-align: center;
    margin-bottom: 30px;
  }

  // .signup-form__form
  &__form {
    display: flex;
    flex-direction: column;
    // align-items: center;
    gap: 20px;
  }

  // .signup-form__input
  &__input {
    max-width: 300px;
    width: 100%;
    padding: 17px;
    backdrop-filter: $white-bg;
    border-radius: 10px;
    border: none;
    outline: none;
    // text-align: center;
  }

  // .signup-form__btn
  &__btn {
    max-width: 300px;
    width: 100%;
    padding: 17px;
    margin-bottom: 20px;
    color: $white;
    background: $blue-main;
    border-radius: 22px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      background: $blue-second;
    }
  }

  // .signup-form__link
  &__link {
    max-width: max-content;
    align-self: center;

  }
}
</style>