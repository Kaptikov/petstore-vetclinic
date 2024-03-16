import { defineStore } from 'pinia'
import axios from 'axios'

export const useSubcategoryStore = defineStore('subcategoryStore', {
  state: () => ({
    subcategories: [
      {
        id: 1,
        name: 'Корм',
      },
      {
        id: 2,
        name: 'Корм',
      },
      {
        id: 3,
        name: 'Корм',
      },
    ],
  }),
})
