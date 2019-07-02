/* eslint-disable react/prop-types */
/**
 *
 * Header
 *
 */

import React from 'react'
import { Heading } from 'grommet'

function createHeader({
  color,
  children,
  level,
  a11yTitle,
  gridArea,
  margin,
  alignSelf,
  responseive,
  size,
  textAlign,
  truncate,
  ...rest
}) {
  return (
    <Heading
      color={color}
      level={level}
      a11yTitle={a11yTitle}
      gridArea={gridArea}
      margin={margin}
      alignSelf={alignSelf}
      responseive={responseive}
      size={size}
      textAlign={textAlign}
      truncate={truncate}
      {...rest}
    >
      {children}
    </Heading>
  )
}

let createHeaderWithDoc

if (process.env.NODE_ENV !== 'production') {
  createHeaderWithDoc = require('./Header.doc').doc(createHeader) // eslint-disable-line global-require
}

const HeaderWrapper = createHeaderWithDoc || createHeader
export default HeaderWrapper
