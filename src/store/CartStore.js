import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from '@/store/UserStore.js'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cartItems: [],
  }),

  getters: {
    finalPrice() {
      return this.cartItems.reduce((total, item) => {
        // console.log(item.quantity)
        // console.log(item.products.price)
        return total + item.quantity * item.products.price
      }, 0)
    },
    cartItemsLength() {
      return this.cartItems.reduce((total, item) => {
        // console.log('length', item.length)
        // console.log(item.quantity)
        return total + item.quantity
      }, 0)
    },
  },

  actions: {
    async getCartItems(userId) {
      try {
        const response = await axios.get(`/api/CartItem/user/${userId}`)
        this.cartItems = response.data
        console.log('cart', this.cartItems)
      } catch (error) {
        console.log(error)
      }
    },

    async addCartItem(productId, quantity, userId) {
      try {
        const response = await axios.post(`/api/CartItem/user/${userId}`, {
          productId,
          quantity,
          userId,
        })
        this.cartItems = response.data
        console.log('CartItem added', this.cartItems)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteCartItem(id, userId) {
      try {
        const response = await axios.delete(
          `/api/CartItem/${id}/user/${userId}`
        )
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== id)
        console.log('CartItem deleted', response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async updateCartItem(id, quantity, userId) {
      try {
        const response = await axios.put(`/api/CartItem/${id}/user/${userId}`, {
          quantity,
        })
        this.cartItems = response.data
        console.log('CartItem updated', this.cartItems)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
