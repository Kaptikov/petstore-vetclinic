<template>
  <div class="main-block">
    <div class="main-block__container _container">
      <h2 class="main-block__title">Ветеринарная клиника</h2>
      <p class="main-block__subtitle">С любовью и заботой к Вашим четвероногим</p>
      <div class="main-block__items">
        <div class="main-block__item">
          <div class="main-block__item-img">
            <img src="@/assets/img/vetclinic-time.svg" alt="">
          </div>
          <div class="main-block__item-text">
            Время процедуры от 40 минут до 2-3 часов
          </div>
        </div>
        <div class="main-block__item">
          <div class="main-block__item-img">
            <img src="@/assets/img/vetclinic-checkmark.svg" alt="">
          </div>
          <div class="main-block__item-text">
            Большой выбор, качество и низкая цена!
          </div>
        </div>
        <div class="main-block__item">
          <div class="main-block__item-img">
            <img src="@/assets/img/vetclinic-calendar.svg" alt="">
          </div>
          <div class="main-block__item-text">
            Мы подберём для вас самое удобное время
          </div>
        </div>
      </div>
      <button class="main-block__btn">
        <span>Записаться</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div class="main-block__img-sparkle">
        <img src="@/assets/img/sparkle-second.svg" alt="" />
      </div>
      <div class="main-block__img-bg">
        <picture>
          <source media="(max-width: 1200px)" srcset="@/assets/img/header-bg-4.png">
          <img src="@/assets/img/vetclinic-bg.png" alt="vetclinic">
        </picture>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.main-block {
  background: $blue-bg-second;
  overflow: hidden;

  // .main-block__container
  &__container {
    padding-top: 202px;
    padding-bottom: 70px;
    position: relative;

  }

  // .main-block__title
  &__title {
    font-weight: 700;
    font-size: 68px;
    line-height: 110%;
    color: $white;
    margin-bottom: 20px;
  }

  // .main-block__subtitle
  &__subtitle {
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: $white;
    margin-bottom: 25px;
  }

  // .main-block__items
  &__items {
    display: flex;
    flex-direction: column;
    max-width: 437px;
  }

  // .main-block__item
  &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 17px;
    padding: 12px 17px;
    background: $white;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  // .main-block__item-img
  &__item-img {}

  // .main-block__item-text
  &__item-text {}

  // .main-block__btn
  &__btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 17px 32px;
    margin-top: 30px;
    background: $blue-main;
    border-radius: 66px;
    color: $white;
    font-weight: 600;
    font-size: 16px;
    // line-height: 130%;
    transition: background 0.2s ease, color 0.2s ease;

    &:hover {
      background: $blue-second;
    }
  }

  // .main-block__img-sparkle
  &__img-sparkle {
    position: absolute;
    top: 165px;
    left: -45px;

  }

  // .main-block__img-bg
  &__img-bg {
    position: absolute;
    bottom: -371px;
    right: -280px;
    width: 90.6%;
    padding-top: 85.4%;
    z-index: 0;

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>