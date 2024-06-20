<template>
  <header class="header" :class="{ 'header-second': isMainPage }">
    <div class="header__container _container">
      <div class="header__top" :class="{ 'header-second__top': isMainPage }">
        <router-link to="/" class="header__logo" :class="{ 'header-second__logo': isMainPage }" v-if="isMainPage">
          <img src="@/assets/img/logo.svg" alt="logo" />
        </router-link>
        <router-link to="/" class="header__logo" v-else>
          <img src="@/assets/img/header-logo-second.svg" alt="logo" />
        </router-link>
        <div class="header__text" :class="{ 'header-second__text': isMainPage }">
          Зоомагазин и груминг салон <br />
          в Нижневартовске
        </div>
        <!-- <button class="header__btn" :class="{ 'header-second__btn': isMainPage }">Запись на прием онлайн</button> -->
        <popup-menu :isMainPage="isMainPage" />
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
          <button class="header-search__btn" @click.prevent="handleSearch(productStore.products.name)"
            :class="{ 'header-search__btn--white': isMainPage }"></button>
          <input class="header-search__input" :class="{ 'header__second-search__input': isMainPage }" type="search"
            placeholder="Поиск по каталогу" v-model="productStore.products.name"
            @input="handleSearch(productStore.products.name)" />

          <div class="header-search__results"
            v-if="productStore.searchProducts && productStore.searchProducts.length > 0">
            <div class="header-search__result" v-for="product of productStore.searchProducts" :key="product.id">
              <router-link class="header-search__result-link" :to="`/product/${product.id}`" @click="clearInput">
                <div class="header-search__result-img">
                  <img :src="product.imgUrl" alt="pets" />
                </div>
                <div class="header-search__result-text">
                  <div class="header-search__result-title">
                    {{ product.name }}
                  </div>
                  <div class="header-search__result-price">
                    {{ product.price }}
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <!-- <div class="header-search__results" v-else-if="productStore.searchProducts === null">
            <div class="header-search__result">Загрузка...</div>
          </div> -->
          <!-- <div class="header-search__results" v-else-if="productStore.searchProducts !== null">
            <div class="header-search__result"> Результаты не найдены.</div>
          </div> -->
        </form>
      </div>
      <div class="header__bottom">
        <nav class="header__menu header-menu">
          <button class="header-menu__btn" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
            <span class="header-menu__btn-label">Каталог</span>
            <img class="header-menu__btn-img" src="@/assets/img/menu.svg" alt="">
          </button>
          <button class="header-menu__burger burger" @click="showBurgerMenu = !showBurgerMenu">
            <img src="@/assets/img/menu.svg" alt="">
          </button>
          <ul class="header-menu__list">
            <li class="header-menu__item">
              <a class="header-menu__link" href="#">Акции</a>
            </li>
            <li class="header-menu__item">
              <a class="header-menu__link" href="#">Новинки</a>
            </li>
            <li class="header-menu__item">
              <router-link to="/vetclinic/" class="header-menu__link">Клиника</router-link>
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
          <router-link to="/favorite/" class="header__user-actions__favorites">
            <img src="@/assets/img/favorites.svg" alt="" />

            <span class="header__user-actions__favorites-count" v-if="favouriteStore.favouriteItems.length > 0">
              {{ favouriteStore.favouriteItems.length }}
            </span>
          </router-link>
          <router-link to="/profile/" class="header__user-actions__user">
            <img v-if="userStore.isAdmin" src="@/assets/img/user-admin.svg" alt="" />
            <img v-else src="@/assets/img/user.svg" alt="" />
          </router-link>
          <router-link to="/cart" class="header__user-actions__cart">
            <img src="@/assets/img/cart.svg" alt="" />
            <span class="header__user-actions__cart-count" v-if="cartStore.cartItems.length > 0">{{
              cartStore.cartItems.length
            }}</span>
          </router-link>
          <router-link to="/admin/" v-if="userStore.isAdmin" class="header__user-actions__admin">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.7-.7 1.7-.3 2.6c.4.7 1 1.2 1.8 1.4v1c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.6 4-4.4 4-7.5c0-5-4-9-9-9m4 9H9V8h8z" />
            </svg>
          </router-link>
        </div>
        <transition name="slide-fade">
          <HeaderDropdownMenu v-if="showDropdown && categoryStore.categories.length > 0" @mouseenter="handleMouseOver"
            @mouseleave="handleMouseLeave" :category="categoryStore.categories"
            :subcategory="categoryStore.subcategories" />
        </transition>
      </div>

    </div>
    <transition name="slide-down">
      <BurgerMenu v-if="showBurgerMenu" :category="categoryStore.category" @close="showBurgerMenu = false" />
    </transition>
  </header>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import PopupMenu from '@/components/PopupMenu.vue';
import HeaderDropdownMenu from '@/components/HeaderDropdownMenu.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';

import { useCategoryStore } from '@/store/CategoryStore';
import { useUserStore } from '@/store/UserStore';
import { useCartStore } from '@/store/CartStore';
import { useFavouriteStore } from '@/store/FavouriteStore';
import { useProductStore } from '@/store/ProductStore.js';


export default {
  components: {
    HeaderDropdownMenu,
    BurgerMenu,
    PopupMenu,
  },
  data() {
    return {
      showDropdown: false,
      dropdownMouseOver: false,
      searchQuery: ''
    };
  },
  methods: {
    handleMouseOver() {
      this.dropdownMouseOver = true;
      this.showDropdown = true;
    },
    handleMouseLeave() {
      this.dropdownMouseOver = false;
      setTimeout(() => {
        if (!this.dropdownMouseOver) {
          this.showDropdown = false;
        }
      }, 200);
    },
  },
  props: {
    id: {},
    isMainPage: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup(props) {
    const showBurgerMenu = ref(false)
    const show = ref(false)
    const showOutline = computed(() => show.value)
    const categoryStore = useCategoryStore()
    const userStore = useUserStore()
    const cartStore = useCartStore()
    const favouriteStore = useFavouriteStore()
    const productStore = useProductStore()

    function handleSearch(name) {
      setTimeout(() => {
        productStore.getProductFromSearch(name);
      }, 200);
    }
    function clearInput() {
      productStore.products.name = ''
      productStore.getProductFromSearch(productStore.products.name)
      console.log("search cleared");
    }

    onMounted(() => {
      categoryStore.getCategories()
      userStore.getUser()
      // console.log(userStore.user.id);
      // cartStore.getCartItems(userStore.user.id);
      // favouriteStore.getFavouriteItems(userStore.user.id);
      // productStore.getProductFromSearch(productStore.searchProducts.name)
      // productStore.getProductFromSearch(name)
      // cartStore.getCartItems(userStore.user.id)
      // favoriteStore.getFavouriteItems(userStore.user.id)
    })

    // watch(() => productStore.searchProducts, (name) => {
    //   productStore.getProductFromSearch(name)
    // })
    watch(() => props.id, (newId) => {
      // Fetch data when props.id changes
      cartStore.getCartItems(newId);
      favouriteStore.getFavouriteItems(newId);
    });

    return {
      userStore,
      cartStore,
      favouriteStore,
      productStore,
      show,
      showOutline,
      categoryStore,
      showBurgerMenu,
      handleSearch,
      clearInput
    }
  },
  // data() {
  //   return {
  //     activeTab: 0,
  //     tabs: [
  //       {
  //         title: 'Корм',
  //         content: [
  //           { link: 'Content for tab 1' },
  //           { link: 'Content for tab 2' },
  //           { link: 'Content for tab 3' },

  //         ]
  //       },
  //       {
  //         title: 'Игрушки',
  //         content: [
  //           { link: 'Content for tab 1' },
  //           { link: 'Content for tab 2' },
  //         ]
  //       },
  //       {
  //         title: 'Лежанки',
  //         content: [
  //           { link: 'Content for tab 1' }]
  //       },
  //       // { title: 'Игрушки', content: 'Content for tab 2' },
  //       // { title: 'Лежанки', content: 'Content for tab 3' },
  //     ],
  //   };
  // },
}
</script>

<style lang="scss">
.slide-down-enter-active {
  transition: all 0.3s ease-out;
}

.slide-down-enter-active {
  // transition: opacity 0.3s ease-out;
  transition-delay: 0.1s;
}

.slide-down-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100px);
  // transform: scale(0.8);
  opacity: 0;
}

.slide-down-enter-active .burger-menu__top .burger-menu__bottom,
.slide-down-leave-active .burger-menu__top .burger-menu__bottom {
  transition: all 0.3s ease-in-out;
}

.slide-down-enter-active .burger-menu__top .burger-menu__bottom {
  transition-delay: 0.1s;
}

.slide-down-enter-from .burger-menu__top .burger-menu__bottom,
.slide-down-leave-to .burger-menu__top .burger-menu__bottom {
  transform: scale(0.8);
  // transform: scale3d(0.5, 0.5, 0.5);
  opacity: 0;
}

.slide-down-enter-active .burger-menu__middle,
.slide-down-leave-active .burger-menu__middle {
  transition: all 0.3s ease-in-out;
}

.slide-down-enter-active .burger-menu__middle {
  transition-delay: 0.2s;
}

.slide-down-enter-from .burger-menu__middle,
.slide-down-leave-to .burger-menu__middle {
  transform: translateX(-100px);
  // width: 0;
  // transform: scale3d(0.5, 0.5, 0.5);
  opacity: 0;
}



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
    gap: clamp(0.75rem, -1.381rem + 6.13vw, 1.563rem);
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
    width: clamp(7.25rem, -6.645rem + 28.95vw, 11.375rem);
    height: clamp(1.563rem, -1.385rem + 6.14vw, 2.438rem);

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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
  }

  &__favorites-count {
    content: '';
    position: absolute;
    top: -7px;
    right: -7px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    font-weight: 600;
    font-size: 10px;
    color: $white;
    background: $blue-main;
    border-radius: 50%;
  }

  &__user {}

  &__cart {
    position: relative;
  }

  &__cart-count {
    content: '';
    position: absolute;
    top: -5px;
    right: -7px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    font-weight: 600;
    font-size: 10px;
    color: $white;
    background: $blue-main;
    border-radius: 50%;

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
    font-size: clamp(14px, 0.547rem + 0.94vw, 16px);
    line-height: 120%;
    white-space: nowrap;
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
  position: relative;

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

  &__results {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    max-width: 477px;
    max-height: 300px;
    background: $white;
    border-radius: 20px;
    // padding: 15px 0;
    z-index: 4;
    overflow-y: auto;
  }

  &__result {}

  &__result-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-size: 16px;
    line-height: 120%;
    padding: 10px 20px;
    color: $black-text;
    border-bottom: 1px solid $gray-border;
    transition: background 0.2s ease-in-out;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      transition: background 0.2s ease-in-out;
      background: $white-bg;
    }
  }



  &__result-img {
    position: relative;
    width: 50px;
    height: 54px;
    border-radius: 50%;

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__result-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 auto;
    // gap: 5px;
  }

  &__result-title {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
  }

  &__result-price {
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: $blue-main;
  }
}

// .header-dropdown {

//   // .header-dropdown__btn
//   &__btn {
//     display: flex;
//     flex-direction: row;
//     // justify-content: space-between;
//     align-items: center;
//     gap: 26px;

//     background: $blue-main;
//     border-radius: 61px;
//     padding: 17px 20px 14px 20px;
//     position: relative;
//     transition: background 0.2s;

//     &:hover {
//       background: $blue-second;
//     }

//     &::after {
//       display: none;
//       content: '';
//       position: absolute;
//       top: 14px;
//       right: 20px;
//       // transform: translateY(-50%);
//       width: 24px;
//       height: 24px;
//       background: url('../assets/img/menu.svg') no-repeat 100%;
//     }
//   }

//   // .header-dropdown__btn-label
//   &__btn-label {
//     font-size: 16px;
//     color: $white;
//   }

//   // .header-dropdown__btn-burger
//   &__btn-burger {

//     width: 24px;
//     height: 24px;
//     // background: url('../assets/img/menu.svg') no-repeat 100%;
//   }

//   // .header-dropdown__menu
//   &__menu {
//     display: flex;
//     flex-direction: column;
//   }

//   // .header-dropdown__submenu
//   &__submenu {
//     display: flex;
//     flex-direction: column;
//     margin-left: 20px;

//   }

//   // .header-dropdown__item
//   &__item {
//     font-weight: 600;
//     font-size: 16px;
//     line-height: 120%;
//   }

//   // .header-dropdown__link
//   &__link {
//     display: block;
//     padding: 10px 20px;

//     &:hover {
//       background-color: $blue-bg-second;
//     }
//   }
// }

// .dropdown-menu {

//   // .dropdown-menu__item
//   &__item {}

//   &__item.active {
//     .dropdown-menu__btn {
//       background-color: $blue-bg-third;
//     }
//   }

//   // .dropdown-menu__link
//   &__btn {
//     display: block;
//     padding: 10px 0 10px 20px;
//     text-align: start;
//     width: 100%;
//     font-weight: 600;
//     font-size: 16px;
//     line-height: 120%;

//     &:hover {
//       background-color: $blue-bg-third;

//     }
//   }
// }

// .dropdown-submenu {

//   // .dropdown-menu__item
//   &__item {
//     &:not(:last-child) {
//       margin-bottom: 15px;
//     }
//   }

//   // .dropdown-menu__link
//   &__link {
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 120%;
//     color: $silver-text;

//   }
// }

.header-menu {

  // .header-menu__btn
  &__btn {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    align-items: center;
    gap: 26px;
    background: $blue-main;
    border-radius: 61px;
    padding: 17px 20px 14px 20px;
    position: relative;
    color: $white;
    transition: background 0.2s;

    &:hover {
      background: $blue-second;
    }
  }

  // .header-menu__burger
  &__burger {
    display: none;
    justify-content: center;
    align-items: center;
    background: $blue-main;
    border-radius: 43px;
    padding: 12px 20px;
    width: 50px;
    height: 50px;
  }

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

// .burger-btn
.burger-btn {
  // position: relative;
  // // display: none;
  // width: 24px;
  // height: 24px;
  // background: url('../assets/img/menu.svg') no-repeat 100%;
  // cursor: pointer;

  // .burger-btn__line
  // &__line {
  //   display: n;
  //   position: absolute;
  //   left: 0;
  //   top: 50%;
  //   transform: translateY(-50%);
  //   width: 10px;
  //   height: 2px;
  //   background: $white;
  //   border-radius: 2px;


  // }

  // &::before,
  // &::after {
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   display: block;
  //   // width: 24px;
  //   height: 2px;
  //   background: $white;
  // }

  // &::before {
  //   top: 0;
  //   width: 18px;
  // }

  // &::after {
  //   bottom: 0;
  //   width: 16px;
  // }
}

.header__second-search {
  &__input {
    color: $white;

    &::placeholder {
      color: $white;
    }
  }
}

@media (max-width: 1222px) {
  .header {
    &__text {
      display: none;
    }

    &__search {
      display: none;
    }
  }

  .header-second {
    &__text {}
  }

}

@media (max-width: 996px) {
  .header {
    &__bottom {
      // display: none;
    }

    // display: none;
    &__user-actions {
      display: none;
    }
  }

  .header-menu {
    &__btn {
      display: none;
    }

    &__burger {
      display: flex;
    }

    &__list {
      // gap: 15px;
      // display: none;
    }
  }


  // .header-dropdown {
  //   &__btn-label {
  //     display: none;
  //   }
  // }
}

@media (max-width: 768px) {
  .header {
    // position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #EDF1FB;
    }

    &__container {
      flex-direction: row;
      justify-content: space-between;
      // gap: clamp(0.75rem, -1.381rem + 6.13vw, 1.563rem);
    }

    &__top {
      width: 100%;
    }

    &__bottom {
      padding: 0;
    }
  }

  .header-menu {
    &__list {
      display: none;
    }

    &__burger {
      width: 34px;
      height: 34px;
      padding: 11px 8px;
      border-radius: 8px;
    }
  }

  .header-second {
    &::after {

      background: #9BB9FF;
    }
  }
}

@media (max-width: 556px) {
  .header-socials {
    margin-left: 27px;

    &__viber,
    &__vk {
      display: none;
    }
  }
}
</style>
