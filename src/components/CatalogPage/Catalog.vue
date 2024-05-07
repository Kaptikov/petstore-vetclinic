<template>
	<div class="catalog">
		<div class="catalog__container _container">
			<Filters />
			<div class="catalog__wrapper">
				<Banner />
				<Subcategories />
				<div class="catalog__title">Корм</div>
				<div class="catalog__controls catalog-controls">
					<div class="catalog-controls__quantity">
						{{ 203 }} товара
					</div>
					<div class="catalog-controls__filter-per-page">
						<div class="catalog-controls__label">Показывать по:</div>
						<button class="catalog-controls__btn-per-page">9</button>
						<button class="catalog-controls__btn-per-page">12</button>
						<button class="catalog-controls__btn-per-page">18</button>
						<button class="catalog-controls__btn-per-page">24</button>
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
					<Select :options="options" />
				</div>
				<div class="catalog__products" v-if="productStore.products.length > 0">
					<!-- <CardProduct v-for="n in 5" :key="n" /> -->
					<CardProduct v-for="product of productStore.products" :key="product.id" :product="product" />
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
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/store/ProductStore'

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
	data() {
		return {
			options: [
				{ name: 'Самые популярные', value: 1 },
				{ name: 'Option 2', value: 2 },
				{ name: 'Option 3', value: 3 },
				{ name: 'Option 4', value: 4 },
			]
		}
	},

	props: {
		id: {
			type: String,
			default: '',
		},
	},

	setup(props) {
		const productStore = useProductStore()
		onMounted(() => {
			productStore.getProduct(props.id)
		})
		return {
			productStore,
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

	// .catalog__filters
	&__filters {
		flex: 0 1 21.39%;
	}

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
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
</style>