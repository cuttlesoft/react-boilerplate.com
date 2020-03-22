/* eslint-disable react/prop-types */
import React from 'react'
import { Grommet } from 'grommet'

// Helpers
import { doc } from './Container.doc'
import theme from '../../utils/theme'
import helpers from '../../utils/helpers'

/**
 *
 * Container
 *
 */
const Container = ({ children, ...rest }) => (
  <Grommet theme={theme} {...rest}>
    {children}
  </Grommet>
)

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Container,
})
