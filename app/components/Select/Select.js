/* eslint-disable react/prop-types */
import React from 'react'
import { Select } from 'grommet'

import { doc } from './Select.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Select
 *
 */
function createSelect({
  a11yTitle,
  alignSelf,
  children,
  closeOnChange,
  disabled,
  dropAlign,
  dropProps,
  dropHeight,
  dropTarget,
  emptySearchMessage,
  focusIndicator,
  labelKey,
  icon,
  margin,
  messages,
  multiple,
  onChange,
  onClose,
  onMore,
  onOpen,
  onSearch,
  open,
  options,
  placeholder,
  plain,
  replace,
  searchPlaceholder,
  selected,
  size,
  value,
  ...rest
}) {
  return (
    <Select
      a11yTitle={a11yTitle}
      alignSelf={alignSelf}
      closeOnChange={closeOnChange}
      disabled={disabled}
      dropAlign={dropAlign}
      dropProps={dropProps}
      dropHeight={dropHeight}
      dropTarget={dropTarget}
      emptySearchMessage={emptySearchMessage}
      focusIndicator={focusIndicator}
      labelKey={labelKey}
      icon={icon}
      margin={margin}
      messages={messages}
      multiple={multiple}
      onChange={onChange}
      onClose={onClose}
      onOpen={onOpen}
      onSearch={onSearch}
      open={open}
      options={options}
      placeholder={placeholder}
      plain={plain}
      replace={replace}
      searchPlaceholder={searchPlaceholder}
      selected={selected}
      size={size}
      value={value}
      {...rest}
    >
      {children}
    </Select>
  )
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createSelect,
})
