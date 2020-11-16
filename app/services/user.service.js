/* eslint-disable camelcase */
/* eslint-disable no-throw-literal */

import * as Sentry from '@sentry/browser'

/** @todo Fix import cycle */
// eslint-disable-next-line import/no-cycle
import axios from './instance'
import { getErrorMessage } from '../utils/helpers'

export const createAccount = async (user, setError, setLoading, setSuccess) => {
  setLoading(true)

  try {
    const data = await axios.post('/users/', user)
    setSuccess(true)
    setLoading(false)
    return data
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
    return null
  }
}

export const login = async (
  credentials,
  setError,
  setLoading,
  setCurrentUser,
  setCurrentTokens,
) => {
  setLoading(true)

  try {
    const data = await axios.post('/login/', credentials)
    setCurrentUser(data.user)
    setCurrentTokens(data)
    Sentry.configureScope(scope => {
      scope.setUser({
        ...data.user,
      })
    })
    setLoading(false)
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
  }
}

export const getUser = async (
  user,
  setError = () => {},
  setLoading = () => {},
  setSuccess = () => {},
  setCurrentUser = () => {},
) => {
  setLoading(true)

  try {
    const data = await axios.get(`/users/${user.uid}/`)

    setCurrentUser(data.user)
    setLoading(false)
    setSuccess(true)
    return data
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
    return null
  }
}

export const updateUser = async (
  user,
  setError = () => {},
  setLoading = () => {},
  setSuccess = () => {},
  setCurrentUser = () => {},
) => {
  setLoading(true)
  setSuccess(false)

  try {
    const data = await axios.patch(`/users/${user.uid}/`, user)

    setCurrentUser(data.user)
    setLoading(false)
    setSuccess(true)
    return data
  } catch (err) {
    setError({
      message: getErrorMessage(err),
      details: err.response ? err.response.data : null,
    })
    setLoading(false)
    return null
  }
}

export const updateUserPassword = async (data, setError, setLoading, setSuccess) => {
  setLoading(true)

  try {
    await axios.put('/update-password/', data)
    setLoading(false)
    setSuccess(true)
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
  }
}

export function confirmAccountOrEmail(token, uid) {
  return axios.get(`/confirm/?token=${token}&uid=${uid}`)
}

export async function forgotPassword({ email }, setError, setLoading, setSuccess) {
  setLoading(true)

  try {
    const { data } = await axios.post('/reset-password/', {
      email,
    })
    setSuccess(true)
    setLoading(false)
    return data
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
    return null
  }
}

export async function resetPassword({ token, password }, setError, setLoading) {
  setLoading(true)

  try {
    await axios.post('/reset-password/confirm/', {
      token,
      password,
    })
    setLoading(false)
    return true
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
    return false
  }
}

export async function validateResetToken(token) {
  try {
    await axios.post('/reset-password/validate_token/', { token })
    return true
  } catch (err) {
    return getErrorMessage(err)
  }
}

export async function refreshAccessToken(refresh) {
  try {
    return axios.post('/token/refresh/', {
      refresh,
    })
  } catch (err) {
    throw {
      error: true,
      // Ensure that we are consistently returning an object, not a string
      details: typeof details === 'object' ? err.response.data : { error: err.response.data },
    }
  }
}

/**
 *
 * If possible, revoke the user's session.
 * In all cases, remove the user's data, including auth tokens, by clearing the store. This triggers
 * a change in PrivateRoute and redirects the user.
 *
 * @param {string} refresh - The user's refresh token
 * @param {function} clearStore - Function from RootStore to clear out all store data
 */
export async function logout(refresh, clearStore = () => {}) {
  try {
    await axios.post('/logout/', { refresh })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('User session could not be revoked.')
  }

  clearStore()
}
