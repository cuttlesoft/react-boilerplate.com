import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Box } from '../Box'

/**
 * Container
 */
const Container = ({ children, ...rest }) => (
  <Box margin="auto" pad="large" {...rest}>
    {children}
  </Box>
)

Container.propTypes = {
  children: PropTypes.any,
}

export default Container
