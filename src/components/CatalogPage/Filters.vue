<template>
	<aside сlass="catalog__filters catalog-filters filters">
		<div class="filters__container">

			<div class="filters__wrapper">
				<div class="filters__item">
					<button @click="show = !show" class="filters__text filters__text--dropdown">Бренд</button>
					<transition name="fade-up">
						<form v-if="show" action="" class="filters__form filters-form">
							<div class="filters-form__search">
								<button class="filters-form__btn filters-form__btn--search">
									<img src="@/assets/img/search-second.svg" alt="">
								</button>
								<input class="filters-form__input filters-form__input--search" type="search"
									placeholder="Поиск по брендам" />
							</div>
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="brand">
								Brit
							</label>
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="brand">
								Brit
							</label> <label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="brand">
								Brit
							</label>
						</form>
					</transition>
				</div>

				<div class="filters__item">
					<div class="filters__text">Ценовой диапазон</div>
					<form class="filters__form">
						<div class="filters__range filters-range">
							<input class="filters-range__input" type="range" value="0" min="0" max="99999" v-model="min"
								@input="filterFromPrice(min, max)">
							<input class="filters-range__input" type="range" value="99999" min="0" max="99999" v-model="max"
								@input="filterFromPrice(min, max)">
						</div>
						<div class="filters-range__text">
							<input class="filters-range__input-text" type="text" placeholder="100" v-model="min"
								@input="filterFromPrice(min, max)" />
							<input class="filters-range__input-text" type="text" placeholder="100" v-model="max"
								@input="filterFromPrice(min, max)" />
						</div>
						<!-- <p class="filters-range__text">Диапазон: {{ rangeValues.min }} - {{ rangeValues.max }}</p> -->
					</form>
				</div>

				<div class="filters__item">
					<button @click="show = !show" class="filters__text filters__text--dropdown">Вкус</button>
					<transition name="fade-up">
						<form v-if="show" action="" class="filters__form filters-form">
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Курица
							</label>
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Индейка
							</label> <label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Рыба
							</label>
						</form>
					</transition>
				</div>

				<div class="filters__item">
					<button @click="show = !show" class="filters__text filters__text--dropdown">Показания</button>
					<transition name="fade-up">
						<form v-if="show" action="" class="filters__form filters-form">
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Курица
							</label>
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Индейка
							</label> <label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Рыба
							</label>
						</form>
					</transition>
				</div>

				<div class="filters__item">
					<button @click="show = !show" class="filters__text filters__text--dropdown">Возраст</button>
					<transition name="fade-up">
						<form v-if="show" action="" class="filters__form filters-form">
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Курица
							</label>
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Индейка
							</label> <label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Рыба
							</label>
						</form>
					</transition>
				</div>

				<div class="filters__item">
					<button @click="show = !show" class="filters__text filters__text--dropdown">Класс корма</button>
					<transition name="fade-up">
						<form v-if="show" action="" class="filters__form filters-form">
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Курица
							</label>
							<label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Индейка
							</label> <label class="filters-form__label">
								<input class="filters-form__input" type="checkbox" name="flavour">
								Рыба
							</label>
						</form>
					</transition>
				</div>
			</div>
			<button class="filters__btn--additional">
				Дополнительные фильтры
				<!-- <img src="@/assets/img/plus.svg" alt=""> -->
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 3.33337V12.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
					<path d="M3.33203 8H12.6654" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
			</button>
			<div class="filters__controls filters-controls">
				<button class="filters-controls__btn filters-controls__btn--search">
					<img src="@/assets/img/search-mini.svg" alt="">
					Искать
				</button>
				<button class="filters-controls__btn filters-controls__btn--reset">Сбросить фильтр</button>
			</div>
		</div>
	</aside>
</template>

<script>
import { ref, computed, } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/store/ProductStore.js';

export default {
	data() {
		return {
			items: [
				{ id: 1, name: 'Элемент 1' },
				{ id: 2, name: 'Элемент 2' },
				{ id: 3, name: 'Элемент 3' }
			],
			rangeValues: {
				min: 0,
				max: 99999
			}
		};
	},
	props: {
		products: {}
	},
	methods: {
		toggleFilters(category) {
			category.showsubcategory = !category.showsubcategory
		},
	},
	setup() {
		const show = ref(false)
		const min = ref(1);
		const max = ref(99999);
		const route = useRoute()
		// const categoryId = route.params.id
		const productStore = useProductStore()

		function filterFromPrice(min, max) {
			const categoryId = route.params.id
			productStore.getFilteredProducts(categoryId, min, max);
		}

		return {
			productStore,
			show,
			filterFromPrice,
			min,
			max
		}
	}
}

</script>

<style lang="scss">
.fade-up-enter-active {
	transition: all 0.2s ease-out,
}

.fade-up-leave-active {
	transition: all 0.2s;
}

.fade-up-enter-from,
.fade-up-leave-to {
	transform: translateY(-5px);
	opacity: 0;
}

.filters {

	// .filters__container
	&__container {}

	// .filters__wrapper
	&__wrapper {
		display: flex;
		flex-direction: column;
	}

	// .filters__item
	&__item {
		position: relative;
		padding-bottom: 20px;
		margin-bottom: 20px;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background: $gray-bg;
		}
	}

	// .filters__text
	&__text {
		font-weight: 400;
		font-size: 16px;
		color: $gray-text;
		// padding-bottom: 12px;
		width: 100%;
		text-align: start;
	}

	// .filters__text--dropdown
	&__text--dropdown {
		position: relative;
		transition: color 0.2s ease-in-out;

		&::after {
			content: '';
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			width: 16px;
			height: 16px;
			background: url('/src/assets/img/arrow-dropdown.svg') no-repeat 100%;
		}

		&:hover {
			color: $black-text;
		}
	}

	// .filters__form
	&__form {
		display: flex;
		flex-direction: column;
		margin-top: 12px;
	}

	// .filters__range
	&__range {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	// .filters__controls
	&__controls {
		display: flex;
		flex-direction: column;
		margin-top: 19px;
	}

	// .filters__btn--additional
	&__btn--additional {
		display: flex;
		align-items: center;
		font-weight: 400;
		font-size: 17px;
		color: $blue-main;
		width: max-content;
		text-align: start;
		transition: color 0.2s ease-in-out;

		&:hover {
			color: $blue-second;
		}
	}

	&__btn--additional svg {
		margin-left: 11px;
	}
}

.filters-form {

	// .filters-form__search
	&__search {
		position: relative;
		display: flex;
		flex-direction: row;
		background: $white;
		margin-bottom: 20px;
		outline: 1px solid #dce0eb;
		border-radius: 6px;
	}

	// .filters-form__btn
	&__btn {}

	// .filters-form__btn--search
	&__btn--search {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 10px;
		z-index: 2;
	}

	// .filters-form__input
	&__input {}

	// .filters-form__input--search
	&__input--search {
		// position: relative;
		// border: 1px solid #dce0eb;
		// border-radius: 6px;
		padding: 12px 20px 12px 44px;
		width: 255px;
		height: 44px;
		// background: $white;
		// margin-bottom: 20px;

		&:focus {
			outline: none;
		}

		&::placeholder {
			font-weight: 400;
			font-size: 17px;
			color: $gray-text;
		}
	}

	// .filters-form__label
	&__label {
		display: flex;
		flex-direction: row;
		align-content: center;
		font-weight: 400;
		font-size: 16px;

		& input[type="checkbox"] {
			width: 16px;
			height: 16px;
			margin-right: 10px;
		}

		&:not(:last-child) {
			margin-bottom: 12px;
		}
	}
}

.filters-range {

	// .filters-range__input
	&__input {
		// -webkit-appearance: none; 
		// appearance: none;
		// width: 100%;
		height: 1px;
		margin-bottom: 15px;

		&:focus {
			// outline: none; 
		}

		&:first-child {
			transform: rotateY(180deg);
		}
	}

	// .filters-range__text
	&__text {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			transform: translate(-50%);
			left: 50%;
			width: 10px;
			height: 2px;
			background: $gray-text;
		}
	}

	// .filters-range__input-text
	&__input-text {
		max-width: 117px;
		width: 100%;
		font-weight: 400;
		font-size: 18px;
		text-align: center;
		color: $black-text;
		border: 1px solid #dce0eb;
		border-radius: 6px;
		padding: 10px 20px 7px 20px;
		width: 117px;
		height: 42px;
		background: $white;

		&::placeholder {
			color: $gray-text;
		}


	}
}

.filters-controls {

	// .filters__btn
	&__btn {

		font-size: 20px;
		padding: 13px 0;
		width: 100%;
		border-radius: 71px;
	}

	// .filters__btn--search
	&__btn--search {
		font-weight: 700;
		background: $blue-main;
		color: $white;
		margin-bottom: 10px;
		transition: background 0.2s ease-in;

		&:hover {
			background: $blue-second;
		}
	}

	// .filters__btn--reset
	&__btn--reset {
		border: 1px solid $gray-border;
		color: $gray-text;
		transition: border-color 0.2s ease-in, color 0.2s ease-in;

		&:hover {
			color: $black-text;
			border-color: $blue-second;
		}
	}
}
</style>