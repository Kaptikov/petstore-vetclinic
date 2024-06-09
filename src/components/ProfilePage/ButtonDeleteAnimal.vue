<template>
  <button class="animals__btn-delete" @click="deleteAnimal(animals.id, id)">
    Удалить
  </button>
</template>
<script>
import { useAnimalStore } from '@/store/AnimalStore.js';
export default {
  props: {
    animals: {},
    id: {}
  },
  setup(props) {
    const animalStore = useAnimalStore();

    function deleteAnimal(id, userId) {
      animalStore.deleteAnimal(id, userId)
    }
    // const deleteAnimal = async () => {
    //   try {
    //     console.log(props.animals.id);
    //     await animalStore.deleteAnimal(props.animals.id);
    //     animalStore.getAnimals(props.animals.userId);
    //     console.log('Animal deleted');
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    return {
      animalStore,
      deleteAnimal,
    };
  }
}
</script>
<style lang="scss">
.animals__btn-delete {
  margin-top: 20px;
  max-width: max-content;
  color: $red;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: $red-second;
  }
}
</style>