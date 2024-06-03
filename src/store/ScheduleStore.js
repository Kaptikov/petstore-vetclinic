import { defineStore } from 'pinia'
import axios from 'axios'

export const useScheduleStore = defineStore('scheduleStore', {
  state: () => ({
    doctors: [],
    schedules: [],
    scheduleDates: [],
    scheduleTimes: [],
    selectedDoctorId: null,
    selectedDate: null,
    selectedTime: null,
    selectedAnimal: null,
  }),

  actions: {
    async getDoctors() {
      axios
        .get(`/api/Doctor/`)
        .then(response => {
          this.doctors = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getSchedule(id) {
      axios
        .get(`/api/Schedule/doctor/${id}`)
        .then(response => {
          this.schedules = response.data
          console.log('schedules', this.schedules)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getDateSchedule(id) {
      axios
        .get(`/api/Schedule/date/doctor/${id}`)
        .then(response => {
          this.scheduleDates = response.data
          console.log('scheduleDates', this.scheduleDates)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getTimeForDate(selectedDoctorId, selectedDate) {
      axios
        .get(`/api/Schedule/doctor/${selectedDoctorId}/date/${selectedDate}`)
        .then(response => {
          this.scheduleTimes = response.data
          console.log('schedules', this.scheduleTimes)
        })
        .catch(error => {
          console.log(error)
        })
    },

    // async getProductByCategory(id) {
    //   try {
    //     const response = await axios.get(`/api/Product/Category/${id}`)
    //     this.products = response.data
    //     console.log('products by category', this.products)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    // async getProductBySubcategory(id) {
    //   axios
    //     .get(`/api/Product/subcategories/${id}`)
    //     .then(response => {
    //       this.products = response.data
    //       console.log(this.products)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    // async getProductBySubsubcategory(id) {
    //   axios
    //     .get(`/api/Product/subsubcategories/${id}`)
    //     .then(response => {
    //       this.products = response.data
    //       console.log(this.products)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    // async getFilteredProducts(id, minPrice, maxPrice) {
    //   axios
    //     .get(`/api/Product/Category/${id}/filter`, {
    //       params: {
    //         minPrice,
    //         maxPrice,
    //       },
    //     })
    //     .then(response => {
    //       this.products = response.data
    //       console.log('filter', this.products)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    // async getProductFromSearch(name) {
    //   axios
    //     .get(`/api/Product/search`, {
    //       params: {
    //         name,
    //       },
    //     })
    //     .then(response => {
    //       if (response.data.length === 0) {
    //         this.searchProducts = null
    //       } else {
    //         this.searchProducts = response.data
    //         console.log(this.searchProducts)
    //       }
    //     })
    //     .catch(error => {
    //       // console.log(error)
    //       if (error.response && error.response.status === 404) {
    //         this.searchProducts = null
    //       } else {
    //         console.log(error)
    //       }
    //     })
    // },

    // async getSortedProductsbyDescending(id) {
    //   axios
    //     .get(`/api/Product/Category/${id}/sort/descending`, {})
    //     .then(response => {
    //       this.products = response.data
    //       console.log('Sorted Descending', this.products)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    // async getSortedProductsbyAscending(id) {
    //   axios
    //     .get(`/api/Product/Category/${id}/sort/ascending`, {})
    //     .then(response => {
    //       this.products = response.data
    //       console.log('Sorted Ascending', this.products)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
  },
})
