import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Box } from '../Box'

/**
 * Container
 */
const Container = ({ children }) => (
  <Box margin="auto" pad="large">
    {children}
  </Box>
)

Container.propTypes = {
  children: PropTypes.any,
}

export default Container
