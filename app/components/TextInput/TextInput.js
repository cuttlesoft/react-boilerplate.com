/* eslint-disable react/prop-types */
import React from 'react'
import { TextInput } from 'grommet'

import { doc } from './TextInput.doc'
import helpers from '../../utils/helpers'

/**
 *
 * TextInput
 *
 */
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

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createTextInput,
})
