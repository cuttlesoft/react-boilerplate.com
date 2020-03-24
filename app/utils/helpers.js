import { isPlainObject } from 'lodash'

const ERROR_DEFAULT = 'An error occurred. Please try again.'
const ERROR_NO_INTERNET = 'Request could not be made. Please check your internet connection.'

export const createWithDoc = ({ envName = '', docFunction = () => {}, component = '' }) => {
  let createComponentWithDoc
  if (envName !== 'production') {
    createComponentWithDoc = docFunction(component) // eslint-disable-line global-require
  }
  return createComponentWithDoc || component
}

export const getErrorMessage = err => {
  // - Axios does not return a response object if the service cannot be reached
  if (!err.response) {
    return ERROR_NO_INTERNET
  }

  // - If we do have a response and data object, use the full error object
  if (err.response && err.response.data) {
    try {
      const errorStringOrObject = Object.values(err.response.data)[0]
      if (isPlainObject(errorStringOrObject)) return errorStringOrObject[0]
      return errorStringOrObject
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Could not infer error message from error response object')
    }
  }

  // If a message has not been set, fallback to our default message
  return ERROR_DEFAULT
}
