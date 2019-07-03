/* eslint-disable react/prop-types */
/**
 *
 * Select
 *
 */

import React from 'react'
import { Select } from 'grommet'

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

let createSelectWithDoc

if (process.env.NODE_ENV !== 'production') {
  createSelectWithDoc = require('./Select.doc').doc(createSelect) // eslint-disable-line global-require
}

const SelectWrapper = createSelectWithDoc || createSelect
export default SelectWrapper
