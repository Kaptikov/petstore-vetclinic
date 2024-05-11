<template>
  <router-link :to="`/catalog/${category.id}`" class="product-categories__card">
    <div class="product-categories__card-label">{{ category.name }}</div>
    <img :src="category.imgUrl" alt="" />
  </router-link>
</template>
<script>
export default {
  props: {
    category: {},
  }
}
</script>
<style lang="scss"></style>