<template>
  <button class="animals__btn-create btn-create" @click="openPopup">
    <img class="btn-create__icon" src="@/assets/img/i_newpet.svg" alt="">
    <span class="btn-create__text">Добавить нового питомца</span>
  </button>
  <div class="animals__popup" v-if="isOpen">
    <div class="animals__popup-content">
      <h2 class="animals__popup-title">Редактирование данных питомца</h2>
      <form class="animals__popup-form" @submit.prevent="createAnimal">
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="name">Имя питомца</label>
          <input class="animals__popup-input" type="text" id="name" v-model="name" />
        </div>
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="name">description</label>
          <input class="animals__popup-input" type="text" id="name" v-model="description" />
        </div>
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="type">Тип</label>
          <input class="animals__popup-input" type="text" id="type" v-model="type" />
        </div>
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="gender">Пол</label>
          <input class="animals__popup-input" type="text" id="gender" v-model="gender" />
        </div>
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="breed">Порода</label>
          <input class="animals__popup-input" type="text" id="breed" v-model="breed" />
        </div>
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="age">Возраст</label>
          <input class="animals__popup-input" type="number" id="age" v-model="age" value="0" />
        </div>
        <button class="animals__popup-btn animals__popup-btn--save" type="submit">Создать</button>
        <button class=" animals__popup-btn animals__popup-btn--cancel" type=" button"
          @click="closePopup">Отмена</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAnimalStore } from '@/store/AnimalStore.js';

export default {
  data() {
    return {
      name: '',
      description: '',
      type: '',
      gender: '',
      breed: '',
      age: '',
    }
  },

  props: {
    animals: {},
    user: {}
  },

  methods: {
    async createAnimal() {
      console.log('User data:', {
        name: this.name,
        description: this.description,
        type: this.type,
        gender: this.gender,
        breed: this.breed,
        age: this.age,
        userId: this.user.id
      })
      const animalStore = useAnimalStore()
      await animalStore.createAnimal({
        name: this.name,
        description: this.description,
        type: this.type,
        gender: this.gender,
        breed: this.breed,
        age: this.age,
        userId: this.user.id
      })
      animalStore.getAnimals(this.user.id)
      this.closePopup()
    },
  },

  setup(props) {
    const isOpen = ref(false);
    const animalStore = useAnimalStore();

    const openPopup = () => {
      isOpen.value = true;
    };
    const closePopup = () => {
      isOpen.value = false;
    };

    return {
      isOpen,
      openPopup,
      closePopup,
      // createAnimal,
    };
  },
};
</script>

<style lang="scss" scoped>
.stop--scroll {
  overflow: hidden;
}

.animals {

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

  // .animals__popup
  &__popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    overflow-y: auto;
  }

  // .panimals__popup-content
  &__popup-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    max-width: 473px;
    background-color: $white;
    padding: 30px;
    border-radius: 20px;
    // overflow-y: auto;
  }

  // .animals__popup-title
  &__popup-title {
    max-width: 413px;
    font-weight: 400;
    font-size: 32px;
    line-height: 110%;
    text-align: center;
    // color: $black;
  }

  // .animals__popup-form
  &__popup-form {
    margin-top: 30px;

  }

  // .animals__popup-item
  &__popup-item {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .animals__popup-label
  &__popup-label {
    margin-block: 7px;
  }

  // .animals__popup-input
  &__popup-input {
    // max-width: 413px;
    width: 100%;
    padding: 10px 17px;
    border: 1px solid $gray-border;
    border-radius: 80px;

    &:focus {
      outline: 1px solid $blue-main;
    }
  }

  // .animals__popup-btn
  &__popup-btn {
    // max-width: ;
    width: 100%;
    color: $white;
    padding: 10px 15px;
    border-radius: 80px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  // .animals__popup-btn--save
  &__popup-btn--save {
    background: $blue-main;
    margin: 15px 0;

    &:hover {
      background: $blue-second;
    }
  }

  // .animals__popup-btn--cancel
  &__popup-btn--cancel {
    color: $black-text;
    // background: $red;
    outline: 1px solid $blue-main;

    &:hover {
      outline: 1px solid $red;
    }
  }

}
</style>