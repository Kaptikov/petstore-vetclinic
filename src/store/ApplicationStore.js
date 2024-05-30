import { defineStore } from 'pinia'
import axios from 'axios'

export const useApplicationStore = defineStore('applicationStore', {
  state: () => ({
    applications: [],
  }),
  actions: {
    async getApplications() {
      try {
        const response = await axios.get(`/api/Application/`)
        this.Applications = response.data
        console.log('this.Applications', this.Applications)
      } catch (error) {
        console.log(error)
      }
    },

    // async aAnimal(id, name, type, gender, breed, age) {
    //   try {
    //     const response = await axios.put(`/api/Animal/${id}`, {
    //       name,
    //       type,
    //       gender,
    //       breed,
    //       age,
    //     })
    //     this.animals = response.data
    //     console.log('Animal updated', this.animals)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    async addApplication(name, phone, description, status) {
      try {
        const response = await axios.post('/api/Application/', {
          name,
          phone,
          description,
          status: 'не просмотрен',
        })
        return response.data
        console.log('addApplications', this.Applications)
      } catch (error) {
        console.log(error)
      }
    },

    // async deleteAnimal(id) {
    //   try {
    //     const response = await axios.delete(`/api/Animal/${id}`)
    //     response.data
    //     console.log('Animal deleted', this.animals)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
})
