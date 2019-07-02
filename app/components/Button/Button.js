/* eslint-disable react/prop-types */
/**
 *
 * Button.js
 *
 * A common button
 */

import React from 'react'
import { Button } from 'grommet'

function createButton({
  a11yTitle,
  active,
  alignSelf,
  as,
  color,
  disabled,
  fill,
  focusIndicator,
  gap,
  gridArea,
  hoverIndicator,
  href,
  icon,
  margin,
  onClick,
  plain,
  primary,
  reverse,
  target,
  title,
  type,
  ...rest
}) {
  return (
    <Button
      a11yTitle={a11yTitle}
      active={active}
      alignSelf={alignSelf}
      as={as}
      color={color}
      disabled={disabled}
      fill={fill}
      focusIndicator={focusIndicator}
      gap={gap}
      gridArea={gridArea}
      hoverIndicator={hoverIndicator}
      href={href}
      icon={icon}
      label={title}
      margin={margin}
      onClick={onClick}
      plain={plain}
      primary={primary}
      reverse={reverse}
      target={target}
      type={type}
      {...rest}
    />
  )
}

let createButtonWithDoc
if (process.env.NODE_ENV !== 'production') {
  createButtonWithDoc = require('./Button.doc').doc(createButton) // eslint-disable-line global-require
}

const ButtonWrapper = createButtonWithDoc || createButton
export default ButtonWrapper
