/* eslint-disable react/prop-types */
/**
 *
 * Chexbox
 *
 */

import React from 'react'
import { CheckBox } from 'grommet'

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

let createCheckboxWithDoc

if (process.env.NODE_ENV !== 'production') {
  createCheckboxWithDoc = require('./Checkbox.doc').doc(createCheckbox) // eslint-disable-line global-require
}

const CheckboxWrapper = createCheckboxWithDoc || createCheckbox
export default CheckboxWrapper
