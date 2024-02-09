<template>
  <div class="main-block">
    <div class="main-block__container _container">
      <h2 class="main-block__title">
        Всё для счастья <br />
        ваших любимцев
      </h2>
      <p class="main-block__subtitle">Новые скидки каждый день!</p>
      <button class="main-block__btn">В каталог</button>
      <div class="main-block__img-sparkle">
        <img src="@/assets/img/sparkle.svg" alt="" />
      </div>
      <div class="main-block__img-vector">
        <img src="@/assets/img/vector1.svg" alt="" />
      </div>
      <div class="main-block__img-dog">
        <img src="@/assets/img/dog.png" alt="" />
      </div>
      <div class="main-block__img-sketch-line-curly">
        <img src="@/assets/img/sketch-line-curly.svg" alt="" />
      </div>
      <div class="main-block__img-sketch-line-M">
        <img src="@/assets/img/sketch-line-M.svg" alt="" />
      </div>
      <div class="main-block__img-sketch-line-heart">
        <img src="@/assets/img/sketch-line-heart.svg" alt="" />
      </div>
      <div class="main-block__images"></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.main-block {
  // background: url('../assets/img/vector1.svg') no-repeat 110% 100%;
  background: $blue-bg;
  color: $white;
  // .main-block__container
  &__container {
    position: relative;
    min-height: 659px;
  }
  // .main-block__title
  &__title {
    font-size: 68px;
    line-height: 110%;
    font-weight: 700;
    letter-spacing: 4px;
    padding-top: 231px;
  }
  // .main-block__subtitle
  &__subtitle {
    font-size: 20px;
    line-height: 140%;
    margin-top: 20px;
  }
  // .main-block__btn
  &__btn {
    position: relative;
    margin-top: 47px;
    padding: 10px 54px 10px 20px;
    color: $blue-main;
    background: $white;
    border-radius: 66px;
    transition: outline-color 0.2s ease-in-out;
    outline: 2px solid transparent;
    &::after {
      content: '';
      position: absolute;
      top: 9px;
      right: 20px;
      width: 24px;
      height: 24px;
      background: url('../assets/img/arrow-right.svg') no-repeat 100%;
      transition: right 0.2s ease-in-out;
    }
    &:hover {
      outline: 2px solid;
      outline-color: $blue-main;
      &::after {
        right: 15px;
      }
    }
  }
  // .main-block__img-sparkle
  &__img-sparkle {
    position: absolute;
    top: 173px;
    left: -27px;
  }
  // .main-block__images
  &__images {
  }
  // .main-block__img-vector
  &__img-vector {
    // display: none;
    position: absolute;
    top: 108px;
    // transform: translateY(-18%);
    // bottom: 0;
    right: -20px;
    // width: 917px;
    // height: 860px;
    width: 75%;
    padding-top: 70.4%;

    z-index: 0;
    // transform: rotate(-28.81deg);
    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  // .main-block__img-dog
  &__img-dog {
    position: absolute;
    // top: 203px;
    bottom: -6px;
    right: 154px;
    width: 33.4%;
    padding-top: 37.8%;
    z-index: 2;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 46.6%;
      max-height: 410px;
      height: 100%;
      background: $white;
      filter: blur(155px);
      border-radius: 85px;
    }
  }
  &__img-dog img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  // .main-block__img-sketch-line-curly
  &__img-sketch-line-curly {
    position: absolute;
    top: 534px;
    right: 469px;
    z-index: 1;
  }
  // .main-block__img-sketch-line-M
  &__img-sketch-line-M {
    position: absolute;
    top: 555.7px;
    right: 0;
    z-index: 1;
  }
  // .main-block__img-sketch-line-heart
  &__img-sketch-line-heart {
    position: absolute;
    top: 181px;
    right: 102.5px;
    z-index: 1;
  }
}
</style>
