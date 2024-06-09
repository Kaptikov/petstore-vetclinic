<template>
  <div class="page signup-page">
    <SignUpForm />
  </div>
</template>
<script>
import SignUpForm from '@/components/SignUp/SignUpForm.vue'
export default {
  components: {
    SignUpForm,
  }
}
</script>
<style lang="scss">
.signup-page {
  flex: 0;
  margin: auto 0;
}
</style>