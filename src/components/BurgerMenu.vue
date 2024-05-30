<template>
  <div class="header__burger-menu burger-menu">
    <div class="burger-menu__top">
      <div class="burger-menu__logo">
        <router-link to="/"><img src="@/assets/img/logo.svg" alt="petstore-vetclinic" /></router-link>
      </div>
      <a href="tel:+79999999999" class="burger-menu__tel">+7 (982) 537-81-27</a>
      <button class="burger-menu__close" @click="$emit('close')">
      </button>
      <!-- <div class="burger-menu__top__line"></div> -->
    </div>
    <div class="burger-menu__middle">
      <ul class="burger-menu__list">
        <li class="burger-menu__item">
          <a to="/catalog" class="burger-menu__link" @click="showSubmenu = !showSubmenu">Каталог</a>
          <transition name="slide-fade">
            <ul class="burger-menu__sublist" v-if="showSubmenu">
              <li class="burger-menu__subitem" v-for="category in category" :key="category.id">
                <router-link :to="`/catalog/${category.id}`" class="burger-menu__sublink">{{ category.name
                  }}</router-link>
              </li>
            </ul>
          </transition>
        </li>
        <li class="burger-menu__item">
          <router-link to="/catalog" class="burger-menu__link">Акции</router-link>
        </li>
        <li class="burger-menu__item">
          <router-link to="/catalog" class="burger-menu__link">Новинки</router-link>
        </li>
        <li class="burger-menu__item">
          <router-link to="/catalog" class="burger-menu__link">Клиника</router-link>
        </li>
        <li class="burger-menu__item">
          <router-link to="/catalog" class="burger-menu__link">Доставка</router-link>
        </li>
        <li class="burger-menu__item">
          <router-link to="/catalog" class="burger-menu__link">Адреса магазинов</router-link>
        </li>
        <li class="burger-menu__item">
          <router-link to="/catalog" class="burger-menu__link">Контакты</router-link>
        </li>
      </ul>
    </div>
    <div class="burger-menu__bottom">
      <div class="burger-menu__socials">
        <a href="tel:+79999999999" class="burger-menu__tel">+7 (982) 537-81-27</a>
        <a href="#" class="burger-menu__viber"><img src="@/assets/img/viber.svg" alt="viber" /></a>
        <a href="#" class="burger-menu__vk"><img src="@/assets/img/vk.svg" alt="vk" /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    category: {
      type: Object,
    },
  },
  setup() {
    const showSubmenu = ref(false)

    return {
      showSubmenu
    }
  }

}
</script>

<style lang="scss">
.header {

  // .header__burger-menu
  &__burger-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -25px;
    left: 0;
    padding: 17px 20px 114px 20px;
    // padding-bottom: 50px;
    width: 100%;
    height: 100vh;
    color: $white;
    background: $blue-bg-second;
    overflow-y: auto;
    z-index: 5;
    transition: 0.3s ease-in-out;
  }
}

.burger-menu {

  // .burger-menu__top
  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  // .burger-menu__logo
  &__logo {}

  // .burger-menu__tel
  &__tel {
    // font-weight: 600;
    font-size: 15px;
    line-height: 120%;
    white-space: nowrap;
  }

  // .burger-menu__close
  &__close {
    cursor: pointer;
    position: relative;
    width: 34px;
    height: 34px;
    // padding: 11px;
    border-radius: 8px;
    background: $blue-main;
    transition: 0.3s ease-in-out;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 18px;
      height: 2px;
      border-radius: 8px;
      background: $white;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 18px;
      height: 2px;
      border-radius: 8px;
      background: $white;
      transform: translate(-50%, -50%) rotate(-45deg);
    }

  }

  // .burger-menu__middle
  &__middle {
    width: 100%;
    margin-bottom: 86px;
  }

  // .burger-menu__list
  &__list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  // .burger-menu__item
  &__item {
    position: relative;

    // padding: 15px;
    &:not(:last-child) {
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background: $white;
        margin-top: 10px;
      }
    }
  }

  // .burger-menu__link
  &__link {
    display: block;
    width: 100%;
    padding: 15px 0;
    // font-weight: 600;
    font-size: 22px;
    line-height: 100%;
  }

  // .burger-menu__sublist
  &__sublist {
    font-size: 22px;
    line-height: 100%;
    margin-left: 10px;
    margin-bottom: 15px;
  }

  // .burger-menu__subitem
  &__subitem {
    position: relative;

    &:not(:last-child) {
      margin-bottom: 10px;

      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background: $white;
        margin-top: 10px;
      }
    }
  }

  // .burger-menu__sublink
  &__sublink {
    display: block;
    font-size: 22px;
    line-height: 100%;
    margin-left: 10px;
    padding: 10px 0;
  }

  // .burger-menu__bottom
  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  // .burger-menu__socials
  &__socials {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 214px;
    width: 100%;
    font-weight: 400;
    font-size: 15px;
    line-height: 120%;
  }

  // .burger-menu__viber
  &__viber {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: $blue-bg;
  }

  // .burger-menu__vk
  &__vk {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: $blue-bg;
  }
}
</style>