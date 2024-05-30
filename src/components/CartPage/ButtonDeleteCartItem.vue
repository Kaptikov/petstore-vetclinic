<template>
  <button class="cart-product__btn--delete" @click="btnDeleteFromCart(cartItem.id, id)">
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.4987 0.5V1.33333H0.332031V3H1.16536V13.8333C1.16536 14.2754 1.34096 14.6993 1.65352 15.0118C1.96608 15.3244 2.39 15.5 2.83203 15.5H11.1654C11.6074 15.5 12.0313 15.3244 12.3439 15.0118C12.6564 14.6993 12.832 14.2754 12.832 13.8333V3H13.6654V1.33333H9.4987V0.5H4.4987ZM2.83203 3H11.1654V13.8333H2.83203V3ZM4.4987 4.66667V12.1667H6.16536V4.66667H4.4987ZM7.83203 4.66667V12.1667H9.4987V4.66667H7.83203Z"
        fill="currentColor" />
    </svg>
    <span>Удалить</span>
  </button>
</template>
<script>
import { useCartStore } from '@/store/CartStore.js';
export default {
  props: {
    id: {},
    cartItem: {},
  },
  setup(props) {
    const cartStore = useCartStore();
    function btnDeleteFromCart(id, userId) {
      // const favouriteItem = favouriteStore.favouriteItems.find(favouriteItem => favouriteItem.productId === id);
      // console.log(id);
      cartStore.deleteCartItem(id, userId)
    }
    // const deleteCartItem = async () => {
    //   try {
    //     // console.log(props.CartItem.id);
    //     await cartStore.deleteCartItem(props.cartItem.id);
    //     cartStore.getCartItems(props.cartItem.userId);
    //     // console.log('cartItem deleted', props.cartItem);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    return {
      cartStore,
      btnDeleteFromCart,
    };
  }
}
</script>
<style lang="scss"></style>