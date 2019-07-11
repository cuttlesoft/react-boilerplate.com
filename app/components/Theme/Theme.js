/**
 * Theme
 */

import React from 'react'
import { ThemeContext } from 'grommet'
import { doc } from './Theme.doc'
import helpers from '../../utils/helpers'

// eslint-disable-next-line react/prop-types
const Theme = ({ theme, children }) => (
  <ThemeContext.Extend
    value={{
      global: {
        ...theme,
      },
    }}
  >
    {children}
  </ThemeContext.Extend>
)

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Theme,
})
