import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orders: [],
    allOrders: [],
    options: [
      { name: 'Заказ в обоработке', value: 0 },
      { name: 'Заказ собирается', value: 1 },
      { name: 'Готов к выдаче', value: 2 },
    ],
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

    async getAllOrders() {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available')
        return
      }
      try {
        const response = await axios.get(`/api/Order/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        this.allOrders = response.data
        console.log('allOrders', this.allOrders)
      } catch (error) {
        console.log(error)
      }
    },

    async addOrder(orderNumber, userId, orderDate, status, totalPrice) {
      try {
        const response = await axios.post(`/api/Order/`, {
          orderNumber: ' ',
          userId,
          orderDate,
          status: 'В обработке',
          totalPrice,
        })
        this.orders = response.data
        console.log('Order added', this.orders)
      } catch (error) {
        console.log(error)
      }
    },

    // async getOrders(userId) {
    //   try {
    //     const response = await axios.get(`/api/Order/user/${userId}`)
    //     this.orders = response.data
    //     console.log('orders', this.orders)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    async updateOrder(id, orderNumber, userId, orderDate, status, totalPrice) {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available')
        return
      }
      try {
        const response = await axios.put(
          `/api/Order/${id}`,
          { orderNumber, userId, orderDate, status, totalPrice },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        this.allOrders = response.data
        console.log('allOrders updated', this.allOrders)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteOrder(id) {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available')
        return
      }
      try {
        const response = await axios.delete(`/api/Order/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        this.allOrders = response.data
        console.log('allOrders deleted', this.allOrders)
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
