/* eslint-disable react/prop-types */
/**
 *
 * Anchor
 *
 */

import React from 'react'
import { Anchor } from 'grommet'

function createAnchor({
  a11yTitle,
  children,
  color,
  disabled,
  forwardRef,
  href,
  icon,
  focus,
  label,
  onClick,
  reverse,
  theme,
  ...rest
}) {
  return (
    <Anchor
      a11yTitle={a11yTitle}
      color={color}
      disabled={disabled}
      forwardRef={forwardRef}
      href={href}
      icon={icon}
      focus={focus}
      label={label}
      onClick={onClick}
      reverse={reverse}
      theme={theme}
      {...rest}
    >
      {children}
    </Anchor>
  )
}

let createAnchorWithDoc

if (process.env.NODE_ENV !== 'production') {
  createAnchorWithDoc = require('./Anchor.doc').doc(createAnchor) // eslint-disable-line global-require
}

const AnchorWrapper = createAnchorWithDoc || createAnchor
export default AnchorWrapper
