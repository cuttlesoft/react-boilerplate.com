/* eslint-disable react/prop-types */
import React from 'react'
import { Grommet } from 'grommet'

// Helpers
import { doc } from './StoryContainer.doc'
import theme from '../../utils/theme'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * StoryContainer
 *
 */
const StoryContainer = ({ children, ...rest }) => (
  <Grommet theme={theme} {...rest}>
    {children}
  </Grommet>
)

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: StoryContainer,
})
