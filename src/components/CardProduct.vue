<template>
	<div class="card-product" :class="{ 'promotion__card-product': isPromotion }">
		<div class="card-product__image" :class="{ 'promotion__card-product__image': isPromotion }">
			<img :src="product.imgUrl" alt="Товар" />
		</div>
		<div class="card-product__content" :class="{ 'promotion__card-product__content': isPromotion }">
			<div class="card-product__prices">
				<div class="card-product__price">{{ product.price }} ₽</div>
				<div class="card-product__old-price" v-if="product.oldPrice > 0"><s>{{ product.oldPrice }}</s>
				</div>
			</div>
			<router-link :to="{ name: 'productPage', params: { id: product.id } }" class="card-product__title">{{ product.name
				}}</router-link>
			<div class="card-product__subtitle">{{ product.description }}

			</div>
			<div class="card-product__weights" :class="{ 'promotion__card-product__weights': isPromotion }">
				<button v-for=" weight in weights " :key="weight" :class="{ 'active': selectedWeight === weight }"
					@click="selectWeight(weight)" class="card-product__weight">
					{{ weight }}
				</button>
			</div>
			<div class="card-product__buttons" :class="{ 'promotion__card-product__buttons': isPromotion }">
				<template v-if="!isCart">
					<div class="card-product__quantity" :class="{ 'promotion__card-product__quantity': isPromotion }">
						<button class="card-product__quantity-button card-product__quantity-button--minus"
							@click="decrementQuantity"></button>
						<input class="card-product__quantity-input" type="text" value="1" v-model="quantity" />
						<button class="card-product__quantity-button card-product__quantity-button--plus"
							@click="incrementQuantity"></button>
						<!-- <template v-else>
						<button class="card-product__quantity-button card-product__quantity-button--minus"
							@click="decrementQuantity(product.id, cartStore.cartItems.quantity)"></button>
						<input class="card-product__quantity-input" type="text" v-model="cartStore.cartItems.quantity" />
						<button class="card-product__quantity-button card-product__quantity-button--plus"
							@click="incrementQuantity(product.id, cartStore.cartItems.quantity)"></button>
					</template> -->
					</div>
				</template>
				<button class="card-product__button" :class="{ 'promotion__card-product__button': isPromotion }"
					@click="btnAddToCart(product.id, quantity, id)" v-if="!isCart">В корзину <img
						src="@/assets/img/shopping-cart.svg" alt=""></button>
				<button class="card-product__button card-product__button--delete"
					:class="{ 'promotion__card-product__button': isPromotion }" @click="btnDeleteFromCart(product.id, id)" v-else>
					В
					корзине <img src="@/assets/img/shopping-cart.svg" alt="">
				</button>
			</div>
			<button class="card-product__favourite" :class="{ 'promotion__card-product__favourite': isPromotion }"
				@click="btnAddToFavourite(product.id, id)" v-if="!isFavourite">
				<svg width="24" height="24" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20.844 2.60987C20.3333 2.09888 19.7268 1.69352 19.0594 1.41696C18.3919 1.14039 17.6765 0.998047 16.954 0.998047C16.2315 0.998047 15.5161 1.14039 14.8487 1.41696C14.1812 1.69352 13.5748 2.09888 13.064 2.60987L12.004 3.66987L10.944 2.60987C9.91233 1.57818 8.51306 0.998582 7.05403 0.998582C5.59499 0.998582 4.19572 1.57818 3.16403 2.60987C2.13233 3.64156 1.55273 5.04084 1.55273 6.49987C1.55273 7.95891 2.13233 9.35818 3.16403 10.3899L4.22402 11.4499L12.004 19.2299L19.784 11.4499L20.844 10.3899C21.355 9.87912 21.7604 9.27269 22.0369 8.60523C22.3135 7.93777 22.4559 7.22236 22.4559 6.49987C22.4559 5.77738 22.3135 5.06198 22.0369 4.39452C21.7604 3.72706 21.355 3.12063 20.844 2.60987V2.60987Z"
						stroke="#606C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			<button class="card-product__favourite card-product__favourite--active"
				:class="{ 'promotion__card-product__favourite': isPromotion }" @click="btnDeleteFromFavourite(product.id, id)"
				v-if="isFavourite">
				<svg width="24" height="24" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M20.844 2.60987C20.3333 2.09888 19.7268 1.69352 19.0594 1.41696C18.3919 1.14039 17.6765 0.998047 16.954 0.998047C16.2315 0.998047 15.5161 1.14039 14.8487 1.41696C14.1812 1.69352 13.5748 2.09888 13.064 2.60987L12.004 3.66987L10.944 2.60987C9.91233 1.57818 8.51306 0.998582 7.05403 0.998582C5.59499 0.998582 4.19572 1.57818 3.16403 2.60987C2.13233 3.64156 1.55273 5.04084 1.55273 6.49987C1.55273 7.95891 2.13233 9.35818 3.16403 10.3899L4.22402 11.4499L12.004 19.2299L19.784 11.4499L20.844 10.3899C21.355 9.87912 21.7604 9.27269 22.0369 8.60523C22.3135 7.93777 22.4559 7.22236 22.4559 6.49987C22.4559 5.77738 22.3135 5.06198 22.0369 4.39452C21.7604 3.72706 21.355 3.12063 20.844 2.60987V2.60987Z"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			<div class="card-product__discount" :class="{ 'promotion__card-product__discount': isPromotion }"
				v-if="product.discount > 0">-{{
					product.discount }}%</div>
		</div>
	</div>
</template>
<script>
import { ref, onMounted, computed } from 'vue'
import { useProductStore } from '@/store/ProductStore'
import { useProductImgStore } from '@/store/ProductImgStore'
import { useCartStore } from '@/store/CartStore.js'
import { useUserStore } from '@/store/UserStore.js'
import { useFavouriteStore } from '@/store/FavouriteStore.js'

export default {
	data() {
		return {
			// quantity: 1,
			selectedWeight: '400г',
			weights: ['400г', '800г', '1200г', '3500г'],
		};
	},
	props: {
		id: {},
		product: {},
		favouriteItems: [],
		isPromotion: {
			type: Boolean,
			required: false,
			default: false,
		}
	},

	methods: {
		selectWeight(weight) {
			this.selectedWeight = weight;
		},
		// incrementQuantity(id, quantity) {
		// 	this.quantity++
		// 	// if (this.isCart) {
		// 	// 	cartStore.updateCartItem(id, quantity)
		// 	// }
		// 	// cartStore.updateCartItem(id, quantity)
		// },
		// decrementQuantity(id, quantity) {
		// 	if (this.quantity > 1) {
		// 		this.quantity--
		// 		//cartStore.updateCartItem(id, quantity)
		// 	}
		// }
	},

	setup(props) {
		// const productStore = useProductStore();
		// const productImgStore = useProductImgStore();
		const cartStore = useCartStore();
		const favouriteStore = useFavouriteStore();
		const userStore = useUserStore();
		const quantity = ref(1);

		function btnAddToCart(productId, quantity, userId) {
			if (userId) {
				cartStore.addCartItem(productId, quantity, userId)
			}
			else {
				console.log("Авторизуйтесь");
			}
		}

		function btnAddToFavourite(productId, userId) {
			if (userId) {
				favouriteStore.addFavouriteItem(productId, userId)
			}
			else {
				console.log("Авторизуйтесь");
			}
		}

		function btnDeleteFromCart(id, userId) {
			const cartItem = cartStore.cartItems.find(cartItem => cartItem.productId === id);
			console.log(id);
			cartStore.deleteCartItem(cartItem.id, userId)
		}

		function btnDeleteFromFavourite(id, userId) {
			const favouriteItem = favouriteStore.favouriteItems.find(favouriteItem => favouriteItem.productId === id);
			console.log(id);
			favouriteStore.deleteFavouriteItem(favouriteItem.id, userId)
		}

		function incrementQuantity(id) {
			quantity.value++
			// if (isCart) {
			// 	console.log(123);
			// 	const cartItem = cartStore.cartItems.find(cartItem => cartItem.productId === id);
			// 	cartStore.updateCartItem(cartItem.id, quantity)
			// }
		}

		function decrementQuantity(id, quantity) {
			if (quantity > 1) {
				quantity--
				if (condition) {

				}
				//cartStore.updateCartItem(id, quantity)
			}
		}

		const isCart = computed(() => {
			return (
				cartStore.cartItems.find(
					cartItem => cartItem.productId === props.product.id
				) !== undefined
			)
		})

		const isFavourite = computed(() => {
			return (
				favouriteStore.favouriteItems.find(
					favouriteItem => favouriteItem.productId === props.product.id
				) !== undefined
			)
		})
		// const quantity = computed(() => {
		// 	if (isCart) {
		// 		const cartItem = cartStore.cartItems.find(cartItem => cartItem.productId === props.product.id);
		// 		quantity = cartItem.quantity;
		// 		console.log(quantity);
		// 	}
		// 	else {
		// 		quantity = ref(1);
		// 	}

		// 	return quantity;
		// })
		// console.log(isCart);
		onMounted(() => {
			if (props.id) {
				cartStore.getCartItems(userStore.user.id);

				favouriteStore.getFavouriteItems(userStore.user.id);
			}
		})

		return {
			cartStore,
			userStore,
			favouriteStore,
			btnAddToCart,
			btnAddToFavourite,
			btnDeleteFromFavourite,
			btnDeleteFromCart,
			isCart,
			isFavourite,
			incrementQuantity,
			decrementQuantity,
			quantity,
		}
	}
}
</script>
<style lang="scss">
// .card-product
.card-product {
	position: relative;
	display: flex;
	flex-direction: column;
	background: $white;
	border-radius: 15px;
	height: 100%;

	// .card-product__image
	&__image {
		position: relative;
		width: 62.54%;
		padding-bottom: 100%;
		margin: 0 auto;
		// height: 283px;
		// max-height: 283px;

		& img {
			position: absolute;
			top: 0;
			left: auto;
			right: auto;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 20px;
		}
	}

	// .card-product__content
	&__content {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		flex-grow: 1;
		padding: 15px;
	}

	// .card-product__prices
	&__prices {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		max-width: 102px;
		width: 100%;
		margin-bottom: 8px;
	}

	// .card-product__price
	&__price {
		font-size: 18px;
		font-weight: 600;
		line-height: 110%;
		color: $blue-main;
	}

	// .card-product__old-price
	&__old-price {
		font-size: 14px;
		font-weight: 500;
		line-height: 110%;
		color: $gray-text;
	}

	// .card-product__title
	&__title {
		font-size: 14px;
		font-weight: 600;
		line-height: 110%;
		color: $black-text;
		margin-bottom: 7px;
	}

	// .card-product__subtitle
	&__subtitle {
		font-size: clamp(10px, 0.404rem + 0.98vw, 14px);
		font-weight: 600;
		line-height: 120%;
		color: $silver-text;
		margin-bottom: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	// .card-product__weights
	&__weights {
		display: flex;
		flex-direction: row;
		// justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;

	}

	// .card-product__weight
	&__weight {
		font-size: 11px;
		font-weight: 400;
		line-height: 100%;
		color: $gray-border;
		border: 1px solid $gray-border;
		border-radius: 6px;
		padding: 5px 6px;
		transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

		&:not(:last-child) {
			margin-right: 5px;
		}
	}

	&__weight.active {
		background: $gray-border;
		color: $white;
	}

	// .card-product__buttons
	&__buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
	}

	// .card-product__quantity
	&__quantity {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		max-width: 71px;
		width: 100%;
		font-size: 18px;
	}

	// .card-product__quantity-button
	&__quantity-button {
		position: relative;
		border: 1px solid #EDF1FB;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		transition: border 0.1s ease-in-out;

		// padding: 5px;
		&:hover {
			// background: #EDF1FB;
			border: 1px solid $blue-main;
		}
	}

	&__quantity-button--minus {
		&::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 8px;
			height: 1px;
			background: $gray-text;
			transition: background 0.1s ease-in-out;
		}

		&:hover::before {
			background: $blue-main;
		}
	}

	&__quantity-button--plus {
		&::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 8px;
			height: 1px;
			background: $gray-text;
			transition: background 0.1s ease-in-out;
		}

		&:hover::before {
			background: $blue-main;
		}

		&::after {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(90deg);
			width: 8px;
			height: 1px;
			background: $gray-text;
			transition: border 0.1s ease-in-out;
		}

		&:hover::after {
			background: $blue-main;
		}

	}

	// .card-product__quantity-input
	&__quantity-input {

		max-width: 20px;
		width: 100%;
		text-align: center;

		&:focus {
			outline: none;
		}
	}

	// .card-product__button
	&__button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 10px;
		white-space: nowrap;
		font-size: 15px;
		font-weight: 600;
		line-height: 120%;
		background: $blue-main;
		color: $white;
		border-radius: 50px;
		padding: 12px 30px;
		transition: background 0.2s ease-in-out;

		&:hover {
			background: $blue-second;
		}
	}

	// .card-product__button--delete
	&__button--delete {
		width: 100%;

		&:hover {
			background: $red;
		}

		// background: $blue-second;
	}

	// .card-product__favourite
	&__favourite {
		position: absolute;
		top: 10px;
		right: 20px;
		width: 24px;
		height: 24px;

		& path {
			transition: stroke 0.1s ease-in-out;
		}

		// & svg {
		//   transition: transform 0.1s ease-in-out;
		// }

		&:hover path {
			// fill: $blue-main;
			stroke: $blue-main;
		}

		// &:hover svg {
		//   transform: scale(110%);
		// }
	}

	// .card-product__favourite--active

	&__favourite--active {

		& path {
			fill: $blue-main;
			stroke: $blue-main;
			transition: 0.15s ease-in-out;
		}

		&:hover {

			& path {
				fill: transparent;
			}
		}
	}

	// .card-product__discount
	&__discount {
		position: absolute;
		top: 10px;
		left: 20px;
		font-size: 12px;
		font-weight: 600;
		line-height: 26px;
		color: $white;
		background: $yellow-bg;
		padding: 0 10px;
		border-radius: 65px;
	}

}

.promotion__card-product {
	flex-direction: row;

	&__image {
		max-width: 151px;
		width: 100%;
		margin: 0 clamp(0.313rem, -11.532rem + 19.03vw, 3rem);

		& img {}
	}

	&__content {
		padding: 20px;
	}

	&__weights {
		margin-bottom: auto;
	}

	&__buttons {
		max-width: 253px;
		width: 100%;
		align-self: flex-end;
	}

	&__favourite {
		right: 10px;
	}

	&__discount {
		left: 10px;
	}

}

@media (max-width: 996px) {
	.promotion__card-product {

		&__image {
			margin: 0 clamp(1.5rem, -0.395rem + 5.45vw, 3rem);
		}
	}
}


@media (max-width: 556px) {
	.promotion__card-product {
		flex-direction: column;
		max-width: 243px;


		&__image {
			// margin: 0 clamp(0.75rem, -2.923rem + 16.33vw, 2.75rem);
			margin: 0 auto;
			padding: 0 32px;
		}

		&__content {
			margin-bottom: 3px;
			padding: 10px;
		}

		&__quantity,
		&__weights {
			display: none;
		}

		&__button {
			// max-width: 100%;
			width: 100%;
		}
	}
}
</style>