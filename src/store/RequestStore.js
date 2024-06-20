import { defineStore } from 'pinia'
import axios from 'axios'

export const useRequestStore = defineStore('requestStore', {
  state: () => ({
    requests: [],
    options: [
      { name: 'Выберите параметр', value: 0 },
      { name: 'Просмотрен', value: 1 },
      { name: 'Выполнен', value: 2 },
    ],
  }),
  actions: {
    async getRequests() {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available')
        return
      }
      try {
        const response = await axios.get(`/api/Request/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
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

    async updateRequest(id, name, phone, description, status) {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available')
        return
      }
      try {
        const response = await axios.put(
          `/api/Request/${id}`,
          { name, phone, description, status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        this.requests = response.data
        console.log('request updated', this.requests)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteRequest(id) {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available')
        return
      }
      try {
        const response = await axios.delete(`/api/Request/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        this.requests = response.data
        console.log('request deleted', this.requests)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
