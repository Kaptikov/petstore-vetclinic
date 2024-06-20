<template>
	<div class="catalog">
		<div class="catalog__container _container">
			<Filters :products="productStore.products" />
			<div class="catalog__wrapper">
				<Banner />
				<Subcategories :subcategory="categoryStore.subcategoriesCatalog" />
				<div class="catalog__title">Каталог</div>
				<div class="catalog__controls catalog-controls">
					<div class="catalog-controls__quantity">
						{{ productStore.products.length }}
					</div>
					<div class="catalog-controls__filter-per-page">
						<div class="catalog-controls__label">Показывать по:</div>
						<!-- <button class="catalog-controls__btn-per-page"
							:class="{ 'catalog-controls__btn-per-page--active': productsPerPage === 2 }"
							@click="setProductsPerPage(2)">9</button>
						<button class="catalog-controls__btn-per-page"
							:class="{ 'catalog-controls__btn-per-page--active': productsPerPage === 3 }"
							@click="setProductsPerPage(3)">12</button>
						<button class="catalog-controls__btn-per-page"
							:class="{ 'catalog-controls__btn-per-page--active': productsPerPage === 5 }"
							@click="setProductsPerPage(5)">18</button>
						<button class="catalog-controls__btn-per-page"
							:class="{ 'catalog-controls__btn-per-page--active': productsPerPage === 24 }"
							@click="setProductsPerPage(24)">24</button> -->
						<button v-for="(count, index) in [2, 3, 5, 12, 18, 24]" :key="index" class="catalog-controls__btn-per-page"
							:class="{ 'catalog-controls__btn-per-page--active': productsPerPage === count }"
							@click="setProductsPerPage(count)">{{ count }}</button>
					</div>
					<div class="catalog-controls__filter-view-mode">
						<button class="catalog-controls__btn-view-mode">
							<svg width="19" height="19" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.394531" y="0.375" width="3.2132" height="3.28845" rx="1" fill="currentColor" />
								<rect x="4.67969" y="0.375" width="13.9238" height="3.28845" rx="1" fill="currentColor" />
								<rect x="0.394531" y="5.85547" width="3.2132" height="3.28845" rx="1" fill="currentColor" />
								<rect x="4.67969" y="5.85547" width="13.9238" height="3.28845" rx="1" fill="currentColor" />
								<rect x="0.394531" y="11.3367" width="3.2132" height="3.28845" rx="1" fill="currentColor" />
								<rect x="4.67969" y="11.3364" width="13.9238" height="3.28845" rx="1" fill="currentColor" />
							</svg>
						</button>
						<button class="catalog-controls__btn-view-mode">
							<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.949219" y="0.949951" width="7.48125" height="7.48125" rx="1" fill="currentColor" />
								<rect x="10.5684" y="0.949951" width="7.48125" height="7.48125" rx="1" fill="currentColor" />
								<rect x="10.5684" y="10.355" width="7.48125" height="7.48125" rx="1" fill="currentColor" />
								<rect x="0.949219" y="10.5686" width="7.48125" height="7.48125" rx="1" fill="currentColor" />
							</svg>
						</button>
						<button class="catalog-controls__btn-view-mode">
							<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.765625" y="0.935547" width="4.95152" height="4.95152" rx="1" fill="currentColor" />
								<rect x="7.02539" y="0.935547" width="4.95152" height="4.95152" rx="1" fill="currentColor" />
								<rect x="13.2852" y="0.935547" width="4.95152" height="4.95152" rx="1" fill="currentColor" />
								<rect x="7.02539" y="6.95215" width="4.95152" height="4.95152" rx="1" fill="currentColor" />
								<rect x="7.02539" y="13.113" width="4.95152" height="4.95152" rx="1" fill="currentColor" />
								<rect x="13.2852" y="6.95215" width="4.95152" height="4.95152" rx="1" fill="currentColor" />
								<rect x="13.2852" y="13.113" width="4.95152" height="4.95152" rx="1" fill="currentColor" />
								<rect x="0.765625" y="7.09644" width="4.95152" height="4.95152" rx="1" fill="currentColor" />
								<rect x="0.765625" y="13.113" width="4.95152" height="4.95152" rx="1" fill="currentColor" />
							</svg>
						</button>
					</div>
					<Select :products="productStore.products" :options="productStore.options" />
				</div>
				<div class="catalog__products" v-if="productStore.products.length > 0">
					<!-- < CardProduct v -for=" n in 5" :key="n" /> -->
					<CardProduct v-for="product of productStore.products" :key="product.id" :product="product"
						:id="userStore.user.id" />
				</div>
				<div class="catalog__products" v-else>
					Продукты не найдены
				</div>
				<button class="catalog__btn-more">Загрузить ещё</button>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import { useProductStore } from '@/store/ProductStore'
import { useCategoryStore } from '@/store/CategoryStore'
import { useUserStore } from '@/store/UserStore'
import { useRoute } from 'vue-router'

import Filters from '@/components/CatalogPage/Filters.vue'
import Banner from '@/components/CatalogPage/Banner.vue'
import Select from '@/components/CatalogPage/Select.vue'
import CardProduct from '@/components/CardProduct.vue'
import Subcategories from '@/components/CatalogPage/Subcategories.vue'

export default {
	components: {
		Filters,
		Banner,
		Select,
		CardProduct,
		Subcategories,
	},
	// data() {
	// 	return {
	// 		options: [
	// 			{ name: 'Самые популярные', value: 1 },
	// 			{ name: 'Самые дешевые', value: 2 },
	// 			{ name: 'Option 3', value: 3 },
	// 			{ name: 'Option 4', value: 4 },
	// 		]
	// 	}
	// },
	// data() {
	// 	return {
	// 		productsPerPage: 2,
	// 	};
	// },
	// methods: {
	// 	setProductsPerPage(value) {
	// 		this.productsPerPage = value;
	// 	},
	// },

	// computed: {
	// 	filteredProducts() {
	// 		return this.productStore.products.slice(0, this.productsPerPage);
	// 	},
	// },
	props: {
		id: {
			type: String,
			default: '',
		},
	},

	setup(props) {
		const route = useRoute()
		const productStore = useProductStore()
		const categoryStore = useCategoryStore()
		const userStore = useUserStore()
		const productsPerPage = ref(2);
		const titleCatalog = computed(() => {
			const categoryId = route.params.id
			const category = categoryStore.categories.find(category => category.id === categoryId)
			return category ? category.name : ''
		})
		console.log(titleCatalog.value);
		function setProductsPerPage(value) {
			const categoryId = route.params.id
			productsPerPage.value = value;
			console.log('Setting products per page to:', value)
			// productStore.getProductByCategory(categoryId, { perPage: 2 })
		}

		onMounted(() => {
			userStore.getUser()
			const categoryId = route.params.id
			categoryStore.getSubcategoriesForCatalog(categoryId)
			productStore.getProductByCategory(categoryId)
		})

		watch(() => route.params.id, (newId) => {
			productStore.getProductByCategory(newId);
			categoryStore.getSubcategoriesForCatalog(newId)
		});

		// watch(() => route.params.id, (newId) => {
		// 	productStore.getProductByCategory(newId, { perPage: productsPerPage.value })
		// 	categoryStore.getSubcategories(newId)
		// })

		return {
			productStore,
			categoryStore,
			userStore,
			setProductsPerPage,
			productsPerPage,
		}
	},
}
</script>

<style lang="scss">
.catalog {

	// .catalog__container
	&__container {
		display: flex;
		justify-content: space-between;
	}

	// // .catalog__filters
	// &__filters {
	// 	// flex: 0 1 21.39%;
	// }

	// .catalog__wrapper
	&__wrapper {
		display: flex;
		flex-direction: column;
		// justify-content: center;
		flex: 0 1 74.58%;
	}

	// .catalog__subcategories
	&__subcategories {}

	// .catalog__title
	&__title {
		font-weight: 700;
		font-size: 36px;
		line-height: 110%;
		margin-top: 30px;
		margin-bottom: 15px;
	}

	// .catalog__controls
	&__controls {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	// .catalog__products
	&__products {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
		// justify-content: center;
		gap: 20px;
		margin-top: 19px;
	}

	// .catalog__btn-more
	&__btn-more {
		font-weight: 700;
		font-size: 15px;
		line-height: 120%;
		max-width: max-content;
		padding: 15px 30px;
		margin: 40px auto 0 auto;
		border: 2px solid $blue-main;
		border-radius: 66px;
		color: $blue-main;
		transition: background 0.2s, color 0.2s;

		&:hover {
			background: $blue-main;
			color: $white;
		}
	}
}

.catalog-controls {

	// .catalog-controls__wrapper
	&__wrapper {}

	// .catalog-controls__quantity
	&__quantity {
		font-weight: 400;
		font-size: 16px;
		color: $gray-text;
	}

	// .catalog-controls__filter-per-page
	&__filter-per-page {
		display: flex;
		flex-direction: row;
		align-items: center;
		// justify-content: space-between;
	}

	// .catalog-controls__label
	&__label {
		font-weight: 400;
		font-size: 16px;
		line-height: 120%;
		margin-right: 8px;
		// text-align: right;
	}

	// .catalog-controls__btn-per-page
	&__btn-per-page {
		position: relative;
		font-weight: 400;
		font-size: 16px;
		line-height: 120%;
		color: $gray-text;
		transition: color 0.2s ease-in-out;

		&--active {
			color: $blue-main;
		}

		&:hover {
			color: $blue-main;
		}

		&:not(:last-child) {
			margin-right: 16px;

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: -8px;
				width: 1px;
				height: 13px;
				background: $gray-text;
			}
		}
	}

	// .catalog-controls__btn-per-page active
	&__btn-per-page--active {
		color: $blue-main;
	}

	// .catalog-controls__filter-view-mode
	&__filter-view-mode {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 12px;
	}

	// .catalog-controls__btn-view-mode
	&__btn-view-mode {
		color: $gray-text;
		transition: color 0.2s ease-in-out;

		&:hover {
			color: $blue-main;
		}
	}
}

@media (max-width: 1220px) {
	.catalog {
		&__wrapper {
			flex: 0 1 100%;
		}

		&__products {
			justify-content: center;
		}
	}
}

@media (max-width: 768px) {
	.catalog {
		&__controls {}
	}

	.catalog-controls {
		&__filter-per-page {
			display: none;
		}

		&__filter-view-mode {
			display: none;
		}
	}

}
</style>