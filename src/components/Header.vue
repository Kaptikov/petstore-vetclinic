<template>
  <header class="header" :class="{ 'header-second': isMainPage }">
    <div class="header__container _container">
      <div class="header__top" :class="{ 'header-second__top': isMainPage }">
        <a href="#" class="header__logo" :class="{ 'header-second__logo': isMainPage }" v-if="isMainPage">
          <img src="@/assets/img/logo.svg" alt="logo" />
        </a>
        <a href="#" class="header__logo" v-else>
          <img src="@/assets/img/header-logo-second.svg" alt="logo" />
        </a>
        <div class="header__text" :class="{ 'header-second__text': isMainPage }">
          Зоомагазин и груминг салон <br />
          в Нижневартовске
        </div>
        <button class="header__btn" :class="{ 'header-second__btn': isMainPage }">Запись на прием онлайн</button>
        <div class="header__socials header-socials">
          <a href="tel:+79999999999" class="header-socials__phone">
            +7 (982) 537-81-27
          </a>
          <a href="" class="header-socials__viber" :class="{ 'header-socials__viber--white': isMainPage }"
            v-if="isMainPage">
            <img src="@/assets/img/viber.svg" alt="viber" />
          </a>
          <a href="" class="header-socials__viber" v-else>
            <img src="@/assets/img/viber-blue.svg" alt="viber" />
          </a>
          <a href="" class="header-socials__vk" :class="{ 'header-socials__vk--white': isMainPage }" v-if="isMainPage">
            <img src="@/assets/img/vk.svg" alt="vk" />
          </a>
          <a href="" class="header-socials__vk" v-else>
            <img src="@/assets/img/vk-blue.svg" alt="vk" />
          </a>
        </div>
        <form action="" class="header__search header-search" :class="{ 'header-second__search': isMainPage }">
          <!-- <input class="header-search__btn" type="submit" value="Поиск" /> -->
          <button class="header-search__btn" :class="{ 'header-search__btn--white': isMainPage }"></button>
          <input class="header-search__input" :class="{ 'header__second-search__input': isMainPage }" type="search"
            placeholder="Поиск по каталогу" />
        </form>
      </div>
      <div class="header__bottom">
        <!-- <div class="header__dropdown header-dropdown">
          <button class="header-dropdown__btn">Каталог</button>
       <ul class="header-dropdown__menu">
            <li class="header-dropdown__item">
              <a class="header-dropdown__link" href="#">Для собак</a>
              <ul class="header-dropdown__submenu submenu">
                <li class="submenu__item">
                  <a class="submenu__link" href="#">Корм</a>
                </li>
                <li class="submenu__item">
                  <a class="submenu__link" href="#">Корм</a>
                </li>
                <li class="submenu__item">
                  <a class="submenu__link" href="#">Корм</a>
                </li>
                <li class="submenu__item">
                  <a class="submenu__link" href="#">Корм</a>
                </li>
              </ul>
            </li>
            <li class="header-dropdown__item">
              <a class="header-dropdown__link" href="#">Для кошек</a>
            </li>
            <li class="header-dropdown__item">
              <a class="header-dropdown__link" href="#">Для птиц</a>
            </li>
            <li class="header-dropdown__item">
              <a class="header-dropdown__link" href="#">Для грызунов</a>
            </li>
            <li class="header-dropdown__item">
              <a class="header-dropdown__link" href="#">Для рыбок</a>
            </li>
          </ul> 
        </div> -->
        <nav class="header__menu header-menu">
          <button @click="show = !show" class="header-dropdown__btn">Каталог</button>
          <ul class="header-menu__list">
            <li class="header-menu__item">
              <a class="header-menu__link" href="#">Акции</a>
            </li>
            <li class="header-menu__item">
              <a class="header-menu__link" href="#">Новинки</a>
            </li>
            <li class="header-menu__item">
              <a class="header-menu__link" href="#">Клиника</a>
            </li>
            <li class="header-menu__item">
              <a class="header-menu__link" href="#">Доставка</a>
            </li>
            <li class="header-menu__item">
              <a class="header-menu__link" href="#">Адреса магазинов</a>
            </li>
            <li class="header-menu__item">
              <a class="header-menu__link" href="#">Контакты</a>
            </li>
          </ul>
        </nav>
        <div class="header__user-actions">
          <a href="#" class="header__user-actions__favorites">
            <img src="@/assets/img/favorites.svg" alt="" />
          </a>
          <a href="#" class="header__user-actions__user">
            <img src="@/assets/img/user.svg" alt="" />
          </a>
          <a href="#" class="header__user-actions__cart">
            <img src="@/assets/img/cart.svg" alt="" />
          </a>
        </div>
        <transition name="slide-fade">
          <div v-if="show" class="header__dropdown header-dropdown">
            <div class="header-dropdown__menu dropdown-menu">
              <div class="dropdown-menu__item" v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                :class="{ 'active': activeTab === index }">
                <button class="dropdown-menu__btn">
                  {{ tab.title }}
                </button>
              </div>
            </div>
            <div class="header-dropdown__submenu dropdown-submenu" v-for="(tab, index) in tabs" :key="index"
              v-show="activeTab === index">
              <div class="dropdown-submenu__item" v-for="(content, contentIndex) in tab.content" :key="contentIndex">
                <a href="#" class="dropdown-submenu__link">
                  {{ content.link }}
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>

    </div>
  </header>
</template>

<script>
import { ref, computed } from 'vue'
import PopupMenu from '@/components/PopupMenu.vue';

import { useCategoryStore } from '@/store/CategoryStore';
import { useSubcategoryStore } from '@/store/SubcategoryStore';

export default {
  props: {
    isMainPage: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup() {
    const show = ref(false)
    const showOutline = computed(() => show.value)

    return {
      show,
      showOutline,
    }
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: 'Корм',
          content: [
            { link: 'Content for tab 1' },
            { link: 'Content for tab 2' },
            { link: 'Content for tab 3' },

          ]
        },
        {
          title: 'Игрушки',
          content: [
            { link: 'Content for tab 1' },
            { link: 'Content for tab 2' },
          ]
        },
        {
          title: 'Лежанки',
          content: [
            { link: 'Content for tab 1' }]
        },
        // { title: 'Игрушки', content: 'Content for tab 2' },
        // { title: 'Лежанки', content: 'Content for tab 3' },
      ],
    };
  },
}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  // width: 0%;
  opacity: 0;
}

.header {
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  color: $black-text;
  z-index: 5;

  // .header__container
  &__container {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  // .header__top
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $black-text;
  }

  // .header__logo
  &__logo {
    position: relative;
  }

  // .header__text
  &__text {
    position: relative;
    font-size: 11px;

    &::before {
      content: '';
      position: absolute;
      top: -9px;
      left: -12px;
      width: 1px;
      height: 40px;
      opacity: 20%;
      background: $black-text;
    }
  }

  // .header__btn
  &__btn {
    font-size: 15px;
    font-weight: 600;
    line-height: 120%;
    color: $blue-main;
    border: 2px solid $blue-main;
    border-radius: 66px;
    padding: 12px 22px;
    transition: border-color 0.2s, background 0.2s, color 0.2s;

    &:hover {
      border-color: $blue-main;
      background: $blue-main;
      color: $white;
    }
  }

  // .header__socials
  &__socials {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }

  // .header__search
  &__search {
    position: relative;
    max-width: 299px;
    width: 100%;
    // padding: 0 0 0 59px;
    background: $white;
    border-radius: 77px;
  }

  // .header__bottom
  &__bottom {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 31px;
    background: $white;
    border-radius: 56px;
  }

  //.header__dropdown
  &__dropdown {
    position: absolute;
    top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // flex-direction: row;
    // justify-content: space-between;
    padding: 15px 0;
    max-width: 477px;
    width: 100%;
    background: $white;
    border-radius: 20px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 100%;
      background: $gray-border;
    }
  }

  // .header__menu
  &__menu {
    display: flex;
    flex-grow: 1;
  }

  // .header__user-actions
  &__user-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 142px;
  }
}

.header__user-actions {
  &__favorites {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: -7px;
      right: -7px;
      width: 15px;
      height: 15px;
      background: $blue-main;
      border-radius: 50%;
    }
  }

  &__user {}

  &__cart {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: -5px;
      right: -7px;
      width: 15px;
      height: 15px;
      background: $blue-main;
      border-radius: 50%;
    }
  }
}

.header-socials {
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  gap: 10px;
  align-items: center;

  // .header-socials__phone
  &__phone {
    font-size: 16px;
    line-height: 120%;
  }

  // .header-socials__viber
  &__viber {}

  // .header-socials__vk
  &__vk {}

  &__vk,
  &__viber {
    background: none;
    border-radius: 50%;
    padding: 8px;
    transition: background 0.2s;

    &:hover {
      background: $white;
    }
  }

  &__vk--white,
  &__viber--white {
    background: rgba(255, 255, 255, 0.2);


    &:hover {
      background: $blue-second;
    }
  }
}

.header-search {

  // .header-search__btn
  &__btn {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: url('../assets/img/search-second.svg') no-repeat 100%;
  }

  &__btn--white {
    background: url('../assets/img/search.svg') no-repeat 100%;
  }

  // .header-search__input
  &__input {
    font-size: 16px;
    background: none;
    padding: 12px 20px 9px 59px;
    width: 100%;
    color: $black-text;

    &::placeholder {
      color: #A9A9A9;
    }

    &:focus {
      border: none;
      outline: none;
    }

    &::-ms-clear {
      display: none;
    }

    &::-webkit-search-cancel-button {
      display: none;
    }
  }
}

.header-dropdown {

  // .header-dropdown__btn
  &__btn {
    font-size: 16px;
    color: $white;
    background: $blue-main;
    border-radius: 61px;
    padding: 17px 70px 14px 20px;
    position: relative;
    transition: background 0.2s;

    &:hover {
      background: $blue-second;
    }

    &::after {
      content: '';
      position: absolute;
      top: 14px;
      right: 20px;
      // transform: translateY(-50%);
      width: 24px;
      height: 24px;
      background: url('../assets/img/menu.svg') no-repeat 100%;
    }
  }

  // .header-dropdown__menu
  &__menu {
    display: flex;
    flex-direction: column;
  }

  // .header-dropdown__submenu
  &__submenu {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

  }

  // .header-dropdown__item
  &__item {
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
  }

  // .header-dropdown__link
  &__link {
    display: block;
    padding: 10px 20px;

    &:hover {
      background-color: $blue-bg-second;
    }
  }
}

.dropdown-menu {

  // .dropdown-menu__item
  &__item {}

  &__item.active {
    .dropdown-menu__btn {
      background-color: $blue-bg-third;
    }
  }

  // .dropdown-menu__link
  &__btn {
    display: block;
    padding: 10px 0 10px 20px;
    text-align: start;
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;

    &:hover {
      background-color: $blue-bg-third;

    }
  }
}

.dropdown-submenu {

  // .dropdown-menu__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .dropdown-menu__link
  &__link {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: $silver-text;

  }
}

.header-menu {

  // .header-menu__list-categories
  &__list-categories {}

  // .header-menu__item
  &__item {}

  // .header-menu__link
  &__link {}

  // .header-menu__list
  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    margin-left: 25px;
    font-size: 15px;
    color: $silver-text;
  }
}

.submenu {}

.header-second {
  &__top {
    color: $white;
  }

  &__text {
    &::before {
      background: $white;
    }
  }

  &__logo {}

  &__search {
    background: rgba(255, 255, 255, 0.2);
  }

  &__btn {
    border: 2px solid $white;

    color: $white;
    transition: border-color 0.2s, background 0.2s, ;

    &:hover {
      border-color: $blue-second;
      background: $blue-second;
    }
  }
}

.header__second-search {
  &__input {
    color: $white;

    &::placeholder {
      color: $white;
    }
  }
}

@media (max-width: 996px) {
  .header {
    display: none;
  }
}
</style>
