import { defineStore } from 'pinia'
import axios from 'axios'

export const useRequestStore = defineStore('requestStore', {
  state: () => ({
    requests: [],
  }),
  actions: {
    async getRequests() {
      try {
        const response = await axios.get(`/api/Request/`)
        this.requests = response.data
        console.log('this.requests', this.requests)
      } catch (error) {
        console.log(error)
      }
    },

    async addRequest(name, phone, description, status) {
      try {
        const response = await axios.post('/api/Request/', {
          name,
          phone,
          description,
          status: 'не просмотрен',
        })
        return response.data
        console.log('Request added', this.requests)
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
