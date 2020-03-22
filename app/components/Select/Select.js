/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Select as GrommetSelect } from 'grommet'

// Helpers
import { doc } from './Select.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Select
 *
 */
function Select({ children, ...rest }) {
  return <GrommetSelect {...rest}>{children}</GrommetSelect>
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Select,
})
