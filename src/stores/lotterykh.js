import { api } from 'src/boot/axios'
import { defineStore } from 'pinia'

export const uselotterykh = defineStore('lotterykh', {
  state: () => ({
    Lotterykh: [],
    Loading: false,
    error: null,
  }),

  actions: {
    async fetchlotterykh() {
      this.loading = true
      this.error = null
      try {
        const res = await api.get('https://jsonplaceholder.typicode.com/posts')
        this.Lotterykh = res.data
      } catch {
        this.error = 'Failed to fetch data lottery'
      } finally {
        this.loading = false
      }
    },
  },
})
