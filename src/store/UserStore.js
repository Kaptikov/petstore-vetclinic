import { defineStore } from 'pinia'
import axios from 'axios'
import { useLoginStore } from '@/store/LoginStore.js'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {},
    // animals: {},
  }),
  actions: {
    async getUser() {
      // const loginStore = useLoginStore()
      const token = localStorage.getItem('token')

      // console.log('token', token)

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
        // console.log('response', response.data)

        if (response.status === 200) {
          this.user = response.data
          // console.log(this.user)
        } else {
          console.error(
            'Failed to fetch user data',
            response.status,
            response.statusText
          )
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          const loginStore = useLoginStore()
          loginStore.logoutUser()
        } else {
          console.error('An error occurred while fetching user data', error)
        }
      }
    },

    async updateUser(id, name, lastname, email, phone) {
      try {
        const response = await axios.put(`/api/User/${id}`, {
          name,
          lastname,
          email,
          phone,
        })
        this.user = response.data
        console.log('User updated', this.user)
      } catch (error) {
        console.log(error)
      }
    },

    // async getAnimals(userId) {
    //   try {
    //     const response = await axios.get(`/api/Animal/user/${userId}`)
    //     this.animals = response.data
    //     console.log('this.animals', this.animals)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
})
