import { defineStore } from 'pinia'
import axios from 'axios'
import { useProductStore } from '@/store/ProductStore'

export const useProductImgStore = defineStore('productImgStore', {
  state: () => ({
    productImgs: [],
  }),

  actions: {
    async getProductImg(id) {
      try {
        const response = await axios.get(`/api/ProductImg/${id}`)
        this.productImgs = response.data
      } catch (error) {
        console.log(error)
      }
    },
  },
})
