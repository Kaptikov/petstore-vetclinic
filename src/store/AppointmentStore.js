import { defineStore } from 'pinia'
import axios from 'axios'

export const useAppointmentStore = defineStore('appointmentStore', {
  state: () => ({
    appointments: [],
  }),

  actions: {
    async getAppointments(id) {
      axios
        .get(`/api/Appointment/user/${id}`)
        .then(response => {
          this.appointments = response.data
          console.log('appointments', this.appointments)
        })
        .catch(error => {
          console.log(error)
        })
    },

    // async getSchedule(id) {
    //   axios
    //     .get(`/api/Schedule/doctor/${id}`)
    //     .then(response => {
    //       this.schedules = response.data
    //       console.log('schedules', this.schedules)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    async addAppointment(name, phone, userId, animalId, doctorId, date, time) {
      try {
        const response = await axios.post(`/api/Appointment/user/${userId}`, {
          name,
          phone,
          userId,
          animalId,
          doctorId,
          date,
          time,
        })
        this.cartItems = response.data
        console.log('CartItem added', this.cartItems)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
