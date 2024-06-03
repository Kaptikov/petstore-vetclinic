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

<style lang="scss">
.product-categories__dropdown-menu {

  // .product-categories__dropdown-menu__column
  &__column {}

  // .product-categories__dropdown-menu__label
  &__label {
    display: block;
    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
  }

  // .product-categories__dropdown-menu__list
  &__list {}

  // .product-categories__dropdown-menu__item
  &__item {
    display: block;
    font-size: 16px;
    margin-left: -20px;

    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }

  // .product-categories__dropdown-menu__link
  &__link {
    padding: 9px 20px;
    border-radius: 76px;

    opacity: 0.8;
    transition: 0.2s ease-in-out;

    &:hover {
      background: #f7f8fd;
      border-radius: 76px;
      opacity: 1;
      color: $black-text;
      transition: 0.2s ease;
    }

  }
}
</style>