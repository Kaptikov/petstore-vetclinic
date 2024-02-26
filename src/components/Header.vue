<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__top">
        <a href="#" class="header__logo">
          <img src="@/assets/img/logo.svg" alt="logo" />
        </a>
        <div class="header__text">
          Зоомагазин и груминг салон <br />
          в Нижневартовске
        </div>
        <button class="header__btn">Запись на прием онлайн</button>
        <div class="header__socials header-socials">
          <a href="tel:+79999999999" class="header-socials__phone">
            +7 (982) 537-81-27
          </a>
          <a href="" class="header-socials__viber">
            <img src="@/assets/img/viber.svg" alt="viber" />
          </a>
          <a href="" class="header-socials__vk">
            <img src="@/assets/img/vk.svg" alt="vk" />
          </a>
        </div>
        <form action="" class="header__search header-search">
          <!-- <input class="header-search__btn" type="submit" value="Поиск" /> -->
          <div class="header-search__btn"></div>
          <input class="header-search__input" type="search" placeholder="Поиск по каталогу" />
        </form>
      </div>
      <div class="header__bottom">
        <div class="header__dropdown header-dropdown">
          <button class="header-dropdown__btn">Каталог</button>
          <ul class="header-dropdown__list">
            <li class="header-dropdown__item">
              <a class="header-dropdown__link" href="#">Для собак</a>
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
        </div>
        <nav class="header__menu header-menu">
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
      </div>
    </div>
  </header>
</template>
<script>
import PopupMenu from '@/components/PopupMenu.vue';

export default {

}
</script>
<style lang="scss">
.header {
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
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
    color: $white;
  }

  // .header__logo
  &__logo {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0px;
      right: -12px;
      width: 1px;
      height: 100%;
      opacity: 20%;
      background: #fff;
    }
  }

  // .header__text
  &__text {
    font-size: 11px;
  }

  // .header__btn
  &__btn {
    font-size: 15px;
    border: 2px solid $white;
    border-radius: 66px;
    padding: 12px 22px;
    transition: border-color 0.2s, background 0.2s;

    &:hover {
      border-color: $blue-second;
      background: $blue-second;
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
    background: rgba(255, 255, 255, 0.2);
    border-radius: 77px;
  }

  // .header__bottom
  &__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 31px;
    background: $white;
    border-radius: 56px;
  }

  // .header__dropdown
  &__dropdown {}

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
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    padding: 8px;
    transition: background 0.2s;

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
    background: url('../assets/img/search.svg') no-repeat 100%;
  }

  // .header-search__input
  &__input {
    font-size: 16px;
    background: none;
    padding: 12px 20px 9px 59px;
    width: 100%;
    color: $white;

    &::placeholder {
      color: $white;
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

  // .header-dropdown__list
  &__list {
    display: none;
  }

  // .header-dropdown__item
  &__item {}

  // .header-dropdown__link
  &__link {}
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

@media (max-width: 996px) {
  .header {
    display: none;
  }
}
</style>
