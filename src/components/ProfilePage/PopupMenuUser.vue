<template>
  <button class="personal-data__btn-popup" @click="openPopup">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 14.2501V18.0001H3.75L14.81 6.94006L11.06 3.19006L0 14.2501ZM17.71 4.04006C18.1 3.65006 18.1 3.02006 17.71 2.63006L15.37 0.290059C14.98 -0.0999414 14.35 -0.0999414 13.96 0.290059L12.13 2.12006L15.88 5.87006L17.71 4.04006Z"
        fill="currentColor" />
    </svg>
  </button>
  <transition name="popup-scale">
    <div class="personal-data__popup" v-if="isOpen">
      <div class="personal-data__popup-content popup__content">
        <h2 class="personal-data__popup-title">Редактирование данных пользователя</h2>
        <form class="personal-data__popup-form" @submit.prevent="saveEdit">
          <div class="personal-data__popup-item">
            <label class="personal-data__popup-label" for="name">Имя</label>
            <input class="personal-data__popup-input" type="text" id="name" v-model="editedUser.name" />
          </div>
          <div class="personal-data__popup-item">
            <label class="personal-data__popup-label" for="lastname">Фамилия</label>
            <input class="personal-data__popup-input" type="text" id="lastname" v-model="editedUser.lastname" />
          </div>
          <div class="personal-data__popup-item">
            <label class="personal-data__popup-label" for="email">Email</label>
            <input class="personal-data__popup-input" type="email" id="email" v-model="editedUser.email" />
          </div>
          <div class="personal-data__popup-item">
            <label class="personal-data__popup-label" for="phone">Телефон</label>
            <!-- <input class="personal-data__popup-input" type="tel" id="phone" v-model="editedUser.phone"
              placeholder="+7 (___) ___ - __ - __" /> -->
            <input class="personal-data__popup-input" type="tel" id="phone" v-model="editedUser.phone"
              :placeholder="maskPhone" @input="formatPhone" />
          </div>
          <button class="personal-data__popup-btn personal-data__popup-btn--save" type="submit">Сохранить</button>
          <button class=" personal-data__popup-btn personal-data__popup-btn--cancel" type=" button"
            @click="closePopup">Отмена</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '@/store/UserStore.js';

export default {

  props: {
    user: {},
  },



  setup(props) {
    const isOpen = ref(false);
    const editedUser = ref({ ...props.user });
    console.log(editedUser);
    const userStore = useUserStore();
    const maskPhone = "+7 (___) ___ - __ - __";

    const formatPhone = (event) => {
      let input = event.target.value.replace(/\D/g, '').slice(0, 11);
      let maskedPhone = '+7 (' + input.slice(1, 4) + ') ' + input.slice(4, 7) + '-' + input.slice(7, 9) + '-' + input.slice(9, 11);
      editedUser.value.phone = maskedPhone;
    }

    const openPopup = () => {
      editedUser.value = { ...props.user };
      document.body.classList.add('popup-menu--open');
      isOpen.value = true;
    };

    const closePopup = () => {
      isOpen.value = false;
      document.body.classList.remove('popup-menu--open');
    };

    const saveEdit = async () => {
      // await userStore.updateUser(props.user.id, props.user.name, props.user.lastname, props.user.email, props.user.phone);
      await userStore.updateUser(editedUser.value.id, editedUser.value.name, editedUser.value.lastname, editedUser.value.email, editedUser.value.phone);
      closePopup();
      userStore.getUser();
    };

    return {
      isOpen,
      editedUser,
      openPopup,
      closePopup,
      saveEdit,
      maskPhone,
      formatPhone,
    };
  },
};
</script>

<style lang="scss" scoped>
// .stop--scroll {
//   overflow: hidden;
// }

.popup-scale-enter-active {
  transition: all 0.3s ease-out;
}

.popup-scale-enter-active {
  // transition: opacity 0.3s ease-out;
  transition-delay: 0.1s;
}

.popup-scale-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.popup-scale-enter-from,
.popup-scale-leave-to {
  // transform: scale(0.8);
  opacity: 0;
}

.popup-scale-enter-active .personal-data__popup-content,
.popup-scale-leave-active .personal-data__popup-content {
  transition: all 0.3s ease-in-out;
}

.popup-scale-enter-active .personal-data__popup-content {
  transition-delay: 0.1s;
}

.popup-scale-enter-from .personal-data__popup-content,
.popup-scale-leave-to .personal-data__popup-content {
  transform: scale(0.1);
  // transform: scale3d(0.5, 0.5, 0.5);
  opacity: 0;
}

.popup-menu--open {
  overflow: hidden;
}

body .popup-menu--open {
  overflow: hidden;
}

.personal-data {

  // .personal-data__btn-popup
  &__btn-popup {
    z-index: 1;
  }

  // .personal-data__popup
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

  // .ppersonal-data__popup-content
  &__popup-content {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
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

  // .personal-data__popup-title
  &__popup-title {
    max-width: 413px;
    font-weight: 400;
    font-size: 32px;
    line-height: 110%;
    text-align: center;
    // color: $black;
  }

  // .personal-data__popup-form
  &__popup-form {
    margin-top: 30px;

  }

  // .personal-data__popup-item
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

  // .personal-data__popup-label
  &__popup-label {
    margin-block: 7px;
  }

  // .personal-data__popup-input
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

  // .personal-data__popup-btn
  &__popup-btn {
    // max-width: ;
    width: 100%;
    color: $white;
    padding: 10px 15px;
    border-radius: 80px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  // .personal-data__popup-btn--save
  &__popup-btn--save {
    background: $blue-main;
    margin: 15px 0;

    &:hover {
      background: $blue-second;
    }
  }

  // .personal-data__popup-btn--cancel
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