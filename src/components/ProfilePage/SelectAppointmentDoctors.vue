<template>
	<div class="аppointment-history__select select">
		<div class="select__label" @click="toggleDropdown">
			{{ selectedOption }}
			<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
					stroke-linejoin="round" />
			</svg>
		</div>
		<transition name="fade-up">
			<div class="select__options" v-if="isDropdownVisible">
				<div class="select__option" v-for="doctor of doctors" :key="doctor.id" @click="toggleOptionSelect(doctor)"
					:class="{ 'select__option--active': doctor.name === selectedOption }">
					{{ doctor.name }}
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { defineProps, ref, onMounted, computed, onBeforeUnmount } from 'vue'
import { useScheduleStore } from '@/store/ScheduleStore.js';

export default {
	props: {
		doctors: {
			type: Array,
			default() {
				return []
			}
		},
		selectedDoctorId: {
			type: Number,
			default() {
				return null
			}
		}
	},

	setup(props) {
		const scheduleStore = useScheduleStore()
		const selectedOption = ref('');
		const selectedDoctorId = ref(null);
		const isDropdownVisible = ref(false);

		const toggleOptionSelect = (doctor) => {

			selectedOption.value = doctor.name;
			selectedDoctorId.value = doctor.id;
			scheduleStore.selectedDoctorId = selectedDoctorId.value
			console.log(scheduleStore.selectedDoctorId);
			console.log(selectedDoctorId.value);
			isDropdownVisible.value = false;

			scheduleStore.getSchedule(selectedDoctorId.value)
			scheduleStore.getDateSchedule(selectedDoctorId.value)
		};

		const toggleDropdown = () => {
			isDropdownVisible.value = !isDropdownVisible.value;
		};

		const hideDropdown = (event) => {
			const target = event.target;
			if (!event.target.closest('.аppointment-history__select')) {
				isDropdownVisible.value = false;
			}
		};

		onMounted(() => {
			if (props.doctors.length > 0) {
				selectedOption.value = "";
			}
			document.addEventListener('click', hideDropdown);
		});

		onBeforeUnmount(() => {
			document.removeEventListener('click', hideDropdown);
		});

		return {
			selectedOption,
			isDropdownVisible,
			hideDropdown,
			toggleOptionSelect,
			toggleDropdown,
		};
	},
}
</script>
<style lang="scss" scoped>
.аppointment-history {

	// .аppointment-history__select
	&__select {
		position: relative;
		width: 100%;
		margin-bottom: 20px;
		// flex: 0 1 18.7851%;
	}
}

.select {

	// .select__label
	&__label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 400;
		font-size: 16px;
		width: 100%;
		max-width: 100%;
		padding: 15px 10px;
		border: 1px solid $gray-border;
		border-radius: 20px;
		cursor: pointer;
		transition: 0.2s ease-in-out;

		& svg {
			margin-left: 7px;
		}

		&:hover {
			color: $blue-main;
		}
	}

	// .select__options
	&__options {
		position: absolute;
		top: 50px;
		left: 0;
		// right: 0;
		display: flex;
		flex-direction: column;
		background: $white;
		outline: 1px solid $gray-border;
		border-radius: 20px;
		// max-width: 205px;
		width: 100%;
		overflow: hidden;
		z-index: 5;
	}

	// .select__option
	&__option {
		cursor: pointer;
		font-weight: 600;
		font-size: 16px;
		line-height: 120%;

		padding: 10px 20px;

		&:hover {
			background: rgba(227, 230, 249, 0.3);
		}
	}

	&__option--active {
		color: $blue-main;
	}
}
</style>