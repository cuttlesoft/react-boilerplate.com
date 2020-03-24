/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Select as GrommetSelect } from 'grommet'

// Helpers
import { doc } from './Select.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Select
 *
 */
function Select({ children, ...rest }) {
  return <GrommetSelect {...rest}>{children}</GrommetSelect>
}

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Select,
})
