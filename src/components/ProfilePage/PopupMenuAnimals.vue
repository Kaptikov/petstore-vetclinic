<template>
  <button class="animals__btn-popup" @click="openPopup">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 14.2501V18.0001H3.75L14.81 6.94006L11.06 3.19006L0 14.2501ZM17.71 4.04006C18.1 3.65006 18.1 3.02006 17.71 2.63006L15.37 0.290059C14.98 -0.0999414 14.35 -0.0999414 13.96 0.290059L12.13 2.12006L15.88 5.87006L17.71 4.04006Z"
        fill="currentColor" />
    </svg>
  </button>
  <div class="animals__popup" v-if="isOpen">
    <div class="animals__popup-content">
      <h2 class="animals__popup-title">Редактирование данных питомца</h2>
      <form class="animals__popup-form" @submit.prevent="saveEdit">
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="name">Имя питомца</label>
          <input class="animals__popup-input" type="text" id="name" v-model="editedAnimal.name" />
        </div>
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="type">Тип</label>
          <input class="animals__popup-input" type="text" id="type" v-model="editedAnimal.type" />
        </div>
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="gender">Пол</label>
          <input class="animals__popup-input" type="text" id="gender" v-model="editedAnimal.gender" />
        </div>
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="breed">Порода</label>
          <input class="animals__popup-input" type="text" id="breed" v-model="editedAnimal.breed" />
        </div>
        <div class="animals__popup-item">
          <label class="animals__popup-label" for="age">Возраст</label>
          <input class="animals__popup-input" type="text" id="age" v-model="editedAnimal.age" />
        </div>
        <button class="animals__popup-btn animals__popup-btn--save" type="submit">Сохранить</button>
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
  props: {
    animals: {},
    id: {},
  },
  setup(props) {
    const isOpen = ref(false);
    const editedAnimal = ref({ ...props.animals });
    // console.log(editedAnimal);
    const animalStore = useAnimalStore();

    const openPopup = () => {
      editedAnimal.value = { ...props.animals };
      isOpen.value = true;
      console.log(editedAnimal);
    };

    const closePopup = () => {
      isOpen.value = false;
    };

    const saveEdit = async () => {
      // await userStore.updateUser(props.user.id, props.user.name, props.user.lastname, props.user.email, props.user.phone);
      await animalStore.updateAnimal(editedAnimal.value.id, editedAnimal.value.name, editedAnimal.value.type, editedAnimal.value.gender, editedAnimal.value.breed, editedAnimal.value.age);
      closePopup();
      animalStore.getAnimals(props.animals.userId);
    };

    return {
      isOpen,
      editedAnimal,
      openPopup,
      closePopup,
      saveEdit,
    };
  },
};
</script>

<style lang="scss" scoped>
.stop--scroll {
  overflow: hidden;
}

.animals {

  // .animals__btn-popup
  &__btn-popup {
    position: absolute;
    top: 30px;
    right: 30px;
    color: $blue-main;
    transition: color 0.2s ease-in-out;
    z-index: 2;

    &:hover {
      color: $blue-second;
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