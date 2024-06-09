import { defineStore } from 'pinia'
import axios from 'axios'

export const useAnimalStore = defineStore('animalStore', {
  state: () => ({
    animals: [],
    animal: {},
  }),
  actions: {
    async getAnimals(id) {
      try {
        const response = await axios.get(`/api/Animal/user/${id}`)
        this.animals = response.data
        console.log('this.animals', this.animals)
      } catch (error) {
        console.log(error)
      }
    },

    // async getAnimalById(id) {
    //   try {
    //     const response = await axios.get(`/api/Animal/${id}`)
    //     this.animal = response.data
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    async updateAnimal(id, name, type, gender, breed, age) {
      try {
        const response = await axios.put(`/api/Animal/${id}`, {
          name,
          type,
          gender,
          breed,
          age,
        })
        this.animals = response.data
        console.log('Animal updated', this.animals)
      } catch (error) {
        console.log(error)
      }
    },

    async addAnimal(name, description, type, gender, breed, age, userId) {
      try {
        const response = await axios.post(`/api/Animal/user/${userId}`, {
          name,
          description,
          type,
          gender,
          breed,
          age,
          userId,
        })
        this.animals = response.data
        console.log('CartItem added', this.animalss)
      } catch (error) {
        console.log(error)
      }
    },

    async createAnimal(
      id,
      name,
      description,
      type,
      gender,
      breed,
      age,
      userId
    ) {
      try {
        const response = await axios.post(
          '/api/Animal/',
          id,
          name,
          description,
          type,
          gender,
          breed,
          age,
          userId
        )
        return response.data
        console.log('Animal created', this.animals)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteAnimal(id, userId) {
      try {
        const response = await axios.delete(
          `/api/Animal/animal/${id}/user/${userId}`
        )
        this.animals = response.data
        console.log('Animal deleted', this.animals)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
