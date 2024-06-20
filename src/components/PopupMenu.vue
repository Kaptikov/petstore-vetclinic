<template>
  <button class="header__btn btn-header__popup" @click="openPopup" :class="{ 'header-second__btn': isMainPage }">
    Запись на прием онлайн
  </button>
  <transition name="popup-fade">
    <div class="header__popup-menu header-popup" v-if="isOpen">
      <div class="header-popup__content">
        <h4 class="header-popup__title">Запись на прием</h4>
        <p class="header-popup__text">Оставьте свои контакты и мы обсудим все детали!</p>
        <form class="header-popup__form">
          <div class="header-popup__item">
            <label class="header-popup__label" for="name">Имя*</label>
            <input class="header-popup__input" type="text" id="name" v-model="requestStore.requests.name" required />

            <label class="header-popup__label" for="phone">Телефон*</label>
            <!-- <input class="header-popup__input" type="tel" id="phone" placeholder="+7 (___) ___-__-__"
              v-model="requestStore.requests.phone" required /> -->
            <input class="header-popup__input" type="tel" id="phone" :placeholder="maskPhone"
              v-model="requestStore.requests.phone" @input="formatPhone" required />

            <label class="header-popup__label" for="name">Описание</label>
            <textarea class="header-popup__input" type="text" id="name" v-model="requestStore.requests.description"
              required />
          </div>
          <button class="header-popup__btn header-popup__btn--save" type="submit"
            @click.prevent="btnAddRequest(requestStore.requests.name, requestStore.requests.phone, requestStore.requests.description)">
            Оставить заявку
          </button>
        </form>
        <div class="header-popup__privocy-policy">
          Нажимая на кнопку “Заказать расчёт” я соглашаюсь на
          <a href="" class="header-popup__link">обработку персонал ьных данных</a>
          и соглашаюсь с
          <a href="" class="header-popup__link">политикой конфиденциальности</a>
        </div>
        <button class="header-popup__btn header-popup__btn--cancel" type="button" @click="closePopup">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.64395 6.99989L13.6606 1.99489C13.8803 1.7752 14.0037 1.47724 14.0037 1.16656C14.0037 0.855872 13.8803 0.557912 13.6606 0.338224C13.4409 0.118537 13.143 -0.00488281 12.8323 -0.00488281C12.5216 -0.00488281 12.2236 0.118537 12.004 0.338224L6.99895 5.35489L1.99395 0.338224C1.77426 0.118537 1.4763 -0.00488281 1.16562 -0.00488281C0.854934 -0.00488281 0.556973 0.118537 0.337286 0.338224C0.117598 0.557912 -0.00582146 0.855872 -0.00582147 1.16656C-0.00582147 1.47724 0.117598 1.7752 0.337286 1.99489L5.35395 6.99989L0.337286 12.0049C0.227936 12.1133 0.141143 12.2424 0.0819125 12.3846C0.0226824 12.5267 -0.0078125 12.6792 -0.0078125 12.8332C-0.0078125 12.9872 0.0226824 13.1397 0.0819125 13.2819C0.141143 13.4241 0.227936 13.5531 0.337286 13.6616C0.445742 13.7709 0.574777 13.8577 0.716946 13.9169C0.859115 13.9762 1.01161 14.0067 1.16562 14.0067C1.31963 14.0067 1.47212 13.9762 1.61429 13.9169C1.75646 13.8577 1.8855 13.7709 1.99395 13.6616L6.99895 8.64489L12.004 13.6616C12.1124 13.7709 12.2414 13.8577 12.3836 13.9169C12.5258 13.9762 12.6783 14.0067 12.8323 14.0067C12.9863 14.0067 13.1388 13.9762 13.281 13.9169C13.4231 13.8577 13.5522 13.7709 13.6606 13.6616C13.77 13.5531 13.8568 13.4241 13.916 13.2819C13.9752 13.1397 14.0057 12.9872 14.0057 12.8332C14.0057 12.6792 13.9752 12.5267 13.916 12.3846C13.8568 12.2424 13.77 12.1133 13.6606 12.0049L8.64395 6.99989Z"
              fill="currentColor" />
          </svg>
        </button>
      </div>

      <!-- <transition name="popup-fade">
        <div class="header-popup__content">
          <h4 class="header-popup__title">Заявка отправлена</h4>
          <p class="header-popup__text">Оставьте свои контакты и мы обсудим все детали!</p>
          <button class="header-popup__btn header-popup__btn--save" type="submit" @click.prevent="closePopup">>
            Понятно
          </button>

          <button class="header-popup__btn header-popup__btn--cancel" type="button" @click="closePopup">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.64395 6.99989L13.6606 1.99489C13.8803 1.7752 14.0037 1.47724 14.0037 1.16656C14.0037 0.855872 13.8803 0.557912 13.6606 0.338224C13.4409 0.118537 13.143 -0.00488281 12.8323 -0.00488281C12.5216 -0.00488281 12.2236 0.118537 12.004 0.338224L6.99895 5.35489L1.99395 0.338224C1.77426 0.118537 1.4763 -0.00488281 1.16562 -0.00488281C0.854934 -0.00488281 0.556973 0.118537 0.337286 0.338224C0.117598 0.557912 -0.00582146 0.855872 -0.00582147 1.16656C-0.00582147 1.47724 0.117598 1.7752 0.337286 1.99489L5.35395 6.99989L0.337286 12.0049C0.227936 12.1133 0.141143 12.2424 0.0819125 12.3846C0.0226824 12.5267 -0.0078125 12.6792 -0.0078125 12.8332C-0.0078125 12.9872 0.0226824 13.1397 0.0819125 13.2819C0.141143 13.4241 0.227936 13.5531 0.337286 13.6616C0.445742 13.7709 0.574777 13.8577 0.716946 13.9169C0.859115 13.9762 1.01161 14.0067 1.16562 14.0067C1.31963 14.0067 1.47212 13.9762 1.61429 13.9169C1.75646 13.8577 1.8855 13.7709 1.99395 13.6616L6.99895 8.64489L12.004 13.6616C12.1124 13.7709 12.2414 13.8577 12.3836 13.9169C12.5258 13.9762 12.6783 14.0067 12.8323 14.0067C12.9863 14.0067 13.1388 13.9762 13.281 13.9169C13.4231 13.8577 13.5522 13.7709 13.6606 13.6616C13.77 13.5531 13.8568 13.4241 13.916 13.2819C13.9752 13.1397 14.0057 12.9872 14.0057 12.8332C14.0057 12.6792 13.9752 12.5267 13.916 12.3846C13.8568 12.2424 13.77 12.1133 13.6606 12.0049L8.64395 6.99989Z"
                fill="currentColor" />
            </svg>
          </button>
        </div>
      </transition> -->
    </div>
  </transition>

</template>

<script>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/store/UserStore.js';
import { useRequestStore } from '@/store/RequestStore.js';

export default {
  props: {
    title: {},
    user: {},
    isMainPage: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup(props) {
    const userStore = useUserStore();
    const requestStore = useRequestStore();
    const isOpen = ref(false);
    const maskPhone = "+7 (___) ___ - __ - __";
    const formatPhone = (event) => {
      let input = event.target.value.replace(/\D/g, '').slice(0, 11);
      let maskedPhone = '+7 (' + input.slice(1, 4) + ') ' + input.slice(4, 7) + '-' + input.slice(7, 9) + '-' + input.slice(9, 11);
      requestStore.requests.phone = maskedPhone;
    }
    // const editedUser = ref({ ...props.user });
    // console.log(editedUser);

    onMounted(() => {

      // userStore.getUser();
    });

    const openPopup = () => {
      // userStore.getUser();
      // editedUser.value = { ...props.user };
      isOpen.value = true;
      document.body.classList.add('popup-menu--open');
      // console.log(editedUser);
    };

    const closePopup = () => {
      isOpen.value = false;
      requestStore.requests.name = '';
      requestStore.requests.phone = '';
      requestStore.requests.description = '';
      document.body.classList.remove('popup-menu--open');
    };

    function btnAddRequest(name, phone, description) {
      requestStore.addRequest(name, phone, description)
      closePopup()
    }

    // const saveEdit = async () => {
    //   userStore.getUser();
    // };

    // onMounted(() => {
    //   requestStore.getRequests();
    // })

    return {
      isOpen,
      userStore,
      requestStore,
      btnAddRequest,
      openPopup,
      closePopup,
      maskPhone,
      formatPhone
      // saveEdit,
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

.popup-fade-enter-active .header-popup__content,
.popup-fade-leave-active .header-popup__content {
  transition: all 0.3s ease-in-out;
}

.popup-fade-enter-active .header-popup__content {
  transition-delay: 0.1s;
}

.popup-fade-enter-from .header-popup__content,
.popup-fade-leave-to .header-popup__content {
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

// .btn-header-popup__
.btn-header-popup {
  z-index: 3;
}

.header-popup {
  position: fixed;
  top: -25px;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  // justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  z-index: 100;

  // .header-popup__content
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 473px;
    color: $black-text;
    background-color: $white;
    padding: 30px;
    border-radius: 20px;
    overflow-y: auto;
    z-index: 100;
  }

  // .header-popup__title
  &__title {
    max-width: 413px;
    font-weight: 400;
    font-size: 32px;
    line-height: 110%;
    text-align: center;
    margin-bottom: 10px;
  }

  // .header-popup__text
  &__text {
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    text-align: center;
  }

  // .header-popup__form
  &__form {
    margin-top: 30px;

  }

  // .header-popup__item
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

  // .header-popup__label
  &__label {
    margin-block: 7px;
  }

  // .header-popup__input
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

  // .header-popup__privocy-policy
  &__privocy-policy {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    text-align: center;
    color: $gray-text;
  }

  // .header-popup__link
  &__link {
    color: $blue-main;
  }

  // .header-popup__btn
  &__btn {
    // max-width: ;
    width: 100%;
    color: $white;
    padding: 10px 15px;
    border-radius: 80px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  // .header-popup__btn--save
  &__btn--save {
    background: $blue-main;
    margin: 15px 0;

    &:hover {
      background: $blue-second;
    }
  }

  // .header-popup__btn--cancel
  &__btn--cancel {
    position: absolute;
    top: 17px;
    right: 17px;
    width: 14px;
    height: 14px;
    padding: 0;
    color: $gray-text;
    background: transparent;
    // outline: 1px solid $blue-main;

    &:hover {
      // outline: 1px solid $red;
      color: $red;
    }
  }

}

@media (max-width: 768px) {
  .header__btn {
    display: none;
  }

}
</style>