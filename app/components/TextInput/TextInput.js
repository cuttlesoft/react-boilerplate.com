/* eslint-disable react/prop-types */
import React from 'react'

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
const TextInput = ({ name, type, ...rest }) => (
  <GrommetTextInput name={name} type={type} style={{ border: 'none' }} {...rest} />
)

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: TextInput,
})
