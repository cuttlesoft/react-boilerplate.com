/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { RangeInput as GrommetRangeInput } from 'grommet'

// Helpers
import { doc } from './RangeInput.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * RangeInput
 *
 */
const RangeInput = ({ children, ...rest }) => (
  <GrommetRangeInput {...rest}>{children}</GrommetRangeInput>
)

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: RangeInput,
})
