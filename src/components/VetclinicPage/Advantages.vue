<template>
  <div class="advantages">
    <div class="advantages__container _container">

      <div class="advantages__text">
        <h3 class="advantages__title">Почему мы?</h3>
        <div class="advantages__description">
          <p>
            Процедуры выполняются с учетом породы, характера, настроения животного.
          </p>
          <p>
            Преимущество нашего салона - гуманное отношение к животным. Мы не используем успокаивающие препараты.
          </p>
          <p>
            Вы сами
            можете в этом убедиться, присутствуя при стрижке вашей собаки или кошки.
            Сеть салонов оказывает услуги груминга для собак, кошек в Нижневартовске
          </p>
        </div>
      </div>

      <div class="advantages__cards">
        <div class="advantages__card">
          <div class="advantages__card-img">
            <img src="@/assets/img/i-paw.svg" alt="">
          </div>
          <div class="advantages__card-title">Преимущество 1</div>
          <div class="advantages__card-description">Описание Процедуры выполняются с учетом породы.</div>
        </div>
        <div class="advantages__card">
          <div class="advantages__card-img">
            <img src="@/assets/img/i-koala.svg" alt="">
          </div>
          <div class="advantages__card-title">Преимущество 1</div>
          <div class="advantages__card-description">Описание Процедуры выполняются с учетом породы.</div>
        </div>
        <div class="advantages__card">
          <div class="advantages__card-img">
            <img src="@/assets/img/i-collar.svg" alt="">
          </div>
          <div class="advantages__card-title">Преимущество 1</div>
          <div class="advantages__card-description">Описание Процедуры выполняются с учетом породы.</div>
        </div>
        <div class="advantages__card">
          <div class="advantages__card-img">
            <img src="@/assets/img/i-cat.svg" alt="">
          </div>
          <div class="advantages__card-title">Преимущество 1</div>
          <div class="advantages__card-description">Описание Процедуры выполняются с учетом породы.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.advantages {
  padding: 110px 0;
  background: $white;

  // .advantages__container
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  // .advantages__text
  &__text {
    max-width: 440px;
    width: 100%;
    margin-right: 20px;
  }

  // .advantages__title
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 110%;
    margin-bottom: 20px;
  }

  // .advantages__description
  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: $silver-text;

    & p:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .advantages__cards
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-template-rows: 1fr;
    width: 100%;
    max-width: 684px;
    // flex-direction: row;
    // flex-wrap: wrap;
    gap: 20px;
  }

  // .advantages__card
  &__card {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    max-width: 332px;
    width: 100%;
    background: $white-bg;
    border-radius: 20px;
  }

  // .advantages__card-img
  &__card-img {
    margin-bottom: 20px;
  }

  // .advantages__card-title
  &__card-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 110%;
    margin-bottom: 10px;
  }

  // .advantages__card-description
  &__card-description {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: $silver-text;
  }
}

@media (max-width: 992px) {
  .advantages {
    &__container {
      flex-direction: column;
      align-items: center;
    }

    &__text {
      margin-right: 0;
      margin-bottom: 40px;
      max-width: 684px;
    }

    &__cards {
      // max-width: 684px;
      justify-items: center;
    }
  }
}
</style>