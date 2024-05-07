<template>
  <div class="animals__card">
    <div class="animals__left">
      <div class="animals__img">
        <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44.2208 39.5048H5.77835C2.59165 39.5048 0 36.9132 0 33.7265V10.2923C0 7.10557 2.59165 4.51392 5.77835 4.51392H13.6225L14.3091 2.19769C14.5894 0.930266 15.748 0 17.1107 0H32.8894C34.2136 0 35.3856 0.925471 35.6958 2.20923L35.7141 2.2882L36.34 4.51377H44.2216C47.4084 4.51377 50 7.10542 50 10.2921V33.7262C49.9991 36.9132 47.4066 39.5048 44.2208 39.5048ZM5.77835 6.44008C3.65378 6.44008 1.92617 8.16785 1.92617 10.2923V33.7263C1.92617 35.8509 3.65393 37.5785 5.77835 37.5785H44.2208C46.3453 37.5785 48.0729 35.8508 48.0729 33.7263V10.2923C48.0729 8.1677 46.3452 6.44008 44.2208 6.44008H34.8811L33.8266 2.67931C33.7293 2.24205 33.3354 1.92527 32.8885 1.92527H17.1097C16.6561 1.92527 16.2708 2.23531 16.1716 2.68036L15.0584 6.44008H5.77835ZM25.001 33.683C18.2607 33.683 12.7769 28.2003 12.7769 21.4609C12.7769 14.7205 18.2605 9.23777 25.001 9.23777C31.7396 9.23777 37.2223 14.7214 37.2223 21.4609C37.2222 28.1994 31.7395 33.683 25.001 33.683ZM25.001 11.1629C19.3228 11.1629 14.7031 15.7817 14.7031 21.46C14.7031 27.1382 19.323 31.756 25.001 31.756C30.6782 31.756 35.2962 27.1372 35.2962 21.46C35.296 15.7817 30.6772 11.1629 25.001 11.1629ZM42.9774 10.0149C41.9952 10.0149 41.2005 10.8113 41.2005 11.7918C41.2005 12.7732 41.995 13.5686 42.9774 13.5686C43.9588 13.5686 44.7533 12.773 44.7533 11.7918C44.7524 10.8113 43.9578 10.0149 42.9774 10.0149Z"
            fill="#292929" />
        </svg>
      </div>
      <button class="animals__btn">Изменить</button>
    </div>
    <div class="animals__info animals-info">
      <div class="animals-info__title">
        {{ animals.name }}
      </div>
      <div class="animals-info__content">
        <div class="animals-info__left">
          <div class="animals-info__item">
            <div class="animals-info__label">Тип</div>
            <div class="animals-info__text"> {{ animals.type }} </div>
          </div>
          <div class="animals-info__item">
            <div class="animals-info__label">Пол</div>
            <div class="animals-info__text"> {{ animals.gender }} </div>
          </div>
          <div class="animals-info__item">
            <div class="animals-info__label">Порода</div>
            <div class="animals-info__text"> {{ animals.breed }} </div>
          </div>
          <div class="animals-info__item">
            <div class="animals-info__label">Возраст</div>
            <div class="animals-info__text"> {{ animals.age }} </div>
          </div>
        </div>
        <div class="animals-info__right">
          <div class="animals-info__item">
            <div class="animals-info__label">Медицинская карта</div>
            <div class="animals-info__text">
              Медицинскую карту заводят при первом посещении клиники и обновляют при каждом обращении. Здесь вы сможете
              посмотреть и скачать актуальную карту в формате pdf
            </div>
          </div>
          <div class="animals-info__item">
            <div class="animals-info__label">Результаты анализов</div>
            <div class="animals-info__text"> Пока нет готовых анализов </div>
          </div>
        </div>
      </div>
      <PopupMenuAnimals :animals="animals" />
      <ButtonDeleteAnimal :animals="animals" />
      <!-- <form>
        <input type="text" name="type" v-model="name" :disabled="!isEditing" class="animals__input animals__input-name">
        <label for="type" class="animals__label">тип</label>
        <input type="text" name="type" v-model="type" :disabled="!isEditing" class="animals__input">
        <label for="sex" class="animals__label">пол</label>
        <input type="text" name="sex" v-model="sex" :disabled="!isEditing" class="animals__input">
        <label for="breed" class="animals__label">порода</label>
        <input type="text" name="breed" v-model="breed" :disabled="!isEditing" class="animals__input">
        <label for="age" class="animals__label">возраст</label>
        <input type="text" name="age" v-model="age" :disabled="!isEditing" class="animals__input">
        <button @click.prevent="toggleEdit">{{ isEditing ? 'Сохранить' : 'Редактировать' }}</button>
      </form> -->
    </div>

  </div>
</template>
<script>
import { ref } from 'vue';
import PopupMenuAnimals from '@/Components/ProfilePage/PopupMenuAnimals.vue';
import ButtonDeleteAnimal from '@/Components/ProfilePage/ButtonDeleteAnimal.vue';

export default {
  components: {
    PopupMenuAnimals,
    ButtonDeleteAnimal,
  },
  props: {
    animals: {}
  },
  setup() {


    return {
    };
  },
};
</script>
<style lang="scss">
.animals {


  // .animals__card
  &__card {
    position: relative;
    display: flex;
    flex-direction: row;
    background: $white;
    border-radius: 20px;
    gap: 40px;
    padding: 30px;
  }

  // .animals__left
  &__left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // .animals__img
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    // max-width: 130px;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: $white-bg;
  }

  // .animals__btn
  &__btn {
    margin-top: 30px;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    color: $blue-main;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: $blue-second;
    }
  }

  // .animals__info
  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}

.animals-info {

  // .animals-info__title
  &__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 167%;
    margin-bottom: 20px;
  }

  // .animals-info__content
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
  }

  // .animals-info__left
  &__left {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  // .animals-info__item
  &__item {

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  // .animals-info__label
  &__label {
    font-weight: 400;
    font-size: 15px;
    line-height: 100%;
    color: $silver-text;
    margin-bottom: 10px;
  }

  // .animals-info__text
  &__text {
    font-weight: 400;
    font-size: 20px;
    line-height: 125%;
  }

  // .animals-info__right
  &__right {
    display: flex;
    flex-direction: column;
    max-width: 389px;
    width: 100%;
  }
}
</style>