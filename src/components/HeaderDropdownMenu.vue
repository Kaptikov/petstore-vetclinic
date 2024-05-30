<template>
  <div class="header__dropdown-menu">
    <div class="header__dropdown-menu__left">
      <ul class="header__dropdown-menu__list">
        <li class="header__dropdown-menu__item" v-for="category in category" :key="category.id">
          <router-link :to="`/catalog/${category.id}`" class="header__dropdown-menu__link-category"
            @mouseover="handleMouseOver(category.id)" @mouseleave="handleMouseLeave">{{
              category.name }}</router-link>
          <!-- <a href="" @click="$router.push({ name: 'catalog', params: { id: category.id } })"
            class="header__dropdown-menu__link-category" @mouseover="handleMouseOver(category.id)"
            @mouseleave="handleMouseLeave">{{
              category.name }}</a> -->
        </li>
      </ul>
    </div>
    <div class="header__dropdown-menu__right">
      <ul class="header__dropdown-menu__list">
        <li class="header__dropdown-menu__item header__dropdown-menu__item-subcategory"
          v-for="subcategory in subcategory" :key="subcategory.id">
          <router-link :to="`/catalog/${subcategory.id}`" class="header__dropdown-menu__link-subcategory">{{
            subcategory.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useCategoryStore } from '@/store/CategoryStore';

export default {
  props: {
    category: {
      type: Object,
    },
    subcategory: {
      type: Object,
    }
  },
  setup(props) {
    const categoryStore = useCategoryStore();
    const parentId = ref(null)
    parentId.value = 2
    const handleMouseOver = (categoryId) => {
      parentId.value = categoryId
      // console.log("parentId", parentId);
      categoryStore.getSubcategories(parentId.value);
    }

    const handleMouseLeave = () => {
      parentId.value = null
    }

    onMounted(() => {
      // categoryStore.getSubSubcategories(parentId);
    })

    return {
      handleMouseOver,
      handleMouseLeave,
      categoryStore,
    }
  }
}
</script>

<style lang="scss">
.header {

  // .header__dropdown-menu
  &__dropdown-menu {
    position: absolute;
    top: 60px;
    left: 0;
    background: $white;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    // .header__dropdown-menu__left
    &__left {
      display: flex;
    }

    // .header__dropdown-menu__right
    &__right {
      border-left: 1px solid #E3E6F9;
      padding: 15px 20px;
      transition: 0.2s ease-in-out;
    }

    // .header__dropdown-menu__list
    &__list {}

    // .header__dropdown-menu__item
    &__item {}

    // .header__dropdown-menu__item-subcategory
    &__item-subcategory {

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    // .header__dropdown-menu__link-category
    &__link-category {
      display: block;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      padding: 10px 20px;
      transition: background 0.2s ease-in-out;

      &:hover {
        transition: background 0.2s ease-in-out;
        background: $blue-bg-third;
      }
    }

    // .header__dropdown-menu__link-subcategory
    &__link-subcategory {
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      color: $silver-text;
      transition: 0.2s ease-in-out;
    }
  }
}
</style>