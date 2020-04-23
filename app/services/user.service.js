/* eslint-disable camelcase */
/* eslint-disable no-throw-literal */

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
    setCurrentUser(data)
    setCurrentTokens(data)
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
  }
}

export function getUser(user) {
  return axios.get(`/users/${user.id}/`)
}

export async function updateUser(user, setError, setLoading, setSuccess, setCurrentUser) {
  setLoading(true)

  try {
    const { user: updatedUser } = await axios.put(`/users/${user.id}/`, user)
    setCurrentUser(updatedUser)
    setSuccess(true)
    setLoading(false)
    return updatedUser
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
    return null
  }
}

export function updateUserPassword(user) {
  return axios.put(`/set_password/`, user)
}

export function confirmAccountOrEmail(token, uid) {
  return axios.get(`/confirm/?token=${token}&uid=${uid}`)
}

export async function forgotPassword({ email }, setError, setLoading, setSuccess) {
  setLoading(true)

  try {
    const { data } = await axios.post('/password_reset/', { email })
    setSuccess(true)
    setLoading(false)
    return data
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
    return null
  }
}

export async function validateResetToken(token) {
  try {
    const { data } = await axios.post('/password_reset/validate_token/', { token })
    return data
  } catch (err) {
    return getErrorMessage(err)
  }
}

export async function resetPassword({ token, password }, setError, setLoading, setSuccess) {
  setLoading(true)

  try {
    const { data } = await axios.post('/password_reset/confirm/', { token, password })
    setSuccess(true)
    setLoading(false)
    return data
  } catch (err) {
    setError(getErrorMessage(err))
    setLoading(false)
    return null
  }
}

export async function refreshAccessToken(refresh) {
  try {
    const { data } = await axios.post('/token/refresh/', { refresh })
    return data
  } catch (err) {
    throw {
      error: true,
      // Ensure that we are consistently returning an object, not a string
      details: typeof details === 'object' ? err.response.data : { error: err.response.data },
    }
  }
}
