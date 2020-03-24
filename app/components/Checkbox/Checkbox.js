/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { CheckBox as GrommetCheckbox } from 'grommet'

// Helpers
import { doc } from './Checkbox.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Chexbox
 *
 */
const Checkbox = ({ ...rest }) => <GrommetCheckbox {...rest} />

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Checkbox,
})
