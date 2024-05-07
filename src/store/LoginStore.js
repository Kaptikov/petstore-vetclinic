import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from '@/store/UserStore.js'

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    token: null,
  }),

  actions: {
    async loginUser(username, password) {
      try {
        // const userStore = useUserStore()
        const response = await axios.post('/api/auth/login', {
          username,
          password,
        })
        this.token = response.data
        localStorage.setItem('token', this.token)
        console.log('Login successful')
        // await userStore.getUser()
        // console.log('token', this.token)
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
      // console.log('Token:', this.token)
    },
    async logoutUser() {
      try {
        // const userStore = useUserStore()
        this.token = null
        localStorage.removeItem('token')
        // userStore.user = null
        // await userStore.getUser()
        // console.log(this.user)
        return true
      } catch (error) {
        console.error('Logout error:', error)
        return false
      }
    },
  },
})
