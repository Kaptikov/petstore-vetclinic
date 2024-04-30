import { defineStore } from 'pinia'
import axios from 'axios'
import { useLoginStore } from '@/store/LoginStore.js'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {},
  }),
  actions: {
    async getUser() {
      const loginStore = useLoginStore()
      const token = localStorage.getItem('token')

      console.log('token', token)

      if (!token) {
        console.error('Token is not available')
        return
      }

      try {
        const response = await axios.get('/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log('response', response.data)

        if (response.status === 200) {
          this.user = response.data
        } else {
          console.error(
            'Failed to fetch user data',
            response.status,
            response.data
          )
        }
      } catch (error) {
        if (error.response.status === 401) {
          const loginStore = useLoginStore()
          loginStore.logoutUser()
        } else {
          console.error('An error occurred while fetching user data', error)
        }
      }
    },
  },
})
