<template>
  <popup-menu title="Редактировать профиль">
    <div class="popup-menu__item">
      <label class="popup-menu__label" for="name">Имя:</label>
      <input class="popup-menu__input" type="text" id="name" v-model="editedUser.name" />
    </div>
    <div class="popup-menu__item">
      <label class="popup-menu__label" for="lastname">Фамилия</label>
      <!-- <input class="popup-menu__input" type="text" id="lastname" v-model="editedUser.lastname" /> -->
    </div>
    <div class="popup-menu__item">
      <label class="popup-menu__label" for="email">Email</label>
      <!-- <input class="popup-menu__input" type="email" id="email" v-model="editedUser.email" /> -->
    </div>
    <div class="popup-menu__item">
      <label class="popup-menu__label" for="phone">Телефон</label>
      <!-- <input class="popup-menu__input" type="tel" id="phone" v-model="editedUser.phone"
        placeholder="+7 (___) ___-__-__" /> -->
    </div>
  </popup-menu>
</template>

<script>
import PopupMenu from './PopupMenu.vue';
import { ref } from 'vue';
import { useUserStore } from '@/store/UserStore.js';

export default {
  components: {
    PopupMenu
  },
  props: {
    // user: {},
    editedUser: {}
  },
};
</script>

<style lang="scss"></style>