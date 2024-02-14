<template>
  <div class="popup-menu">
    <div class="popup-menu__container _container">
      <transition name="slide-fade">
        <div v-if="show" class="product-categories__dropdawn-menu">
          <button @click="show = !show" class="popup-menu__close"></button>
          <h4 class="popup-menu__title">Запись на груминг</h4>
          <p class="popup-menu__description">
            Оставьте свои контакты и мы обсудим все детали!
          </p>
          <form action="">
            <label for="promocode">Имя*</label>
            <input type="name" name="name" required />
            <label for="phone">Телефон</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+_ ______-__-__"
              required
            />
            <button type="submit">Оставить заявку</button>
          </form>
          <div class="popup-menu__privocy-policy">
            Нажимая на кнопку “Заказать расчёт” я соглашаюсь на
            <a href="" class="popup-menu__link"
              >обработку персонал ьных данных</a
            >
            и соглашаюсь с
            <a href="" class="popup-menu__link">политикой конфиденциальности</a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const show = ref(false)
    const showOutline = computed(() => show.value)

    return {
      show,
      showOutline,
    }
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
  opacity: 0;
}
</style>
