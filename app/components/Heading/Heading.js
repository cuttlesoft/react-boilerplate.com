/* eslint-disable react/prop-types */
import React from 'react'
import { Heading as GrommetHeading } from 'grommet'

import { doc } from './Heading.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Heading
 *
 */
function Heading({
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
    <GrommetHeading
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
    </GrommetHeading>
  )
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Heading,
})
