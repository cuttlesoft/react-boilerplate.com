/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Heading as GrommetHeading } from 'grommet'

// Helpers
import { doc } from './Heading.doc'
import { createWithDoc } from '../../utils/helpers'

// Styles
import { HEADER_FONT } from '../../utils/theme'

/**
 *
 * Heading
 *
 */
const Heading = ({ caps = false, children, size = 'small', style, ...rest }) => (
  <GrommetHeading
    size={size}
    style={{
      fontFamily: `${HEADER_FONT}, 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      maxWidth: '100vw',
      textTransform: `${caps && 'uppercase'}`,
      ...style,
    }}
    {...rest}
  >
    {children}
  </GrommetHeading>
)

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Heading,
})
