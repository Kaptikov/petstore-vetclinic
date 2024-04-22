<template>
  <div class="personal-data">
    <div class="personal-data__wrapper">
      <div class="personal-data__title">ЛИЧНЫЕ ДАННЫЕ</div>
      <div class="personal-data__content">
        <div class="personal-data__left">
          <div class="personal-data__img">
            <!-- <img src="@/assets/img/product-1.png" alt=""> -->
            <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M84.2208 84.5048H45.7783C42.5916 84.5048 40 81.9132 40 78.7265V55.2923C40 52.1056 42.5916 49.5139 45.7783 49.5139H53.6225L54.3091 47.1977C54.5894 45.9303 55.748 45 57.1107 45H72.8894C74.2136 45 75.3856 45.9255 75.6958 47.2092L75.7141 47.2882L76.34 49.5138H84.2217C87.4084 49.5138 90 52.1054 90 55.2921V78.7262C89.9991 81.9132 87.4066 84.5048 84.2208 84.5048ZM45.7783 51.4401C43.6538 51.4401 41.9262 53.1679 41.9262 55.2923V78.7263C41.9262 80.8509 43.6539 82.5785 45.7783 82.5785H84.2208C86.3453 82.5785 88.0729 80.8508 88.0729 78.7263V55.2923C88.0729 53.1677 86.3452 51.4401 84.2208 51.4401H74.8811L73.8266 47.6793C73.7293 47.242 73.3354 46.9253 72.8885 46.9253H57.1097C56.6561 46.9253 56.2708 47.2353 56.1716 47.6804L55.0584 51.4401H45.7783V51.4401ZM65.001 78.683C58.2607 78.683 52.7769 73.2003 52.7769 66.4609C52.7769 59.7205 58.2605 54.2378 65.001 54.2378C71.7396 54.2378 77.2223 59.7214 77.2223 66.4609C77.2222 73.1994 71.7395 78.683 65.001 78.683ZM65.001 56.1629C59.3228 56.1629 54.7031 60.7817 54.7031 66.46C54.7031 72.1382 59.323 76.756 65.001 76.756C70.6782 76.756 75.2962 72.1372 75.2962 66.46C75.296 60.7817 70.6772 56.1629 65.001 56.1629ZM82.9774 55.0149C81.9952 55.0149 81.2005 55.8113 81.2005 56.7918C81.2005 57.7732 81.995 58.5686 82.9774 58.5686C83.9588 58.5686 84.7533 57.773 84.7533 56.7918C84.7524 55.8113 83.9578 55.0149 82.9774 55.0149Z"
                fill="#292929" />
            </svg>
          </div>
          <button class="personal-data__btn">Изменить</button>
        </div>
        <div class="personal-data__right">
          <div class="personal-data__items">
            <div class="personal-data__item">
              <div class="personal-data__label">Имя</div>
              <div class="personal-data__name">Виктория</div>
            </div>
            <div class="personal-data__item">
              <div class="personal-data__label">Фамилия</div>
              <div class="personal-data__lastname">Иванова</div>
            </div>
            <div class="personal-data__item">
              <div class="personal-data__label">email</div>
              <div class="personal-data__email">email@example.com</div>
            </div>
            <div class="personal-data__item">
              <div class="personal-data__label">Телефон</div>
              <div class="personal-data__phone">+7 926 123 45 67</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.personal-data {
  max-width: 888px;
  width: 100%;

  // .personal-data__wrapper
  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  // .personal-data__title
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 133%;
    margin-bottom: 30px;
  }

  // .personal-data__content
  &__content {
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 30px;
    background: $white;
    border-radius: 20px;
  }

  // .personal-data__left
  &__left {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  // .personal-data__img
  &__img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background: $white-bg;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: contain;

    }
  }

  // .personal-data__btn
  &__btn {
    color: $blue-main;

    &:hover {
      color: $blue-second;
    }
  }

  // .personal-data__right
  &__right {
    // flex-grow: 1;
  }

  // .personal-data__items
  &__items {}

  // .personal-data__item
  &__item {
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  // .personal-data__label
  &__label {
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    margin-bottom: 10px;
  }

  // .personal-data__name
  &__name {}

  // .personal-data__lastname
  &__lastname {}

  // .personal-data__email
  &__email {}

  // .personal-data__phone
  &__phone {}
}
</style>
