<template>
  <button class="order-history__item-title btn-popup-menu" @click="openPopup">
    Заказ № {{ order.orderNumber }}
  </button>
  <transition name="popup-fade">
    <div class="popup-menu" v-if="isOpen">
      <div class="popup-menu__content">
        <h4 class="popup-menu__title"> Заказ № {{ order.orderNumber }}</h4>
        <div class="popup-menu__items">
          <div class="popup-menu__item" v-for="orderItems of order.orderItems" :key="orderItems.id">
            <div class="popup-menu__item-img">
              <img :src="orderItems.product.imgUrl" :alt="orderItems.product.name" />
            </div>
            <div class="popup-menu__item-content">
              <div class="popup-menu__item-title">{{ orderItems.product.name }}</div>
              <!-- <router-link :to="`/product/${orderItems.product.id}`" class="popup-menu__item-title">{{
                orderItems.product.name }}</router-link> -->

              <div class="popup-menu__item-price">
                {{ orderItems.product.price }} ₽
              </div>
              <div class="popup-menu__item-quantity">
                Количество: {{ orderItems.quantity }}
              </div>
            </div>
          </div>
        </div>
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

.popup-menu--open {
  overflow: hidden;
}

body .popup-menu--open {
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
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow-y: auto;

  // .popup-menu__content
  &__content {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 473px;
    width: 100%;
    // max-height: 500px;
    background-color: $white;
    padding: 30px;
    border-radius: 20px;
    // overflow-y: auto;
    z-index: 100;
  }

  // .popup-menu__title
  &__title {
    max-width: 413px;
    font-weight: 400;
    font-size: 32px;
    line-height: 110%;
    text-align: center;
    margin-bottom: 20px;
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
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .popup-menu__item-content
  &__item-content {
    display: flex;
    flex-direction: column;
  }

  // .popup-menu__item-title
  &__item-title {
    width: 50%;
  }

  // .popup-menu__item-price
  &__item-price {
    width: 50%;
  }

  // .popup-menu__item-quantity
  &__item-quantity {
    width: 50%;
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
    margin-top: 20px;

    &:hover {
      outline: 1px solid $red;
    }
  }

}
</style>