<template>
	<section class="locations">
		<div class="locations__container _container">
			<div class="locations__map">
				<img class="locations__map-img" src="@/assets/img/map.jpg" alt="">
				<img class="locations__map-flag" src="@/assets/img/flags.svg" alt="">
			</div>
			<div class="locations__content">
				<h4 class="locations__title">Заходите в гости!</h4>
				<div class="locations__description">
					Любите ходить по магазинам или хотите оформить самовывоз? Отлично! Мы работаем
					с 9 утра до 9 вечера, наши магазины распологаютс по адресам:
				</div>
				<div class="locations__addresses">
					<div class="locations__address">
						Северная улица, 74А
					</div>
					<div class="locations__address">
						Омская улица, 12
					</div>
					<div class="locations__address">
						Профсоюзная улица, 7
					</div>
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
.locations {

	// .locations__container
	&__container {
		display: flex;
		justify-content: space-between;
		gap: 50px;
		// align-items: center;
		padding-bottom: clamp(70px, 3.331rem + 4.64vw, 110px);
	}

	// .locations__map
	&__map {
		position: relative;
		max-width: 658px;
		min-width: 500px;
		width: 100%;
	}

	&__map-img {
		// max-width: 100%;
		width: 100%;
		height: auto;
	}

	&__map-flag {
		position: absolute;
		top: -15px;
		left: -26px;
		width: clamp(9.188rem, 7.308rem + 8.35vw, 13.688rem);
		height: auto;
	}

	// .locations__content
	&__content {
		display: flex;
		flex-direction: column;
		margin-top: clamp(0rem, -8.67rem + 18.06vw, 5.125rem);
		margin-right: clamp(0rem, -12.119rem + 19.47vw, 2.75rem);
	}

	// .locations__title
	&__title {
		font-weight: 700;
		font-size: clamp(1.5rem, 1.187rem + 1.39vw, 2.25rem);
		line-height: 110%;
		margin-bottom: 20px;
	}

	// .locations__description
	&__description {
		font-weight: 400;
		font-size: 16px;
		line-height: 140%;
		color: $silver-text;
	}

	// .locations__addresses
	&__addresses {
		display: flex;
		flex-direction: column;
		// margin-top: 15px;


	}

	// .locations__address
	&__address {
		position: relative;
		font-weight: 400;
		font-size: 16px;
		line-height: 140%;
		color: #000;
		padding-left: 26px;
		margin-top: 15px;

		&:not(:last-child) {
			// margin-bottom: 15px;
		}

		&::before {
			content: "";
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			width: 15px;
			height: 17px;
			background: url('../assets/img/marker.svg') no-repeat 100%;
		}
	}
}

@media (max-width: 996px) {
	.locations {
		&__container {
			flex-direction: column;
			gap: clamp(12px, -0.241rem + 4.4vw, 40px);
		}

		&__map {
			min-width: 100%;
			order: 1;
		}

		&__map-flag {
			top: -11px;
			left: -9px;
		}

		&__content {
			align-items: center;
		}

		&__description {
			text-align: center;
		}

		&__content {
			margin-top: 0;
		}

		&__addresses {
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
		}

		&__address {
			margin-top: 30px;
			margin-bottom: 0;
			white-space: nowrap;
		}
	}
}

@media (max-width: 610px) {
	.locations {
		&__container {
			// gap: 12px;
		}

		&__map-flag {
			top: -3px;
			left: 0;
		}

		&__addresses {
			flex-direction: column;
		}

		&__address {
			margin-top: 10px;

			&:first-child {
				margin-top: 30px
			}
		}
	}
}
</style>