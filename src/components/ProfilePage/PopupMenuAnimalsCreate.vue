<template>
  <button class="animals__btn-create btn-create" @click="openPopup">
    <img class="btn-create__icon" src="@/assets/img/i_newpet.svg" alt="">
    <span class="btn-create__text">Добавить нового питомца</span>
  </button>
  <transition name="popup-fade">
    <div class="animals__popup" v-if="isOpen">
      <div class="animals__popup-content">
        <h2 class="animals__popup-title">Редактирование данных питомца</h2>
        <form class="animals__popup-form" @submit.prevent="createAnimal">
          <div class="animals__popup-item">
            <label class="animals__popup-label" for="name">Имя питомца</label>
            <input class="animals__popup-input" type="text" id="name" v-model="name" required />
          </div>
          <div class="animals__popup-item">
            <label class="animals__popup-label" for="name">Описание</label>
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
            <input class="animals__popup-input" type="number" id="age" value="0" v-model="age" required />
          </div>
          <button class="animals__popup-btn animals__popup-btn--save" type="submit"
            @click="btnAddAnimal(name, description, type, gender, breed, age, user.id)">Создать</button>
          <button class=" animals__popup-btn animals__popup-btn--cancel" type=" button"
            @click="closePopup">Отмена</button>
        </form>
      </div>

    </div>
  </transition>
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
      age: 0,
    }
  },

  props: {
    animals: {},
    user: {}
  },

  methods: {
    // async createAnimal() {
    //   console.log('User data:', {
    //     name: this.name,
    //     description: this.description,
    //     type: this.type,
    //     gender: this.gender,
    //     breed: this.breed,
    //     age: this.age,
    //     userId: this.user.id
    //   })
    //   const animalStore = useAnimalStore()
    //   await animalStore.createAnimal({
    //     name: this.name,
    //     description: this.description,
    //     type: this.type,
    //     gender: this.gender,
    //     breed: this.breed,
    //     age: this.age,
    //     userId: this.user.id
    //   })
    //   animalStore.getAnimals(this.user.id)
    //   this.closePopup()
    // },
  },

  setup(props) {
    const isOpen = ref(false);
    const animalStore = useAnimalStore();

    const openPopup = () => {
      document.body.classList.add('popup-menu--open');
      isOpen.value = true;
    };
    const closePopup = () => {
      document.body.classList.remove('popup-menu--open');
      isOpen.value = false;
    };

    function btnAddAnimal(name, description, type, gender, breed, age, userId) {
      animalStore.addAnimal(name, description, type, gender, breed, age, userId)
      closePopup();
    }

    return {
      isOpen,
      openPopup,
      closePopup,
      btnAddAnimal,
      animalStore,
      // createAnimal,
    };
  },
};
</script>

<style lang="scss" scoped>
.popup-fade-enter-active {
  transition: all 0.3s ease-out;
}

.popup-fade-enter-active {
  // transition: opacity 0.3s ease-out;
  transition-delay: 0.1s;
}

.popup-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  // transform: scale(0.8);
  opacity: 0;
}

.popup-fade-enter-active .animals__popup-content,
.popup-fade-leave-active .animals__popup-content {
  transition: all 0.3s ease-in-out;
}

.popup-fade-enter-active .animals__popup-content {
  transition-delay: 0.1s;
}

.popup-fade-enter-from .animals__popup-content,
.popup-fade-leave-to .animals__popup-content {
  transform: scale(0);
  // transform: scale3d(0.5, 0.5, 0.5);
  opacity: 0;
}

.stop--scroll {
  overflow: hidden;
}

.popup-menu--open {
  overflow: hidden;
}

body .popup-menu--open {
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
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    overflow-y: auto;
  }

  // .panimals__popup-content
  &__popup-content {
    margin: auto;
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