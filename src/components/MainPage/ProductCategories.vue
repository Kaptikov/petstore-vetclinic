<template>
	<section class="product-categories">
		<div class="product-categories__container _container">
			<div class="product-categories__cards" v-if="categoryStore.categories.length > 0">
				<category-card v-for="category in categoryStore.categories" :key="category.id" :category="category"
					@mouseover="handleMouseOver(category.id)" @mouseleave="handleMouseLeave" />
				<router-link to="`/catalog/${category.id}`" class="product-categories__card">
					<div class="product-categories__card-label">Клиника</div>
					<img src="@/assets/img/category-clinic.png" alt="" />
				</router-link>
			</div>
			<transition name="slide-fade">
				<category-dropdown-menu v-if="categoryStore.categories.length > 0" :subcategory="categoryStore.subcategories"
					:subsubcategory="categoryStore.subsubcategories" />
			</transition>
		</div>
	</section>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useCategoryStore } from '@/store/CategoryStore'
import CategoryCard from '@/components/MainPage/CategoryCard.vue'
import CategoryDropdownMenu from '@/components/MainPage/CategoryDropdownMenu.vue'

export default {
	components: {
		CategoryCard,
		CategoryDropdownMenu
	},
	setup() {
		const categoryStore = useCategoryStore()
		const parentId = ref(null)
		parentId.value = 2
		const handleMouseOver = (categoryId) => {
			parentId.value = categoryId
			console.log("parentId", parentId);
			categoryStore.getSubcategories(parentId.value);
			// categoryStore.getSubSubcategories(parentId.value);
		}
		const handleMouseLeave = () => {
			parentId.value = null
		}

		onMounted(() => {
			categoryStore.getCategories()
			categoryStore.getSubcategories(parentId.value);
			//categoryStore.getSubSubcategories(parentId.value);
		})

		return {
			categoryStore,
			parentId,
			handleMouseOver,
			handleMouseLeave
		}
	},
}
</script>

<style lang="scss">
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

.product-categories {
	position: relative;
	background: $white-bg;
	z-index: 2;

	// .product-categories__container
	&__container {
		padding-top: 28px;
		padding-bottom: 110px;
	}

	// .product-categories__cards
	&__cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(155px, 182px));
		justify-content: center;
		gap: 20px;
	}

	// .product-categories__card
	&__card {
		position: relative;
		border-radius: 20px;
		outline: 3px solid transparent;
		transition: outline 0.3s ease-in-out;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&:hover {
			transition: outline 0.3s ease-in-out;
			outline: 3px solid $blue-main;
		}

		&--active {
			outline: 3px solid $blue-main;
			border-radius: 20px;
		}
	}

	&__card.with-outline {
		outline: 3px solid $blue-main;
	}

	&__card-label {
		position: absolute;
		top: 18px;
		left: 21px;
		font-size: 16px;
		font-weight: 600;
	}

	// .product-categories__dropdown-menu
	&__dropdown-menu {
		// display: none;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		// align-content: baseline;
		background: $white;
		border-radius: 20px;
		margin-top: 13px;
		padding: 30px 111px 30px 50px;
		// transition: 0.2s ease-in-out;
	}
}

.product-categories__dropdown-menu {

	// .product-categories__dropdown-menu__column
	&__column {}

	// .product-categories__dropdown-menu__label
	&__label {
		font-size: 18px;
		font-weight: 600;
		line-height: 120%;
		margin-bottom: 16px;
	}

	// .product-categories__dropdown-menu__list
	&__list {}

	// .product-categories__dropdown-menu__item
	&__item {
		font-size: 16px;
		margin-left: -20px;

		&:not(:last-child) {
			margin-bottom: 18px;
		}
	}

	// .product-categories__dropdown-menu__link
	&__link {
		padding: 9px 20px;
		border-radius: 76px;

		opacity: 0.8;
		transition: 0.2s ease-in-out;

		&:hover {
			background: #f7f8fd;
			border-radius: 76px;
			opacity: 1;
			color: $black-text;
			transition: 0.2s ease;
		}

	}
}
</style>
