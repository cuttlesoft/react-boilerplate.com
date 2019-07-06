import axios from 'axios'

// Default config options
const DEFAULT_OPTIONS = {
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
}

// Create instance
const instance = axios.create(DEFAULT_OPTIONS)

/**
 * - If a response is successful, only return the data portion of the response
 */
instance.interceptors.response.use(response => {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response.data
})

export default instance
