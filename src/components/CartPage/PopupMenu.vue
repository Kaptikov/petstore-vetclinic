<template>
  <button class="cart__aside-btn btn-popup-menu" @click="openPopup">
    Оформить заказ
  </button>
  <transition name="popup-fade">
    <div class="popup-menu" v-if="isOpen">
      <div class="popup-menu__content">
        <h4 class="popup-menu__title">Оформление заказа</h4>
        <form class="popup-menu__form">
          <div class="popup-menu__item">
            <label class="popup-menu-label" for="name">Имя*</label>
            <input class="popup-menu-input" type="text" id="name" required />

            <label class="popup-menu-label" for="lastname">Фамилия</label>
            <input class="popup-menu-input" type="text" id="lastname" />

            <label class="popup-menu-label" for="email">Email</label>
            <input class="popup-menu-input" type="email" id="email" />

            <label class="popup-menu-label" for="phone">Телефон*</label>
            <input class="popup-menu-input" type="tel" id="phone" placeholder="+7 (___) ___-__-__" required />
          </div>
          <button class="popup-menu__btn popup-menu__btn--save" type="submit">Оформить заказ</button>
          <button class="popup-menu__btn popup-menu__btn--cancel" type="button" @click="closePopup">Отмена</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/store/UserStore.js';

export default {
  props: {
    title: {},
    user: {},
    // editedUser: {},
  },
  setup(props) {
    const userStore = useUserStore();
    const isOpen = ref(false);
    const editedUser = ref({ ...props.user });
    console.log(editedUser);

    onMounted(() => {
      userStore.getUser();
    });

    const openPopup = () => {
      // userStore.getUser();
      editedUser.value = { ...props.user };
      isOpen.value = true;
      console.log(editedUser);
    };

    const closePopup = () => {
      isOpen.value = false;
    };

    const saveEdit = async () => {
      userStore.getUser();
    };

    return {
      isOpen,
      userStore,
      editedUser,
      openPopup,
      closePopup,
      saveEdit,
    };
  },
};
</script>

<style lang="scss">
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

.popup-fade-enter-active .popup-menu__content,
.popup-fade-leave-active .popup-menu__content {
  transition: all 0.3s ease-in-out;
}

.popup-fade-enter-active .popup-menu__content {
  transition-delay: 0.1s;
}

.popup-fade-enter-from .popup-menu__content,
.popup-fade-leave-to .popup-menu__content {
  transform: scale(0);
  // transform: scale3d(0.5, 0.5, 0.5);
  opacity: 0;
}

.stop--scroll {
  overflow: hidden;
}

// .btn-popup-menu
.btn-popup-menu {
  z-index: 3;
}

.popup-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  z-index: 100;

  // .popup-menu__content
  &__content {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    max-width: 473px;
    background-color: $white;
    padding: 30px;
    border-radius: 20px;
    overflow-y: auto;
    z-index: 100;
  }

  // .popup-menu__title
  &__title {
    max-width: 413px;
    font-weight: 400;
    font-size: 32px;
    line-height: 110%;
    text-align: center;
    // color: $black;
  }

  // .popup-menu__form
  &__form {
    margin-top: 30px;

  }

  // .popup-menu__item
  &__item {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .popup-menu__label
  &__label {
    margin-block: 7px;
  }

  // .popup-menu__input
  &__input {
    // max-width: 413px;
    width: 100%;
    padding: 10px 17px;
    border: 1px solid $gray-border;
    border-radius: 80px;

    &:focus {
      outline: 1px solid $blue-main;
    }
  }

  // .popup-menu__btn
  &__btn {
    // max-width: ;
    width: 100%;
    color: $white;
    padding: 10px 15px;
    border-radius: 80px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  // .popup-menu__btn--save
  &__btn--save {
    background: $blue-main;
    margin: 15px 0;

    &:hover {
      background: $blue-second;
    }
  }

  // .popup-menu__btn--cancel
  &__btn--cancel {
    color: $black-text;
    // background: $red;
    outline: 1px solid $blue-main;

    &:hover {
      outline: 1px solid $red;
    }
  }

}
</style>