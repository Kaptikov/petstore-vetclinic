<template>
	<div class="banner">
		<div class="banner__cantainer">
			<div class="banner__wrapper">
				<h4 class="banner__title">Бесплатная доставка при заказе от 2000₽</h4>
				<div href="#" class="banner__subtitle">При заказе до 2000₽, доставка 150₽.</div>
			</div>

			<div class="banner__img-car">
				<img src="@/assets/img/banner-car.svg" alt="">
			</div>
			<div class="banner__img-bg">
				<img src="@/assets/img/banner-bg.svg" alt="">
			</div>
		</div>
	</div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.banner {

	// .banner__cantainer
	&__cantainer {
		position: relative;
		display: flex;
		flex-direction: row;
		gap: clamp(2.5rem, -19.535rem + 35.4vw, 7.5rem);
		background: $blue-bg-second;
		border-radius: 20px;
		color: $white;
		overflow: hidden;
		padding: 40px 40px 74px 40px;
	}

	// .banner__wrapper
	&__wrapper {
		z-index: 1;
	}

	// .banner__title
	&__title {
		font-weight: 700;
		font-size: clamp(21px, 0.869rem + 1.97vw, 38px);
		line-height: 110%;
		max-width: 422px;
		margin-bottom: 20px;
	}

	// .banner__subtitle
	&__subtitle {
		font-weight: 400;
		font-size: 16px;
		line-height: 140%;
	}

	// .banner__img-car
	&__img-car {
		z-index: 1;
	}

	// .banner__img-bg
	&__img-bg {
		position: absolute;
		bottom: -139px;
		right: -8px;
		max-width: 753px;
		width: 100%;
		padding-bottom: 85.714%;
		// height: 762px;
		min-height: 283px;
		z-index: 0;
		// height: 100%;

		& img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
}

@media (max-width: 768px) {
	.banner {
		&__img-car {
			display: none;
		}
	}
}
</style>