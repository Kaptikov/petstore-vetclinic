<template>
	<div class="order-history">
		<div class="order-history__wrapper">
			<h4 class="profile-page__title order-history__title">История заказов</h4>
			<template v-if="orderStore.orders && orderStore.orders.length > 0">
				<div class="order-history__items">
					<OrderHistoryCard v-for="order of orderStore.orders" :key="order.id" :order="order" />
				</div>
			</template>
			<template v-else>
				<h3 class="profile-page__subtitle">Заказы отсутствуют</h3>
			</template>
		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue';
import OrderHistoryCard from '@/components/ProfilePage/OrderHistoryCard.vue'
import { useOrderStore } from '@/store/OrderStore.js';
export default {
	components: {
		OrderHistoryCard,
	},

	props: {
		id: {}
	},
	setup(props) {
		const orderStore = useOrderStore();

		onMounted(() => {
			orderStore.getOrders(props.id);
		})
		return {
			orderStore
		}
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

	// .profile-page__subtitle
	&__subtitle {
		font-weight: 400;
		font-size: 21px;
		line-height: 100%;
	}
}
</style>