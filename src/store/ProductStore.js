import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    // allProducts: [],
  }),

  actions: {
    async getProduct(id) {
      axios
        .get(`/api/Product/${id}`)
        .then(response => {
          //this.allProducts = response.data
          this.products = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
})
