<template>
	<section class="promotions">
		<div class="promotions__container _container">
			<div class="promotions__wrapper">
				<h4 class="promotions__title title">Акции</h4>
				<swiper :slidesPerView="2" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" :breakpoints="{
					996: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					556: {
						slidesPerView: 1,
						paceBetween: 10
					},
					360: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					320: {
						slidesPerView: 1,
					}
				}" class="promotions__swiper swiper">
					<swiper-slide class="promotions__slide">
						<CardProduct :isPromotion="true" />
					</swiper-slide>
					<swiper-slide class="promotions__slide">
						<CardProduct :isPromotion="true" />
					</swiper-slide>
					<swiper-slide class="promotions__slide">
						<CardProduct :isPromotion="true" />
					</swiper-slide>
				</swiper>
				<div class="promotions__img">
					<img src="@/assets/img/promotions-bg.png" alt="">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default {
	components: {
		Swiper,
		SwiperSlide,
		CardProduct,
	},
	setup() {
		return {
			modules: [Navigation],
		};
	},

};
</script>

<style lang="scss">
.promotions .swiper-button-prev,
.promotions .swiper-button-next {
	border-color: $white;

	&::after {
		content: url('../assets/img/arrow-swiper2.svg');
	}
}

.promotions .swiper-button-prev {}

.promotions .swiper-button-next {}

.promotions {
	padding: 58px 0 53px 0;
	// background: $blue-bg url('../assets/img/promotions-bg.svg') no-repeat -66px center;

	// .promotions__container
	&__container {

		padding-top: 53px;
		padding-bottom: 50px;


	}

	// .promotions__wrapper
	&__wrapper {
		position: relative;
		// background: $blue-bg url('../assets/img/promotions-bg.svg') no-repeat -66px center;
		background: $blue-bg;
		border-radius: 20px;
		padding-top: clamp(33px, 1.488rem + 2.55vw, 55px);
		padding-left: clamp(10px, -0.393rem + 4.52vw, 49px);
		padding-bottom: clamp(11px, -0.33rem + 4.52vw, 50px);
		padding-right: clamp(10px, -0.393rem + 4.52vw, 49px);
	}

	// .promotions__title
	&__title {
		position: relative;
		max-width: max-content;
		margin-bottom: -58px;
		color: $white;
		z-index: 3;
	}

	// .promotions__swiper
	&__swiper {
		padding-top: 88px;
	}

	// .promotions__slide
	&__slide {
		position: relative;
		z-index: 1;
	}

	// .promotions__img
	&__img {
		position: absolute;
		top: -147px;
		left: -66px;
		width: 56.627%;
		padding-top: 59.64%;
		// height: 100%;
		z-index: 0;

	}

	&__img img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		z-index: 0;
	}
}

@media (max-width: 768px) {

	.promotions .swiper-button-prev {
		// top: 30;
		left: 0;
	}

	.promotions .swiper-button-prev,
	.promotions .swiper-button-next {
		top: 42px;
		// left: 0;
	}

	.promotions {
		&__title {
			// text-align: center;
			margin-left: auto;
			margin-right: auto;
		}
	}
}
</style>