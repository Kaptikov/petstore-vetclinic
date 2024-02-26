<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__top">
        <div class="footer__description">
          <a href="" class="footer__logo">
            <img src="@/assets/img/logo2.svg" alt="" />
          </a>
          <p class="footer__text">
            Товары для животных и груминг салон в Нижневартовске, бесплатная
            доставка при покупке от 2000₽
          </p>
        </div>
        <div class="footer__menu footer-menu">
          <div class="footer-menu__container">
            <div class="footer-menu__label">Категории</div>
            <ul class="footer-menu__list">
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Для собак</a>
              </li>
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Для кошек</a>
              </li>
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Для птиц</a>
              </li>
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Для грызунов</a>
              </li>
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Для рыбок</a>
              </li>
            </ul>
          </div>
          <div class="footer-menu__container">
            <div class="footer-menu__label">Покупателям</div>
            <ul class="footer-menu__list">
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Акции</a>
              </li>
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Новинки</a>
              </li>
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Груминг</a>
              </li>
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Контакты</a>
              </li>
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Доставка</a>
              </li>
              <li class="footer-menu__item">
                <a href="" class="footer-menu__link">Адреса магазинов</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__contacts footer-contacts">
          <div class="footer-contacts__label">Контакты</div>
          <div class="footer-contacts__info">
            <a href="tel:+7 (999) 999-99-99" class="footer-contacts__tel">
              +7 (982) 537-81-27
            </a>
            <a href="" class="footer-contacts__viver">
              <img src="@/assets/img/viber.svg" alt="" />
            </a>
            <a href="" class="footer-contacts__vk">
              <img src="@/assets/img/vk.svg" alt="" />
            </a>
            <button class="footer-contacts__btn">Запись онлайн</button>
          </div>
          <div class="footer-contacts__addreses">
            <div class="footer-contacts__address">
              <div class="footer-contacts__address-text">
                Северная улица, 74А
              </div>
              <div class="footer-contacts__address-time">9:00 - 21:00</div>
              <div class="footer-contacts__address-tel">27-85-27</div>
            </div>
            <div class="footer-contacts__address">
              <div class="footer-contacts__address-text">Омская улица, 12</div>
              <div class="footer-contacts__address-time">10:00 - 20:00</div>
              <div class="footer-contacts__address-tel">27-71-27</div>
            </div>
            <div class="footer-contacts__address">
              <div class="footer-contacts__address-text">
                Профсоюзная улица, 7
              </div>
              <div class="footer-contacts__address-time">10:00 - 20:00</div>
              <div class="footer-contacts__address-tel">27-81-27</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__credits footer-credits">
          <a href="" class="footer-credits__logo-second">
            <img src="@/assets/img/logo-company.svg" alt="logo-company" />
          </a>
          <div class="footer-credits__wrapper">
            <div class="footer-credits__copyright">&copy; ООО«Матроскин» </div>
            <a href="#" class="footer__privacy-policy footer-credits__privacy-policy">Политика
              конфиденциальности</a>
          </div>
        </div>
        <div class="footer__payment">
          <a href="" class="footer__payment-link">
            <img class="footer__payment-img" src="@/assets/img/googlePay.svg" alt="googlePay" />
          </a>
          <a href="" class="footer__payment-link">
            <img class="footer__payment-img" src="@/assets/img/maestro.svg" alt="maestro" />
          </a>
          <a href="" class="footer__payment-link">
            <img class="footer__payment-img" src="@/assets/img/mastercard.svg" alt="mastercard" />
          </a>
          <a href="" class="footer__payment-link">
            <img class="footer__payment-img" src="@/assets/img/paypal.svg" alt="paypal" />
          </a>
          <img class="footer__payment-img" src="@/assets/img/yandex.svg" alt="yandex" />
          <a href="" class="footer__payment-link">
            <img class="footer__payment-img" src="@/assets/img/mir.svg" alt="mir" />
          </a>
          <a href="" class="footer__payment-link">
            <img class="footer__payment-img" src="@/assets/img/qiwi.svg" alt="qiwi" />
          </a>
        </div>
        <a href="" class="footer__privacy-policy">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  position: relative;
  background: $black-bg;
  z-index: 2;

  // .footer__container
  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    background: url('../assets/img/paw.svg') no-repeat 37% 21px;

  }

  // .footer__top
  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    margin-top: clamp(37px, -4.665rem + 14.54vw, 103px);
    margin-bottom: clamp(50px, 2.316rem + 3.6vw, 81px);
    color: $white;
  }

  // .footer__description
  &__description {}

  // .footer__logo
  &__logo {
    display: block;
    margin-bottom: 30px;
    max-width: max-content;
  }

  // .footer__text
  &__text {
    font-size: 14px;
    font-weight: 200;
    opacity: 70%;
    max-width: 240px;
  }

  // .footer__menu
  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // max-width: 28.559%;
    width: min(320px, 28.559%);
  }

  // .footer__contacts
  &__contacts {
    max-width: 410px;
    width: 100%;
    margin-left: 18px;
  }

  // .footer__bottom
  &__bottom {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    margin-bottom: 18px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: $gray-bg-line;
    }
  }

  // .footer__credits
  &__credits {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 341px;
    width: 100%;
  }



  // .footer__payment
  &__payment {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  // .footer__payment-link
  &__payment-link {
    display: flex;
  }

  // .footer__payment-img
  &__payment-img {}

  // .footer__privacy-policy
  &__privacy-policy {
    font-size: clamp(10px, 0.581rem + 0.22vw, 12px);
    opacity: 40%;
    color: $white;
    text-decoration: underline;
    text-underline-position: under;
    white-space: nowrap;

    // transition: text-decoration 0.2s ease-in-out;
    &:hover {
      text-decoration: none;
      color: $white;
    }
  }

  &__privacy-policy-second {
    display: none;
  }
}

.footer-menu {

  // .footer-menu__container
  &__container {}

  // .footer-menu__label
  &__label {
    font-size: 18px;
    margin-bottom: 18px;
  }

  // .footer-menu__list
  &__list {}

  // .footer-menu__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  // .footer-menu__link
  &__link {
    font-size: 16px;
    font-weight: 400px;
    line-height: 110%;
    opacity: 70%;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 100%;
      color: $white;
    }
  }
}

.footer-contacts {

  // .footer-contacts__label
  &__label {
    font-size: 18px;
    margin-bottom: 14px;
  }

  // .footer-contacts__info
  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 19px;
  }

  // .footer-contacts__tel
  &__tel {
    font-size: 16px;
    line-height: 120%;
  }

  // .footer-contacts__viver
  &__viver {}

  // .footer-contacts__vk
  &__vk {}

  &__viver,
  &__vk {
    background: none;
    box-sizing: border-box;
    // border: 1px solid $blue-main;
    outline: 1px solid $blue-main;
    border-radius: 50%;
    padding: 8px;
    transition: background 0.2s;

    &:hover {
      background: $blue-main;
      outline-color: transparent;
    }
  }

  // .footer-contacts__btn
  &__btn {
    font-size: 15px;
    border: 1px solid $blue-main;
    border-radius: 66px;
    padding: 8px 20px 8px 20px;
    transition: background 0.2s;

    &:hover {
      background: $blue-main;
    }
  }

  // .footer-contacts__addreses
  &__addreses {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: clamp(12px, 0.698rem + 0.23vw, 14px);
    margin-left: -16px;
    margin-right: -10px;
  }

  // .footer-contacts__address
  &__address {
    // position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 9px 44px 9px 41px;
    background: $gray-bg-second;
    border-radius: 50px;

    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 10px;
    //   left: 18px;
    //   width: 16px;
    //   height: 17px;
    //   background: url('../assets/img/marker.svg') no-repeat 100%;
    // }

    // &::after {
    //   content: '';
    //   position: absolute;
    //   top: 8px;
    //   right: 16.4px;
    //   width: 17px;
    //   height: 19px;
    //   background: url('../assets/img/viber-second.svg') no-repeat 100%;
    // }
  }

  // .footer-contacts__address-text
  &__address-text {
    position: relative;
    line-height: 140%;
    flex-grow: 1;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -25.5px;
      transform: translateY(-50%);
      width: 16px;
      height: 17px;
      background: url('../assets/img/marker.svg') no-repeat 100%;
    }
  }

  // .footer-contacts__address-time
  &__address-time {
    flex-grow: 1;
    opacity: 60%;
  }

  // .footer-contacts__address-tel
  &__address-tel {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -25px;
      transform: translateY(-50%);
      width: 17px;
      height: 19px;
      background: url('../assets/img/viber-second.svg') no-repeat 100%;
    }
  }
}

.footer-credits {
  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  // .footer__copyright
  &__copyright {
    font-size: 12px;
    opacity: 40%;
    color: $white;
    margin-bottom: 3px;
  }

  // .footer-credits__link
  &__link {}

  // .footer__privacy-policy
  &__privacy-policy {
    display: none;
  }

}

@media (max-width: 996px) {
  .footer {
    &__container {}

    &__top {
      flex-wrap: wrap;
    }

    &__menu {
      // max-width: 100%;
      width: min(49vw, max(320px, 300));
      // gap: 30px;
      white-space: nowrap;
    }

    &__contacts {
      position: relative;
      display: grid;
      grid-template-columns: 225px 1fr;
      grid-template-rows: auto 1fr;
      gap: 0 79px;
      grid-template-areas:
        "label ."
        "info addreses";
      max-width: 100%;
      margin-top: 30px;
      margin-left: 0;
      padding-top: 30px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: $gray-bg-line;
      }
    }

    &__privacy-policy {
      display: none;
    }
  }

  .footer-credits {
    &__privacy-policy {
      display: block;
    }
  }

  .footer-contacts {
    &__label {
      grid-area: label;
    }

    &__info {
      flex-wrap: wrap;
      grid-area: info;
      // max-width: 225px;
    }

    &__addreses {
      grid-area: addreses;
    }

    &__btn {
      // max-width: 100%;
      width: 100%;
    }
  }
}

@media (max-width: 767px) {
  .footer {
    &__bottom {
      flex-direction: column;
      margin-bottom: 22px;

      &::before {
        top: auto;
        bottom: 49px;
      }
    }

    &__credits {
      order: 2;
    }

    &__payment {
      order: 1;
      margin-bottom: 70px;
    }
  }
}

@media (max-width: 710px) {
  .footer {
    &__container {}

    &__top {
      // flex-direction: column;
      // align-items: center;
    }

    &__menu {
      // margin-top: 30px;
      // max-width: 100%;
    }

    &__text {
      // max-width: 70%;
      // max-width: 100%;
      // width: min(100%, 240px);
    }

    &__contacts {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      grid-template-areas:
        "label"
        "info"
        "addreses";
      margin-left: 0;
    }

  }

  .footer-contacts {
    &__label {
      grid-area: label;
    }

    &__info {
      flex-wrap: wrap;
      grid-area: info;
    }

    &__addreses {
      grid-area: addreses;
      margin: 0;
    }

    &__tel {
      flex-grow: 1;
    }

    &__viver {
      margin-right: 10px;
    }

    &__vk {
      margin-right: 53px;
    }

    &__btn {
      margin-top: 20px;
      padding: 14px;
    }
  }
}

@media (max-width: 600px) {
  .footer {
    &__top {
      flex-direction: column;
    }

    &__bottom {
      margin-bottom: 30px;
    }

    &__menu {
      margin-top: 30px;
      width: 100%;
      max-width: 320px;
    }
  }
}

@media (max-width: 400px) {

  .footer-contacts {
    &__address {
      flex-wrap: wrap;
      padding: 20px 45px;

      &::before {
        top: 20px;
        left: 18px;
      }

      &::after {
        top: 45px;
        left: 18px;
      }
    }

    &__address-text {
      width: 100%;
      margin-bottom: 7px;
    }

    &__address-tel {
      padding-right: 7px;

      &::after {
        top: 50%;
        left: -25.62px;
        transform: translateY(-50%);
      }
    }

    &__address-time {
      order: 3;
    }

  }
}
</style>
