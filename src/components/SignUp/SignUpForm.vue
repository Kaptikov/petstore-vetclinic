<template>
  <div class="signup-form__container _container">
    <form class="signup-form" @submit.prevent="registerUser">
      <input type="text" name="username" v-model="username" placeholder="Имя" required class="signup-form__input">
      <!-- <input type="text" name="name" v-model="name" placeholder="Имя" required class="signup-form__input">
      <input type="text" v-model="surname" placeholder="Фамилия" class="signup-form__input">
      <input type="email" name="email" v-model="email" placeholder="Email" class="signup-form__input"> -->
      <input type="password" name="password" v-model="password" placeholder="Пароль" required
        class="signup-form__input">
      <input type="submit" value="Зарегистрироваться" class="signup-form__btn">
      <router-link to="/login/" class="signup-form__link">Вход</router-link>
    </form>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  // .signup-form__container
  &__container {
    display: flex;
    justify-content: center;
    padding: 70px 0;
    background: $white-bg;
  }

  // .signup-form__input
  &__input {
    max-width: 300px;
    width: 100%;
    padding: 17px;
    backdrop-filter: $white-bg;
  }

  // .signup-form__btn
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

  // .signup-form__link
  &__link {}
}
</style>