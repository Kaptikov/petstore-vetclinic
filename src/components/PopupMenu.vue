<template>
	<transition name="slide-fade">
		<div v-if="show" class="popup-menu">
			<div class="popup-menu__container">
				<button @click="show = !show" class="popup-menu__close"></button>
				<h4 class="popup-menu__title">Запись на груминг</h4>
				<p class="popup-menu__description">
					Оставьте свои контакты и мы обсудим все детали!
				</p>
				<form action="" class="popup-menu__form">
					<div class="popup-menu__input-wrapper">
						<label for="promocode" class="popup-menu__label">Имя*</label>
						<input class="popup-menu__input" type="name" name="name" maxlength="50" required />
					</div>
					<div class="popup-menu__input-wrapper">
						<label class="popup-menu__label" for="phone">Телефон</label>
						<input class="popup-menu__input" id="phone" type="tel" name="phone" maxlength="11"
							placeholder="+7 ______-__-__" required />
					</div>
					<button class="popup-menu__btn" type="submit">Оставить заявку</button>
				</form>
				<div class="popup-menu__privocy-policy">
					Нажимая на кнопку “Заказать расчёт” я соглашаюсь на
					<a href="" class="popup-menu__link">обработку персонал ьных данных</a>
					и соглашаюсь с
					<a href="" class="popup-menu__link">политикой конфиденциальности</a>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { ref } from 'vue'
export default {


	setup() {
		const show = ref(false)

		return {
			show,
		}
	},
}
</script>

<style lang="scss">
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-enter-active .popup-menu {
	transition: opacity 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

.popup-menu {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgb(24, 79, 231, 0.3);
	z-index: 100;
	// &.popup-menu--show {
	//   .popup-menu__wrapper {
	//     opacity: 1;
	//   }
	// }

	// .popup-menu__container
	&__container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: $white;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		// justify-content: center;
		align-items: center;
		max-width: 473px;
		width: 100%;
		padding: 30px;
		color: $black-text;
	}

	// .popup-menu__close
	&__close {
		position: absolute;
		top: 17px;
		right: 17px;
		width: 14px;
		height: 14px;

		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			background: $gray-text;
			width: 100%;
			height: 2px;
			border-radius: 1px;
		}

		&::before {
			transform: rotate(-45deg);
		}

		&::after {
			transform: rotate(45deg);
		}
	}

	// .popup-menu__title
	&__title {
		font-size: 32px;
		font-weight: 600;
		line-height: 120%;
		margin-bottom: 10px;
	}

	// .popup-menu__description
	&__description {
		font-size: 17px;
		font-weight: 400;
		line-height: 130%;
		margin-bottom: 30px;
	}

	// .popup-menu__form
	&__form {
		width: 100%;
		margin-bottom: 15px;
	}

	// .popup-menu__input-wrapper
	&__input-wrapper {
		display: flex;
		flex-direction: column;
		// align-items: flex-start;
		width: 100%;
		margin-bottom: 15px;
	}

	// .popup-menu__label
	&__label {
		font-size: 16px;
		font-weight: 400;
		line-height: 130%;
		margin-bottom: 10px;
	}

	// .popup-menu__input
	&__input {
		font-size: 16px;
		font-weight: 400;
		line-height: 130%;
		width: 100%;
		// border: 1px solid $gray-border;
		border-radius: 80px;
		padding: 10px 17px 10px 17px;
		transition: outline 0.2s ease-in;
		outline: 1px solid $gray-border;

		&:focus {
			outline: 1px solid $blue-main;
		}
	}

	// .popup-menu__btn
	&__btn {
		width: 100%;
		margin-top: 5px;
		padding: 15px 30px;
		background: $blue-main;
		border-radius: 68px;
		color: $white;
		transition: background 0.2s ease-in-out;

		&:hover {
			background: $blue-second;
		}
	}

	// .popup-menu__privocy-policy
	&__privocy-policy {
		font-size: 12px;
		font-weight: 400;
		line-height: 140%;
		text-align: center;
		color: $silver-text;
	}

	// .popup-menu__link
	&__link {
		color: $blue-main;
	}
}
</style>
