<template>
	<div class="cart">
		<div class="cart__container _container">
			<template v-if="cartStore.cartItems.length > 0">
				<div class="cart__title">Корзина</div>
				<div class="cart__wrapper">
					<div class="cart__items">
						<CartProduct v-for="cartItem in cartStore.cartItems" :key="cartItem.id" :cartItem="cartItem" :id="id" />
					</div>
					<CartAside :cartItem="cartStore.cartItems" :finalPrice="cartStore.finalPrice"
						:cartItemsLength="cartStore.cartItemsLength" :id="id" />
				</div>
			</template>
			<template v-else>
				<div class="cart__title">Корзина пуста</div>
			</template>
		</div>
	</div>
</template>

<script>
import CartProduct from '@/components/CartPage/CartProduct.vue'
import CartAside from '@/components/CartPage/CartAside.vue'

import { onMounted } from 'vue'

import { useProductStore } from '@/store/ProductStore'
import { useCartStore } from '@/store/CartStore'
import { useFavouriteStore } from '@/store/FavouriteStore'

export default {
	components: {
		CartProduct,
		CartAside,
	},

	props: {
		id: {}
	},

	setup(props) {
		const cartStore = useCartStore()
		const favouriteStore = useFavouriteStore()
		const productStore = useProductStore()
		onMounted(() => {
			cartStore.getCartItems(props.id)
			favouriteStore.getFavouriteItems(props.id);
		})

		return {
			cartStore,
			favouriteStore,
		}
	}
}
</script>

<style lang="scss">
.cart {

	// .cart__container
	&__container {
		display: flex;
		flex-direction: column;

	}

	// .cart__title
	&__title {
		font-weight: 700;
		font-size: 52px;
		line-height: 110%;
		margin-bottom: 59px;
	}

	// .cart__wrapper
	&__wrapper {
		display: flex;
		flex-direction: row;
		gap: 56px;
	}

	// .cart__items
	&__items {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 100%;
		max-width: 756px;
	}
}

@media (max-width: 1024px) {
	.cart {

		// .cart__title
		&__title {}

		// .cart__wrapper
		&__wrapper {
			flex-direction: column;
		}

		// .cart__items
		&__items {
			max-width: 100%;
		}
	}
}
</style>