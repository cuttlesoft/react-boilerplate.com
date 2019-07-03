/* eslint-disable react/prop-types */
/**
 *
 * TextInput
 *
 */

import React from 'react'
import { TextInput } from 'grommet'

function createTextInput({
  dropAlign,
  dropHeight,
  dropProps,
  dropTarget,
  focusIndicator,
  id,
  messages,
  name,
  onChange,
  onSelect,
  placeholder,
  plain,
  size,
  value,
  suggestions,
}) {
  return (
    <TextInput
      dropAlign={dropAlign}
      dropHeight={dropHeight}
      dropProps={dropProps}
      dropTarget={dropTarget}
      focusIndicator={focusIndicator}
      id={id}
      messages={messages}
      name={name}
      onChange={onChange}
      onSelect={onSelect}
      placeholder={placeholder}
      plain={plain}
      size={size}
      value={value}
      suggestions={suggestions}
    />
  )
}

let createTextInputWithDoc

if (process.env.NODE_ENV !== 'production') {
  createTextInputWithDoc = require('./TextInput.doc').doc(createTextInput) // eslint-disable-line global-require
}

const TextInputWrapper = createTextInputWithDoc || createTextInput
export default TextInputWrapper
