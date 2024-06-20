import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: [],
    subcategories: [],
    subcategoriesCatalog: [],
    subsubcategories: [],
    category: [],
    // categoryName: '',
  }),

  actions: {
    // async getCategory() {
    //   try {
    //     const response = await axios.get('/api/Category/')
    //     this.subsubcategories = response.data
    //     console.log('categories', this.subsubcategories)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    async getCategories() {
      try {
        const response = await axios.get('/api/Category/categories')
        this.categories = response.data
        this.category = response.data
        console.log('categories', this.categories)
        console.log('categories', this.category)
      } catch (error) {
        console.log(error)
      }
    },

    async getSubcategories(id) {
      try {
        const response = await axios.get(`/api/Category/subcategories/${id}`)
        this.subcategories = response.data
        console.log('subcategories', this.subcategories)
      } catch (error) {
        console.log(error)
      }
    },

    async getSubcategoriesForCatalog(id) {
      try {
        const response = await axios.get(`/api/Category/subcategories/${id}`)
        this.subcategoriesCatalog = response.data
        console.log('subcategories', this.subcategoriesCatalog)
      } catch (error) {
        console.log(error)
      }
    },

    async getSubSubcategories(id) {
      try {
        const response = await axios.get(`/api/Category/subsubcategories/${id}`)
        this.subsubcategories = response.data
        // this.subsubcategories = response.data.filter(
        //   subsubcategory => subsubcategory.parentId === id
        // )
        // this.subsubcategories = subsubcategories.sort((a, b) =>
        //   a.name.localeCompare(b.name)
        // )
        console.log('subsubcategories', this.subsubcategories)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
