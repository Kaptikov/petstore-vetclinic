<template>
  <div class="page login-page">
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from '@/components/LoginPage/LoginForm.vue'
export default {
  components: {
    LoginForm,
  }
}
</script>
<style lang="scss">
.login-page {
  flex: 0;
  margin: auto 0;
}
</style>