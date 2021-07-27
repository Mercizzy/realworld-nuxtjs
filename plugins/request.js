import axios from 'axios'

export const request = axios.create({
  // baseURL: 'http://realworld.api.fed.lagounews.com'
  baseURL: 'https://conduit.productionready.io',
})

export default function({ store }) {
  request.interceptors.request.use((config) => {
    const state = store.state
    if (state && state.user) {
      config.headers.Authorization = `Token ${state.user.token}`
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })
}