import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from '@/store/UserStore.js'

export const useFavouriteStore = defineStore('favouriteStore', {
  state: () => ({
    favouriteItems: [],
  }),

  actions: {
    async getFavouriteItems(userId) {
      try {
        const response = await axios.get(`/api/FavouriteItem/user/${userId}`)
        this.favouriteItems = response.data
        console.log('favouriteItems', this.favouriteItems)
      } catch (error) {
        console.log(error)
      }
    },

    async addFavouriteItem(productId, userId) {
      try {
        const response = await axios.post(
          `/api/FavouriteItem/user/${userId}/`,
          {
            productId,
            userId,
          }
        )
        this.favouriteItems = response.data
        console.log('CartItem added', this.favouriteItems)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteFavouriteItem(id, userId) {
      try {
        const response = await axios.delete(
          `/api/FavouriteItem/${id}/user/${userId}`
        )
        this.favouriteItems = this.favouriteItems.filter(
          favouriteItem => favouriteItem.id !== id
        )
        console.log('CartItem deleted', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    // async updateFavouriteItem(id, quantity) {
    //   try {
    //     const response = await axios.put(`/api/FavouriteItem/${id}`, {
    //       quantity,
    //     })
    //     this.favouriteItems = response.data
    //     console.log('FavouriteItem updated', this.favouriteItems)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
})
