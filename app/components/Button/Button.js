/**
 *
 * Button.js
 *
 * A common button
 */

import React from 'react'
import { Button } from 'grommet'

import { genericProps } from '../../utils/propTypes'

function ButtonWrapper({
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

ButtonWrapper.propTypes = {
  a11yTitle: genericProps.a11yTitle,
  active: genericProps.active,
  alignSelf: genericProps.alignSelf,
  as: genericProps.as,
  color: genericProps.color,
  disabled: genericProps.disabled,
  fill: genericProps.fill,
  focusIndicator: genericProps.focusIndicator,
  gap: genericProps.gap,
  gridArea: genericProps.gridArea,
  hoverIndicator: genericProps.hoverIndicator,
  href: genericProps.href,
  icon: genericProps.icon,
  margin: genericProps.margin,
  onClick: genericProps.onClick,
  plain: genericProps.plain,
  primary: genericProps.primary,
  reverse: genericProps.reverse,
  target: genericProps.target,
  title: genericProps.title,
  type: genericProps.type,
}

ButtonWrapper.defaultProps = {
  disabled: false,
  onClick: () => {},
  title: '',
}

export default ButtonWrapper
