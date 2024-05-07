<template>
	<div class="order-history">
		<div class="order-history__wrapper">
			<h4 class="profile-page__title order-history__title">История заказов</h4>
			<div class="order-history__items">
				<OrderHistoryCard />
				<OrderHistoryCard />
			</div>
		</div>
	</div>
</template>

<script>
import OrderHistoryCard from '@/components/ProfilePage/OrderHistoryCard.vue'

export default {
	components: {
		OrderHistoryCard,
	}
}
</script>

<style lang="scss">
.order-history {

	// .order-history__wrapper
	&__wrapper {
		// display: flex;
		// flex-direction: column;
		// gap: 20px;
	}

	// .order-history__title
	&__title {}

	// .order-history__items
	&__items {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
}

.profile-page {

	// .profile-page__title
	&__title {}
}
</style>