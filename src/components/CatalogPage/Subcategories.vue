<template>
  <div class="catalog__subcategories subcategories">

    <button class="subcategories__item" v-for="subcategory of subcategory" :key="subcategory.id"
      @click="$router.push({ name: 'catalog', params: { id: subcategory.id } })">{{ subcategory.name
      }}</button>
  </div>
</template>
<script>
import { onMounted } from 'vue';
// import { useCategoryStore } from '@/store/CategoryStore';

export default {
  props: {
    subcategory: {
      type: Object,
    }
  },
  setup(props) {
    // const categoryStore = useCategoryStore();

    // onMounted(() => {
    //   categoryStore.getSubcategories();
    // })
  }
}
</script>
<style lang="scss">
.subcategories {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;

  // .subcategories__item
  &__item {
    padding: 8px 20px;
    background: $white;
    border-radius: 80px;
    outline: 2px solid transparent;
    transition: outline 0.2s ease-in-out;

    &:hover {
      outline: 2px solid $blue-bg;
    }
  }
}
</style>