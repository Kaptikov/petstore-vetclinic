import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    allProducts: [],
    imgUrls: [],
    searchProducts: [],
    product: {},
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
          this.product = response.data
          // this.products = response.data
          console.log(this.product)
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

    async addReview(userId, productId, description, date) {
      try {
        const response = await axios.post(
          `/api/Product/user/${userId}/product/${productId}`,
          {
            userId,
            productId,
            description,
            date,
          }
        )
        this.product = response.data
        console.log('product added', this.product)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteReview(id, userId) {
      try {
        const response = await axios.delete(
          `/api/Product/review/${id}/user/${userId}`
        )
        //  this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== id)
        this.product = response.data
        console.log('review deleted', this.product)
      } catch (error) {
        console.log(error)
      }
    },

    async deleteAnyReview(id) {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token is not available')
        return
      }
      try {
        const response = await axios.delete(`/api/Product/review/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        //  this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== id)
        this.product = response.data
        console.log('review deleted', this.product)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
