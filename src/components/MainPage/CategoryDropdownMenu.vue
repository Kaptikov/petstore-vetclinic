<template>
  <div class="product-categories__dropdown-menu">
    <div class="product-categories__dropdown-menu__column" v-for="subcategory in categoryStore.subcategories"
      :key="subcategory.id">
      <router-link :to="`/catalog/${subcategory.id}`" class="product-categories__dropdown-menu__label">{{
        subcategory.name }}</router-link>
      <ul class="product-categories__dropdown-menu__list">
        <li class="product-categories__dropdown-menu__item" v-for="subsubcategory in subcategory.childCategories"
          :key="subsubcategory.id">
          <router-link router-link :to="`/catalog/${subsubcategory.id}`"
            class="product-categories__dropdown-menu__link">{{
              subsubcategory.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useCategoryStore } from '@/store/CategoryStore';
import { onMounted } from 'vue'

export default {
  props: {
    subcategory: {
      type: Object,
    },
    subsubcategory: {
      type: Object,
    }
  },
  setup(props) {
    const categoryStore = useCategoryStore();
    console.log("props", props.subsubcategory);

    onMounted(() => {
      // categoryStore.getSubSubcategories(parentId);
    })

    return {
      categoryStore,
    }
  }
}
</script>

<style lang="scss"></style>