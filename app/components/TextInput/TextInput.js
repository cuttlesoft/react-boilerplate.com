/* eslint-disable react/prop-types */
import React from 'react'
import { TextInput as GrommetTextInput } from 'grommet'

import { doc } from './TextInput.doc'
import helpers from '../../utils/helpers'

/**
 *
 * TextInput
 *
 */
function TextInput({ name, type }) {
  return <GrommetTextInput name={name} type={type} style={{ border: 'none' }} />
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: TextInput,
})
