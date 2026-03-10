import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.88.60:5001/api/site',
  headers: {
    'x-api-key': 'sSSc49ddNxTDl51hJmUhtZm1yf2V',
  },
})

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})
export { axios, api }
