<template>
	<section class="our-brands">
		<div class="our-brands__container _container">
			<div class="our-brands__images">
				<div class="our-brands__image">
					<img src="@/assets/img/brand-1.png" alt="" />
				</div>
				<div class="our-brands__image">
					<img src="@/assets/img/brand-2.png" alt="" />
				</div>
				<div class="our-brands__image">
					<img src="@/assets/img/brand-3.png" alt="" />
				</div>
				<div class="our-brands__image">
					<img src="@/assets/img/brand-4.png" alt="" />
				</div>
				<div class="our-brands__image">
					<img src="@/assets/img/brand-5.png" alt="" />
				</div>
				<div class="our-brands__image">
					<img src="@/assets/img/brand-6.png" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {

};
</script>

<style lang="scss">
.our-brands {
	position: relative;
	overflow: hidden;
	padding-top: 75px;
	padding-bottom: 45px;

	// .our-brands__container
	&__container {}

	// .our-brands__images
	&__images {
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}

	// .our-brands__image
	&__image {
		position: relative;
		max-width: 182px;
		width: 100%;
		height: 113px;

		& img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}

@media (max-width: 996px) {
	.our-brands {
		&__images {
			animation: brand 10s linear infinite;
		}

		// .our-brands__image
		&__image {
			// animation: brand 5s linear infinite;
			flex-shrink: 0;
		}
	}
}

@media (max-width: 556px) {
	.our-brands {
		padding: 50px 0;

		// .our-brands__image
		&__image {
			max-width: 113px;
			width: 100%;
			height: 70px;
		}
	}
}

@keyframes brand {
	0% {
		transform: translateX(100%);
	}

	to {
		transform: translateX(-150%);
	}
}
</style>