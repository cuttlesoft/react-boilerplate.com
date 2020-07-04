import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { cloneDeep } from 'lodash'

/** @todo Fix import cycle */
// eslint-disable-next-line import/no-cycle
import { store } from '../stores/RootStore'
import { convertIncomingData, convertOutgoingData } from './transforms'

// Default config options
const DEFAULT_OPTIONS = {
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
}

// Create instance
const instance = axios.create(DEFAULT_OPTIONS)

// - Initialize authentication interceptor to automatically attempt to refresh
// an expired token
function triggerRefresh(failedRequest) {
  if (store) {
    return store.triggerRefreshToken(failedRequest)
  }

  // eslint-disable-next-line no-console
  console.debug('`store` is not defined, cannot refresh expired token.')
  return null
}
createAuthRefreshInterceptor(instance, triggerRefresh, {
  statusCodes: [403],
})

instance.interceptors.request.use(config => {
  const _config = cloneDeep(config)

  // Set the AUTH token for any request
  // If we have a user token, update the config
  if (store.user.accessToken && store.user.accessToken !== '') {
    _config.headers.Authorization = `Bearer ${store.user.accessToken}`
  }

  _config.data = convertOutgoingData(config.data)

  return _config
})

/**
 * - If a response is successful, only return the data portion of the response
 */
instance.interceptors.response.use(response => {
  if (response.status === 204 || response.status === 205) {
    return null
  }

  /**
   * Somewhere along the lines, there's a bug in either our code, axios, or axios-auth-refresh
   * that causes this interceptor to get called twice only after re-calling a failed request that
   * has been given a fresh access token via the authRefreshInterceptor
   *
   * If you print out the response here, you'll see that this interceptor hits twice after the auth
   * refresh - once with the expected shape, e.g. { data: { new_key: 'info' } }, and a second time
   * with the object that has already been transformed, e.g. { newKey: 'info' }
   *
   * In order to avoid assumptions about the existance of the `data` key, the simple workaround
   * here is to first attempt to use `response.data` and fallback to `response` if needed. This
   * ensures that all data is transformed even if a `data` key does not exist, though it does
   * attempt to transform the data twice in the case described above.
   */
  return convertIncomingData(response.data || response)
})

export default instance
