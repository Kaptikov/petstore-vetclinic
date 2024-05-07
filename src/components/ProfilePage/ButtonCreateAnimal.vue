<template>
  <button class="animals__btn-create btn-create">
    <img class="btn-create__icon" src="@/assets/img/i_newpet.svg" alt="">
    <span class="btn-create__text">Добавить нового питомца</span>
  </button>

</template>
<script>
export default {

}
</script>
<style lang="scss">
.animals {

  // .animals__btn-create
  &__btn-create {
    display: flex;
    align-items: center;
    gap: 45px;
    width: 100%;
    padding: 36px 45px;
    margin-bottom: 59px;
    background: $blue-main;
    border-radius: 22px;
    transition: background 0.2s ease;

    &:hover {
      background: $blue-second;
    }
  }
}

.btn-create {

  // .btn-create__icon
  &__icon {}

  // .btn-create__text
  &__text {
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    color: $white;
  }
}
</style>