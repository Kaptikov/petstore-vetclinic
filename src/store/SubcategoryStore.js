import { defineStore } from 'pinia'
import axios from 'axios'

export const useSubcategoryStore = defineStore('subcategoryStore', {
  state: () => ({
    subcategories: [
      {
        id: 1,
        name: 'Сухой корм',
      },
      {
        id: 2,
        name: 'Консервы',
      },
      {
        id: 3,
        name: 'Лакомства',
      },
      {
        id: 4,
        name: 'Витамины и добавки',
      },
    ],
  }),
})
