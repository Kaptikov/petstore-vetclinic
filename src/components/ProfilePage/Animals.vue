<template>
	<div class="animals">
		<h4 class="animals__title">Мои питомцы</h4>
		<div class="animals__wrapper">
			<PopupMenuAnimalsCreate :user="userStore.user" />
			<div class="animals__cards" v-if="animalStore.animals.length > 0">
				<AnimalsCard v-for="animals in animalStore.animals" :key="animals.id" :animals="animals" />
			</div>
		</div>
	</div>
</template>

<script>
import AnimalsCard from '@/components/ProfilePage/AnimalsCard.vue'
import PopupMenuAnimalsCreate from '@/components/ProfilePage/PopupMenuAnimalsCreate.vue'

import { onMounted } from 'vue';

import { useAnimalStore } from '@/store/AnimalStore.js';
import { useUserStore } from '@/store/UserStore.js';


export default {
	components: {
		AnimalsCard,
		PopupMenuAnimalsCreate,
	},

	props: {
		id: {
			// type: String,
			// required: true,
			// default: '',
		},
	},
	setup(props) {
		const animalStore = useAnimalStore();
		const userStore = useUserStore();
		// const userId = props.id;
		// // console.log(userId);

		onMounted(() => {
			animalStore.getAnimals(props.id);
		});

		return {
			animalStore,
			userStore
		}
	}
}
</script>

<style lang="scss">
.animals {
	display: flex;
	flex-direction: column;

	// .animals__title
	&__title {
		font-weight: 700;
		font-size: 30px;
		line-height: 133%;
		margin-bottom: 59px;
	}

	// .animals__wrapper
	&__wrapper {}

	// .animals__cards
	&__cards {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
}
</style>