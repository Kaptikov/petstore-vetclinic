<template>
	<section class="product-categories">
		<div class="product-categories__container _container">
			<div class="product-categories__cards">
				<button @click="show = !show" class="product-categories__card" :class="{ 'with-outline': show }">
					<div class="product-categories__card-label">Для собак</div>
					<img src="@/assets/img/card-dog.png" alt="" />
				</button>
				<button class="product-categories__card">
					<div class="product-categories__card-label">Для собак</div>
					<img src="@/assets/img/card-cat.png" alt="" />
				</button>
				<button class="product-categories__card">
					<div class="product-categories__card-label">Для собак</div>
					<img src="@/assets/img/card-bird.png" alt="" />
				</button>
				<button class="product-categories__card">
					<div class="product-categories__card-label">Для собак</div>
					<img src="@/assets/img/card-rodent.png" alt="" />
				</button>
				<button class="product-categories__card">
					<div class="product-categories__card-label">Для собак</div>
					<img src="@/assets/img/card-fish.png" alt="" />
				</button>
				<button class="product-categories__card">
					<div class="product-categories__card-label">Для собак</div>
					<img src="@/assets/img/card-clinic.png" alt="" />
				</button>
				<!-- <p v-if="show">hello</p> -->
			</div>

			<transition name="slide-fade">
				<div v-if="show" class="product-categories__dropdown-menu">
					<div class="product-categories__dropdown-menu__column">
						<div class="product-categories__dropdown-menu__label">Корм</div>
						<ul class="product-categories__dropdown-menu__list">
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Сухой корм</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Консервы</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Пресервы</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Лакомства</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Витамины и добавки</a>
							</li>
						</ul>
					</div>
					<div class="product-categories__dropdown-menu__column">
						<div class="product-categories__dropdown-menu__label">
							Диетический Корм
						</div>
						<ul class="product-categories__dropdown-menu__list">
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Сухой корм</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Консервы</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Пресервы</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Лакомства</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Витамины и добавки</a>
							</li>
						</ul>
					</div>
					<div class="product-categories__dropdown-menu__column">
						<div class="product-categories__dropdown-menu__label">
							Содержание и уход
						</div>
						<ul class="product-categories__dropdown-menu__list">
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Домики и лежаки</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Игрушки</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Транспортировка, переноски</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Лакомства</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Туалеты, пеленки и подгузники</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Клиника</a>
							</li>
							<li class="product-categories__dropdown-menu__item">
								<a href="" class="product-categories__dropdown-menu__link">Посуда</a>
							</li>
						</ul>
					</div>
				</div>
			</transition>
		</div>
	</section>
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
		transition: outline 0.2s ease;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&:hover {
			outline: 3px solid $white;
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
