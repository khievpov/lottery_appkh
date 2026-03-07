import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const userStore = defineStore('user', {
  state: () => ({
    users: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchUsers() {
      this.loading = true
      this.error = null
      try {
        const res = await api.get('/users')
        this.user = res.data
      } catch (error) {
        this.error = 'Failed to fetch user data'
        console.error('Error fetching user data:', error)
      } finally {
        this.loading = false
      }
    },
    async createUsers(Data) {
      await api.post('/users', Data)
      await this.fetchUsers()
    },
  },
})
