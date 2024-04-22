<template>
	<section class="advantages">
		<div class="advantages__container _container">
			<div class="advantages__text">
				<h3 class="advantages__title">Теперь ещё удобнее!</h3>
				<p class="advantages__description">Заказывайте в магазине “Матроскин” не выходя из дома! Все товары
					лицензированыи
					проходят проверку оригинальности. Заказывайте в магазине “Матроскин” не выходя из дома!</p>
			</div>
			<div class="advantages__items">
				<div class="advantages__item advantages-item">
					<div class="advantages-item__icon">
						<img src="@/assets/img/selection.svg" alt="">
					</div>
					<div class="advantages-item__title">Широкий выбор</div>
				</div>
				<div class="advantages__item advantages-item">
					<div class="advantages-item__icon">
						<img src="@/assets/img/uniqueness.svg" alt="">
					</div>
					<div class="advantages-item__title">Уникальность товаров</div>
				</div>
				<div class="advantages__item advantages-item">
					<div class="advantages-item__icon">
						<img src="@/assets/img/delivery.svg" alt="">
					</div>
					<div class="advantages-item__title">Быстрая доставка</div>
				</div>
				<div class="advantages__item advantages-item">
					<div class="advantages-item__icon">
						<img src="@/assets/img/discount.svg" alt="">
					</div>
					<div class="advantages-item__title">Доступные цены</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.advantages {
	padding-top: 45px;
	padding-bottom: 110px;

	// .advantages__container
	&__container {
		display: grid;
		grid-template-columns: 36.912% 1fr;
		flex-direction: row;
		justify-content: space-between;
		align-content: baseline;
		gap: 65px;
	}

	// .advantages__text
	&__text {
		display: flex;
		flex-direction: column;
	}

	// .advantages__title
	&__title {
		font-size: 36px;
		font-weight: 600;
		line-height: 110%;
		color: $black-text;
		margin-top: 13px;
		margin-bottom: 20px;
	}

	// .advantages__description
	&__description {
		font-size: 16px;
		font-weight: 400;
		line-height: 140%;
		// max-width: 440px;
		// width: 100%;
		color: $silver-text;
	}

	// .advantages__items
	&__items {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		// flex-direction: row;
		// justify-content: space-between;
		flex-wrap: wrap;
		gap: 23px;
		// flex: 0 1 56%;
	}

	// .advantages__item
	&__item {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 30px 20px;
		// max-width: 332px;
		width: 100%;
		background: $white-bg;
		border-radius: 20px;
	}
}

.advantages-item {

	// .advantages-item__icon
	&__icon {
		margin-right: 20px;
		white-space: nowrap;
	}

	// .advantages-item__title
	&__title {
		font-size: 18px;
		font-weight: 500;
		line-height: 110%;
		color: $black-text;
		// white-space: nowrap;
	}
}

@media (max-width: 996px) {
	.advantages {

		// .advantages__container
		&__container {
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr;
			gap: 30px;
		}

		&__text {
			width: 80%;
		}

		&__items {
			gap: 17px;
		}
	}
}

@media (max-width: 556px) {
	.advantages {
		padding-bottom: 70px;

		&__container {
			gap: 15px;
		}

		&__text {
			width: 100%;

		}

		&__item {
			flex-direction: column;
			padding: 30px 10px;
			text-align: center;

		}

	}

	.advantages-item {
		&__icon {
			margin-right: 0;
			margin-bottom: 20px;
		}
	}
}
</style>