import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orders: [],
  }),

  // getters: {
  //   finalPrice() {
  //     return this.cartItems.reduce((total, item) => {
  //       // console.log(item.quantity)
  //       // console.log(item.products.price)
  //       return total + item.quantity * item.products.price
  //     }, 0)
  //   },
  //   cartItemsLength() {
  //     return this.cartItems.reduce((total, item) => {
  //       // console.log('length', item.length)
  //       // console.log(item.quantity)
  //       return total + item.quantity
  //     }, 0)
  //   },
  // },

  actions: {
    async getOrders(userId) {
      try {
        const response = await axios.get(`/api/Order/user/${userId}`)
        this.orders = response.data
        console.log('orders', this.orders)
      } catch (error) {
        console.log(error)
      }
    },

    async addOrder(orderNumber, userId, orderDate, status, totalPrice) {
      try {
        const response = await axios.post(`/api/Order/`, {
          orderNumber: '123',
          userId,
          orderDate,
          status: 'оплачен',
          totalPrice,
        })
        this.orders = response.data
        console.log('CartItem added', this.orders)
      } catch (error) {
        console.log(error)
      }
    },

    // async deleteCartItem(id) {
    //   try {
    //     const response = await axios.delete(`/api/CartItem/${id}`)
    //     this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== id)
    //     console.log('CartItem deleted', response.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    // async updateCartItem(id, quantity) {
    //   try {
    //     const response = await axios.put(`/api/CartItem/${id}`, {
    //       quantity,
    //     })
    //     this.cartItems = response.data
    //     console.log('CartItem updated', this.cartItems)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
})
