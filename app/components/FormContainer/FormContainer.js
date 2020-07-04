import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Box } from '../Box'

/**
 * FormContainer
 */
const FormContainer = ({ children }) => (
  <Box margin="auto" pad="large" style={{ width: '90vw', maxWidth: 600 }}>
    {children}
  </Box>
)

FormContainer.propTypes = {
  children: PropTypes.any,
}

export default FormContainer
