<template>
	<section class="popular-products">
		<div class="popular-products__container _container">
			<h3 class="popular-products__title">
				Популярные товары
			</h3>
			<div class="popular-products__wrapper">
				<div class="popular-products__tabs">
					<button class="popular-products__tab" v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
						:class="{ 'active': activeTab === index }">
						{{ tab.title }}
					</button>
				</div>
				<div class="popular-products__content">
					<div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
						<!-- {{ tab.content }} -->
						<swiper :slidesPerView="4" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules"
							:breakpoints="{
						996: {
							slidesPerView: 4,
							spaceBetween: 20
						},
						767: {
							slidesPerView: 3,
							spaceBetween: 10
						},
						320: {
							spaceBetween: 10,
							slidesPerView: 2
						}
					}" class="popular-products__swiper swiper">
							<swiper-slide class="popular-products__slide">
								<CardProduct />
							</swiper-slide>
							<swiper-slide class="popular-products__slide">
								<CardProduct />
							</swiper-slide>
							<swiper-slide class="popular-products__slide">
								<CardProduct />
							</swiper-slide>
							<swiper-slide class="popular-products__slide">
								<CardProduct />
							</swiper-slide>
							<swiper-slide class="popular-products__slide">
								<CardProduct />
							</swiper-slide>
							<swiper-slide class="popular-products__slide">
								<CardProduct />
							</swiper-slide>
							<swiper-slide class="popular-products__slide">
								<CardProduct />
							</swiper-slide>
						</swiper>
					</div>
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
	data() {
		return {
			activeTab: 0,
			tabs: [
				{
					title: 'Корм',
					content: ['Content for tab 1',
						'Content for tab 2',
						'Content for tab 3',
						'Content for tab 4',
						'Content for tab 5',
						'Content for tab 6']
				},
				{ title: 'Игрушки', content: 'Content for tab 2' },
				{ title: 'Лежанки', content: 'Content for tab 3' },
			],
		};
	},
};
</script>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
	border: 1px solid $gray-border;
	border-radius: 50%;
	width: 48px;
	height: 48px;
	// padding: ;
	// color: $blue-main;
	// background-color: $white-bg;
	transition: background 0.2s ease-in-out, border 0.2s ease-in-out;

	&:hover {
		background: $blue-main;
		border: 1px solid $blue-main;

		&::after {
			font-size: 0;
			content: url('../assets/img/arrow-swiper2.svg');
		}
	}

	&::after {
		font-size: 0;
		content: url('../assets/img/arrow-swiper.svg');
		position: absolute;
		top: 50%;
		left: 50%;
	}
}

.swiper {}

.swiper-button-prev,
.swiper-button-next {
	top: 24px;
	right: 0;
	z-index: 5;
}

.swiper-button-prev {
	right: 58px;
	left: auto;

	&::after {
		transform: translate(-50%, -50%);
	}
}

.swiper-button-next {
	&::after {
		transform: rotate(180deg) translate(50%, 50%);
	}
}

.popular-products {
	padding-bottom: 115px;
	background: $white-bg;

	// .popular-products__container
	&__container {}

	// .popular-products__title
	&__title {
		font-size: 36px;
		font-weight: 600;
		line-height: 110%;
		color: $black-text;
		margin-bottom: 6px;
	}

	// .popular-products__wrapper
	&__wrapper {
		position: relative;
	}

	// .popular-products__tabs
	&__tabs {
		position: absolute;
		top: 15px;
		left: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 25px;
		z-index: 2;
	}

	// .popular-products__tab
	&__tab {
		background: $white;
		border-radius: 87px;
		padding: 8px 20PX;
		font-size: 18px;
		font-weight: 400;
		line-height: 110%;
		color: $silver-text;
		transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

		&.active {
			background: #E2E6EF;
		}

		&:not(:last-child) {
			margin-right: 12px;
		}
	}

	// .popular-products__content
	&__content {}

	// .popular-products__swiper
	&__swiper {
		padding-top: 74px;
	}

	// .popular-products__slide
	&__slide {}
}
</style>