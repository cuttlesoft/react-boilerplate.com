import React, { useEffect, useRef } from 'react'
import { StatusCritical, StatusGood } from 'grommet-icons'
import { debounce } from 'lodash'
import { PropTypes } from 'prop-types'

// Components
import { Box } from '../Box'
import { FormField } from '../Form'

// Utils and Services
import useFlashMessage from '../../hooks/FlashMessage'

/**
 * AutoSaveLoadingIndicator
 */
const AutoSaveFormField = ({ onSave, name, value, ...rest }) => {
  const { message: error, showMessage: showError } = useFlashMessage(null)
  const { message: success, showMessage: showSuccess } = useFlashMessage(null)
  const isLoaded = useRef(false)

  const handleAutoSave = useRef(
    debounce(val => onSave({ [name]: val }, showError, () => {}, showSuccess), 400),
  )

  // Update the data in the API when the data changes
  useEffect(() => {
    // Ensure that our initial data is loaded before we push changes
    if (value !== undefined) {
      if (isLoaded.current === false) {
        // If we haven't marked data as loaded and data has arrived, set isLoaded to true
        isLoaded.current = true
      } else {
        // Otherwise, if we have a value and the data has loaded, that means it has now changed
        handleAutoSave.current(value)
      }
    }
  }, [value])

  const Status = () => {
    if (success)
      return (
        <Box
          animation={{
            type: 'fadeIn',
            delay: 0,
            duration: 200,
          }}
          width="60px"
        >
          <StatusGood
            data-testid={`success-${name}`}
            color="status-ok"
            style={{
              marginLeft: 10,
              marginBottom: 22,
            }}
          />
        </Box>
      )
    if (error)
      return (
        <Box
          animation={{
            type: 'fadeIn',
            delay: 0,
            duration: 200,
          }}
          width="60px"
        >
          <StatusCritical
            data-testid={`error-${name}`}
            color="status-error"
            style={{
              marginLeft: 10,
              marginBottom: 58,
            }}
          />
        </Box>
      )
    return <Box width="60px" />
  }

  const getError = () => {
    if (success || !error) return null
    if (error.details && error.details[name] && error.details[name].length > 0)
      return error.details[name][0]
    return error.message
  }

  return (
    <Box direction="row" align="end">
      <FormField error={getError()} fill="horizontal" name={name} value={{ value }} {...rest} />
      <Status />
    </Box>
  )
}

AutoSaveFormField.propTypes = {
  name: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default AutoSaveFormField
