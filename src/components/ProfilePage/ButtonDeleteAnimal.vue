<template>
  <button class="animals__btn-delete" @click="deleteAnimal">
    Удалить
  </button>
</template>
<script>
import { useAnimalStore } from '@/store/AnimalStore.js';
export default {
  props: {
    animals: {},
  },
  setup(props) {
    const animalStore = useAnimalStore();
    const deleteAnimal = async () => {
      try {
        console.log(props.animals.id);
        await animalStore.deleteAnimal(props.animals.id);
        animalStore.getAnimals(props.animals.userId);
        console.log('Animal deleted');
      } catch (error) {
        console.log(error);
      }
    };
    return {
      animalStore,
      deleteAnimal,
    };
  }
}
</script>
<style lang="scss"></style>