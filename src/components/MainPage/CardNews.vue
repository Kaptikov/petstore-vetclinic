<template>
	<article class="card-news">
		<a href="#" class="card-news__link">
			<div class="card-news__img">
				<img src="@/assets/img/news.jpg" alt="" />
			</div>
			<div class="card-news__content">
				<div class="card-news__title">
					Не забывайте ухаживать за лапками в морозы
				</div>
				<div class="card-news__text">
					Перед прогулкой: нанесите защитный воск. После прогулки: вымойте лапки и насухо протрите. Нанесите специальный
					крем на подушечки
				</div>
			</div>
		</a>
	</article>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.card-news {
	background: $white;
	border-radius: 20px;

	// .card-news__link
	&__link {
		display: block;
		padding: 10px 10px 15px 10px;

		&:hover {
			.card-news__title {
				color: $blue-main;
			}
		}
	}

	// .card-news__img
	&__img {

		margin-bottom: 15px;
	}

	&__img img {
		max-width: 263px;
		width: 100%;
		height: auto;
	}

	// .card-news__content
	&__content {
		display: flex;
		flex-direction: column;
	}

	// .card-news__title
	&__title {
		font-weight: 700;
		font-size: 18px;
		line-height: 120%;
		margin-bottom: 7px;
		transition: color 0.1s ease-in;
	}

	// .card-news__text
	&__text {
		font-weight: 400;
		font-size: 14px;
		line-height: 140%;
		color: $silver-text;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
}

@media (max-width: 768px) {
	.card-news {
		&__swiper {
			overflow: visible;
		}

		&__title {
			font-size: clamp(16px, 0.89rem + 0.49vw, 18px);
		}

		&__text {
			font-size: clamp(14px, 0.757rem + 0.25vw, 13px);
		}
	}
}
</style>