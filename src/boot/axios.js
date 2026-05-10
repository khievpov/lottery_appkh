import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
})

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})
export { axios, api }
