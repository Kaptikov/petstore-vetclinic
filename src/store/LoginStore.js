import { defineStore } from 'pinia'
import axios from 'axios'

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    token: null,
  }),

  actions: {
    async loginUser(username, password) {
      try {
        const response = await axios.post('/api/auth/login', {
          username,
          password,
        })

        this.token = response.data.token
        localStorage.setItem('token', this.token)
        return true
      } catch (error) {
        console.error('Login error:', error)
        return false
      }
    },
    initialize() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = token
      }
    },
    async logoutUser() {
      try {
        this.token = null
        localStorage.removeItem('token')
        return true
      } catch (error) {
        console.error('Logout error:', error)
        return false
      }
    },
  },
})
