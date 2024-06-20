<template>
  <button class="orders-card__title btn-popup-menu" @click="openPopup">
    Заказ № {{ order.orderNumber }}
  </button>
  <transition name="popup-fade">
    <div class="popup-menu" :class="{ 'popup-menu--open': isOpen }" v-if="isOpen">
      <div class="popup-menu__content">
        <h4 class="popup-menu__title"> Заказ № {{ order.orderNumber }}</h4>
        <div class="popup-menu__items">
          <div class="popup-menu__item" v-for="orderItems of order.orderItems" :key="orderItems.id">
            <div class="popup-menu__item-img">
              <img :src="orderItems.product.imgUrl" :alt="orderItems.product.name" />
            </div>
            <div class="popup-menu__item-text">
              <div class="popup-menu__item-title">{{ orderItems.product.name }}</div>
              <div class="popup-menu__item-price">
                {{ orderItems.product.price }} ₽
              </div>
              <div class="popup-menu__item-quantity">
                Количество: {{ orderItems.quantity }}
              </div>
            </div>
          </div>

        </div>
        <!-- <button class="popup-menu__btn popup-menu__btn--save" type="submit">Оформить заказ</button> -->
        <button class="popup-menu__btn popup-menu__btn--cancel" type="button" @click="closePopup">Закрыть</button>
      </div>
    </div>
  </transition>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/store/UserStore.js';

export default {
  props: {
    order: {},
  },
  setup(props) {
    // const userStore = useUserStore();
    const isOpen = ref(false);
    // const editedUser = ref({ ...props.user });
    // console.log(editedUser);

    // onMounted(() => {
    //   userStore.getUser();
    // });

    const openPopup = () => {
      // userStore.getUser();
      // editedUser.value = { ...props.user };
      document.body.classList.add('popup-menu--open');
      isOpen.value = true;
    };

    const closePopup = () => {
      document.body.classList.remove('popup-menu--open');
      isOpen.value = false;
    };

    // const saveEdit = async () => {
    //   userStore.getUser();
    // };

    return {
      isOpen,
      openPopup,
      closePopup,
    };
  },
};
</script>

<style lang="scss">
.popup-menu--open {
  overflow: hidden;
}

body .popup-menu--open {
  overflow: hidden;
}

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
    flex-direction: row;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .popup-menu__item-img
  &__item-img {
    max-width: 120px;
    width: 100%;
    margin-right: 20px;
    // height: 120px;

    // margin-bottom: 20px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  // .popup-menu__item-text
  &__item-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  // .popup-menu__item-title
  &__item-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    margin-bottom: 5px;
  }

  // .popup-menu__item-price
  &__item-price {
    font-size: 18px;
    line-height: 120%;
    margin-bottom: 5px;
    color: $blue-main;
  }

  // .popup-menu__item-quantity
  &__item-quantity {
    font-size: 18px;
    line-height: 120%;
    margin-bottom: 5px;
    white-space: nowrap;
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