import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: [
      {
        id: 1,
        name: 'Для кошек',
      },
      {
        id: 2,
        name: 'Для собак',
      },
      {
        id: 3,
        name: 'Для грызунов',
      },
    ],
  }),
})
