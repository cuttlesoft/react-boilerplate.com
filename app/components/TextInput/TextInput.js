/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react'

// Components
import { TextInput as GrommetTextInput } from 'grommet'

// Helpers
import { doc } from './TextInput.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * TextInput
 *
 */
const TextInput = forwardRef(({ name, type, ...rest }, ref) => (
  <GrommetTextInput name={name} ref={ref} type={type} style={{ border: 'none' }} {...rest} />
))

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: TextInput,
})
