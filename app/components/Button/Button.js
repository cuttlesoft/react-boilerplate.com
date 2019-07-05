/* eslint-disable react/prop-types */
/**
 *
 * Button.js
 *
 * A common button
 */

import React from 'react'
import { Button } from 'grommet'
import { doc } from './Button.doc'
import helpers from '../../utils/helpers'

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

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createButton,
})
