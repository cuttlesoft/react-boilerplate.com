/* eslint-disable react/prop-types */
/**
 *
 * Chexbox
 *
 */

import React from 'react'
import { CheckBox } from 'grommet'
import { doc } from './Checkbox.doc'
import helpers from '../../utils/helpers'

function createCheckbox({ checked, disabled, id, label, name, onChange, reverse, toggle }) {
  return (
    <CheckBox
      checked={checked}
      disabled={disabled}
      id={id}
      label={label}
      name={name}
      onChange={onChange}
      reverse={reverse}
      toggle={toggle}
    />
  )
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createCheckbox,
})
