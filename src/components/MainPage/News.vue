<template>
	<section class="news">
		<div class="news__container _container">
			<h4 class="news__title title">Новости и полезные статьи</h4>
			<swiper :spaceBetween="20" :loop="false" :navigation="true" :centeredSlides="false" :modules="modules"
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
					centeredSlides: true,
					slidesPerView: 2,
					spaceBetween: 10,
				}
			}" class="news__swiper swiper">
				<swiper-slide class="news__slide">
					<CardNews />
				</swiper-slide>
				<swiper-slide class="news__slide">
					<CardNews />
				</swiper-slide>
				<swiper-slide class="news__slide">
					<CardNews />
				</swiper-slide>
				<swiper-slide class="news__slide">
					<CardNews />
				</swiper-slide>
				<swiper-slide class="news__slide">
					<CardNews />
				</swiper-slide>
			</swiper>
		</div>
	</section>
</template>

<script>
import CardNews from '@/components/MainPage/CardNews.vue';
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
		CardNews,
	},
	setup() {
		return {
			modules: [Navigation],
		};
	},
};
</script>

<style lang="scss">
.news {
	background: $white-bg;
	padding: 98px 0 85px 0;

	// .news__container
	&__container {
		// position: relative;
	}

	// .news__title
	&__title {
		position: relative;
		margin-bottom: -48px;
		font-weight: 700;
		font-size: 36px;
		line-height: 110%;
		max-width: max-content;
		z-index: 2;
	}

	// .news__swiper
	&__swiper {
		padding-top: 78px;
		width: 100%;
	}

	// .news__slide
	&__slide {
		// max-width: 283px;
	}
}

@media (max-width: 768px) {
	.news {
		&__swiper {
			overflow: visible;
		}

		&__slide {
			max-width: 283px;
			// width: 283px;
		}
	}
}
</style>