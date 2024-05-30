import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    allProducts: [],
    imgUrls: [],
    searchProducts: [],
    options: [
      { name: 'Выберите параметр', value: 0 },
      { name: 'Самые дешевые', value: 1 },
      { name: 'Самые дорогие', value: 2 },
      { name: 'Option 3', value: 3 },
      { name: 'Option 4', value: 4 },
    ],
  }),

  actions: {
    async getProduct(id) {
      axios
        .get(`/api/Product/${id}`)
        .then(response => {
          this.allProducts = response.data
          // this.products = response.data
          // console.log(this.products)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getProductByCategory(id) {
      try {
        const response = await axios.get(`/api/Product/Category/${id}`)
        this.products = response.data
        console.log('products by category', this.products)
      } catch (error) {
        console.log(error)
      }
    },

    async getProductBySubcategory(id) {
      axios
        .get(`/api/Product/subcategories/${id}`)
        .then(response => {
          this.products = response.data
          console.log(this.products)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getProductBySubsubcategory(id) {
      axios
        .get(`/api/Product/subsubcategories/${id}`)
        .then(response => {
          this.products = response.data
          console.log(this.products)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getFilteredProducts(id, minPrice, maxPrice) {
      axios
        .get(`/api/Product/Category/${id}/filter`, {
          params: {
            minPrice,
            maxPrice,
          },
        })
        .then(response => {
          this.products = response.data
          console.log('filter', this.products)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getProductFromSearch(name) {
      axios
        .get(`/api/Product/search`, {
          params: {
            name,
          },
        })
        .then(response => {
          if (response.data.length === 0) {
            this.searchProducts = null
          } else {
            this.searchProducts = response.data
            console.log(this.searchProducts)
          }
        })
        .catch(error => {
          // console.log(error)
          if (error.response && error.response.status === 404) {
            this.searchProducts = null
          } else {
            console.log(error)
          }
        })
    },

    async getSortedProductsbyDescending(id) {
      axios
        .get(`/api/Product/Category/${id}/sort/descending`, {})
        .then(response => {
          this.products = response.data
          console.log('Sorted Descending', this.products)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getSortedProductsbyAscending(id) {
      axios
        .get(`/api/Product/Category/${id}/sort/ascending`, {})
        .then(response => {
          this.products = response.data
          console.log('Sorted Ascending', this.products)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
})
