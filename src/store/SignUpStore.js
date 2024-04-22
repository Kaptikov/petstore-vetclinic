import { defineStore } from 'pinia'
import axios from 'axios'

export const useSignUpStore = defineStore('signUpStore', {
  state: () => ({
    // name: '',
    // surname: '',
    // email: '',
    // username: '',
    //password: '',
    error: null,
    success: false,
  }),

  actions: {
    async registerUser(userData) {
      try {
        console.log('Отправка данных пользователя:', userData)
        const response = await axios.post('/api/auth/register', userData)
        if (response.status === 200) {
          this.success = true
          this.error = null
          console.log('Пользователь успешно зарегистрирован')
          console.log('Ответ:', response.data)
        }
      } catch (error) {
        this.error = error.response.data.message
        this.success = false
        console.error('Ошибка при регистрации пользователя:', error)
      }
    },
  },
})
