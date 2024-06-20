<template>
  <div class="product-reviews reviews">
    <div class="reviews__title">Отзывы</div>
    <form action="" class="reviews__form">
      <textarea class="reviews__input" type="text" id="review" v-model="description" required />
      <button class="reviews__btn" type="submit" @click.prevent="btnAddReview(id, product.id, description, date)">
        Оставить отзыв
      </button>
    </form>
    <ul class="reviews__list">
      <li class="reviews__item" v-for="review of product.reviews" :key="review.id">
        <div class="reviews__item-header">
          <div class="reviews__item-title">
            {{ review.users.name }}
            {{ review.users.lastname }}
          </div>
          <div class="reviews__item-date">{{ formattedDate(review.date) }}</div>
        </div>

        <div class="reviews__item-text">
          <div class="reviews__item-description">
            {{ review.description }}
          </div>
        </div>
        <button class="reviews__btn reviews__btn--delete" type="submit" @click.prevent="btnDeleteReview(review.id, id)"
          v-if="isReviewAuthor(review) && !isAdmin">
          Удалить
        </button>
        <button v-if="isAdmin" class="reviews__btn reviews__btn--delete reviews__btn--admin" type="submit"
          @click.prevent="btnDeleteAnyReview(review.id)">
          Удалить
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useProductStore } from '@/store/ProductStore.js'
export default {
  props: {
    id: {},
    product: {
      type: Object,
    },
    isAdmin: {
    }
  },
  methods: {
    formattedDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    }
  },
  setup(props) {
    const productStore = useProductStore();
    const description = ref('');

    function btnAddReview(userId, productId, description, date) {
      productStore.addReview(userId, productId, description, date)
    }

    function btnDeleteReview(reviewId, userId) {
      productStore.deleteReview(reviewId, userId)
    }

    function btnDeleteAnyReview(reviewId) {
      productStore.deleteAnyReview(reviewId)
    }

    function isReviewAuthor(review) {
      // Check if the current user's ID matches the ID of the review's author
      return review.users.id === props.id
    }

    return {
      productStore,
      btnAddReview,
      btnDeleteReview,
      btnDeleteAnyReview,
      isReviewAuthor,
      description,
    }
  }
}
</script>

<style lang="scss">
.product-reviews {
  display: flex;
  flex-direction: column;
}

.reviews {

  // .reviews__title
  &__title {}

  // .reviews__form
  &__form {
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-top: 10px;
    margin-bottom: 39px;
  }

  // .reviews__input
  &__input {
    border: 1px solid #e6e6e6;
    border-radius: 20px;
    max-width: 1000px;
    height: max-content;
    width: 100%;
    max-height: fit-content;
    padding: 15px 20px;
  }

  // .reviews__btn
  &__btn {
    font-weight: 700;
    font-size: 16px;
    border-radius: 68px;
    padding: 5px 20px;
    color: $white;
    max-width: fit-content;
    margin-left: 30px;
    height: 50px;
    background: $blue-main;

    &:hover {
      background: $blue-second;
    }
  }

  &__btn--delete {
    background: $red;
    margin-left: 0;

    &:hover {
      background: $red-second;
    }
  }

  // .reviews__list
  &__list {
    display: flex;
    flex-direction: column;
  }

  // .reviews__item
  &__item {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  // .reviews__item-header
  &__item-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  // .reviews__item-title
  &__item-title {
    font-weight: 600;
    font-size: 21px;
    line-height: 130%;
  }

  // .reviews__item-date
  &__item-date {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  // .reviews__item-text
  &__item-text {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  // .reviews__item-description
  &__item-description {
    font-weight: 400;
    font-size: 21px;
    line-height: 130%;
  }
}
</style>