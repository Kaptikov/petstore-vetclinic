<template>
  <section class="appointment-booking">
    <div class="appointment-booking__container _container">
      <div class="appointment-booking__wrapper">
        <div class="appointment-booking__title">
          Записывемся на ноготочки!
        </div>
        <div class="appointment-booking__description">
          Полный комплекс процедур для красоты и здоровья вашего питомца
        </div>
        <form class="appointment-booking__form">
          <input type="tel" placeholder="+7 ___ ___-__-__" class="appointment-booking__input">
          <!-- <input type="submit" value="Записаться на прием" class="appointment-booking__btn"> -->
          <button class="appointment-booking__btn" type="submit">Записаться на прием</button>
        </form>
      </div>
      <div class="appointment-booking__img-spiral">
        <img src="@/assets/img/spiral.svg" alt="">
      </div>
      <div class="appointment-booking__img-dog">
        <img src="@/assets/img/dog-bg.png" alt="">
      </div>
      <div class="appointment-booking__img-sheet">
        <img src="@/assets/img/sheet.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.appointment-booking {
  margin: 110px 0 110px 0;

  // .appointment-booking__container
  &__container {
    position: relative;
    display: flex;
    flex-direction: row;
    background: $orange-bg;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
  }

  // .appointment-booking__wrapper
  &__wrapper {
    max-width: 422px;
    margin-left: clamp(25px, -3.946rem + 8.85vw, 45px);
    padding-top: clamp(2.5rem, -0.672rem + 6.61vw, 4.375rem);
    padding-bottom: 60px;
    z-index: 2;
  }

  // .appointment-booking__title
  &__title {
    font-weight: 700;
    font-size: clamp(24px, 0.874rem + 2.78vw, 48px);
    line-height: 110%;
    margin-bottom: 20px;
    color: $white;
  }

  // .appointment-booking__description
  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    margin-bottom: clamp(40px, -24.457rem + 43.48vw, 140px);
    color: $white;
  }

  // .appointment-booking__form
  &__form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 391px;
    // padding-left: 20px;
    border-radius: 66px;
    background: $white;
  }

  // .appointment-booking__input
  &__input {
    font-weight: 400;
    font-size: 15px;
    line-height: 120%;
    padding: 10px 20px;
    background: $white;
    border-radius: 66px;

    &:focus {
      outline: none;
    }
  }

  // .appointment-booking__btn
  &__btn {
    // font-weight: 600;
    font-size: 15px;
    line-height: 120%;
    color: $white;
    white-space: nowrap;
    padding: 10px 20px;
    background: $green-bg;
    border-radius: 66px;
  }

  // .appointment-booking__img-spiral
  &__img-spiral {
    display: none;
    position: absolute;
    top: -59px;
    left: -45px;
    width: 40%;
    // height: 100%;
    padding-top: 40.4255%;
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

  // .appointment-booking__img-dog
  &__img-dog {
    position: relative;
    // max-width: 542px;
    width: 46.057%;
    min-width: 375px;
    margin-top: auto;
    margin-left: auto;
    margin-right: clamp(2.438rem, -24.519rem + 43.48vw, 8.688rem);
    margin-bottom: auto;
    padding-bottom: 38.087%;
    z-index: 1;

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // .appointment-booking__img-sheet
  &__img-sheet {
    position: absolute;
    bottom: -31px;
    right: clamp(-4.25rem, -13.34rem + 14.6vw, -2.188rem);
    // max-width: 250px;
    width: 22.889%;
    padding-bottom: 22.567%;
    background-image: url('../assets/img/sheet.svg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;

    & img {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

@media (max-width: 996px) {
  .appointment-booking {
    &__form {
      flex-direction: column;
      background: none;
    }

    &__input {
      margin-bottom: 20px;
      background: $white;
    }

    &__img-sheet {
      bottom: -12px;
      // right: -68px;
    }
  }
}

@media (max-width: 767px) {
  .appointment-booking {


    &__img-dog {
      margin-bottom: 13px;
      margin-right: -50px;
    }
  }
}

@media (max-width: 645px) {
  .appointment-booking {
    &__container {
      flex-direction: column;
    }

    &__img-dog {
      width: 87.222%;
      padding-bottom: 72.38%;
      margin-right: 0;
      margin-left: -19px;
      min-width: 0;
    }
  }
}

@media (max-width: 556px) {
  .appointment-booking {
    &__wrapper {
      max-width: 100%;
      margin-left: 0;
      padding-bottom: 6px;
    }

    &__description {
      margin-bottom: 25px;
    }
  }
}
</style>