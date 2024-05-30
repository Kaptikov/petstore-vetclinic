<template>
	<div class="catalog-controls__select select">
		<div class="select__label" @click="toggleDropdown">
			{{ selectedOption }}
			<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L5 5L9 1" stroke="#606C8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
		<transition name="fade-up">
			<div class="select__options" v-if="isDropdownVisible">
				<div class="select__option" v-for="(option, index) in options" :key="index" @click="toggleOptionSelect(option)"
					:class="{ 'select__option--active': option.name === selectedOption }">
					{{ option.name }}
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { defineProps, ref, onMounted, computed, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/store/ProductStore.js';

export default {
	props: {
		// options: {
		// 	type: Array,
		// required: true,
		// 	default() {
		// 		return []
		// 	}
		// },
		options: {
			type: Array,
			required: true,
			default() {
				return []
			}
		},
		products: {}
	},
	data() {
		return {
			selectedOption: '',
			isDropdownVisible: false,

		};
	},
	// methods: {
	// 	toggleOptionSelect(option) {
	// 		if (option.value === 1) {
	// 			this.$store.dispatch('getSortedProductsbyDescending', this.categoryId);
	// 		} else if (option.value === 2) {
	// 			this.$store.dispatch('getSortedProductsbyAscending', this.categoryId);
	// 		}
	// 		this.selectedOption = option.name;
	// 		this.isDropdownVisible = false;
	// 	},
	// 	toggleDropdown() {
	// 		this.isDropdownVisible = !this.isDropdownVisible;
	// 	},

	// 	hideDropdown(event) {
	// 		const target = event.target;
	// 		if (!this.$el.contains(target)) {
	// 			this.isDropdownVisible = false;
	// 		}
	// 	},
	// },
	// mounted() {
	// 	if (this.options.length > 0) {
	// 		this.selectedOption = this.options[0].name;
	// 	}
	// 	document.addEventListener('click', this.hideDropdown);
	// },
	// beforeUnmount() {
	// 	document.removeEventListener('click', this.hideDropdown);
	// },

	setup(props) {
		const route = useRoute()
		const productStore = useProductStore()
		const categoryId = route.params.id
		const selectedOption = ref('');
		const isDropdownVisible = ref(false);

		const toggleOptionSelect = (option) => {
			const categoryId = route.params.id
			if (option.value === 1) {
				productStore.getSortedProductsbyAscending(categoryId);
			} else if (option.value === 2) {
				productStore.getSortedProductsbyDescending(categoryId);
			}
			selectedOption.value = option.name;
			isDropdownVisible.value = false;
		};

		const toggleDropdown = () => {
			isDropdownVisible.value = !isDropdownVisible.value;
		};

		const hideDropdown = (event) => {
			const target = event.target;
			if (!event.target.closest('.catalog-controls__select')) {
				isDropdownVisible.value = false;
			}
		};

		onMounted(() => {
			if (props.options.length > 0) {
				selectedOption.value = props.options[0].name;
			}
			document.addEventListener('click', hideDropdown);
		});

		onBeforeUnmount(() => {
			document.removeEventListener('click', hideDropdown);
		});

		return {
			selectedOption,
			isDropdownVisible,
			toggleOptionSelect,
			toggleDropdown,
			categoryId,
		};
	},
}
</script>
<style lang="scss">
.catalog-controls {

	// .catalog-controls__select
	&__select {
		position: relative;
		flex: 0 1 18.7851%;
	}
}

.select {

	// .select__label
	&__label {
		display: flex;
		align-items: center;
		font-weight: 400;
		font-size: 16px;
		max-width: max-content;
		margin-left: auto;
		cursor: pointer;

		& svg {
			margin-left: 7px;
		}
	}

	// .select__options
	&__options {
		position: absolute;
		top: 26px;
		right: 4px;
		display: flex;
		flex-direction: column;
		background: $white;
		// outline: 1px solid $gray-border;
		border-radius: 20px;
		// max-width: 205px;
		width: 205px;
		overflow: hidden;
		z-index: 5;
	}

	// .select__option
	&__option {
		cursor: pointer;
		font-weight: 600;
		font-size: 16px;
		line-height: 120%;
		padding: 10px 20px;

		&:hover {
			background: rgba(227, 230, 249, 0.3);
		}
	}

	&__option--active {
		color: $blue-main;
	}
}
</style>