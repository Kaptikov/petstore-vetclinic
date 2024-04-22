<template>
  <div class="catalog__subcategories subcategories">
    <button class="subcategories__item">Сухой корм</button>
    <button class="subcategories__item">Консервы</button>
    <button class="subcategories__item">Пресервы</button>
    <button class="subcategories__item">Лакомства</button>
    <button class="subcategories__item">Витамины и добавки</button>
  </div>
</template>
<script>
// import { useSubcategoryStore } from '@/store/SubcategoryStore';

export default {

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