/* eslint-disable react/prop-types */

import React from 'react'
import { Text } from 'grommet'
import styled from 'styled-components'

import { doc } from './Text.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Text
 *
 */

const StyledText = styled(Text).attrs(props => ({ ...props }))`
  font-family: ${props => props.secondary && 'Lato'};
`
function createText({
  alignSelf,
  a11yTitle,
  as,
  gridArea,
  margin,
  children,
  color,
  level,
  responsive,
  size,
  textAlign,
  tag,
  truncate,
  weight,
  wordBreak,
  secondary,
  ...rest
}) {
  return (
    <StyledText
      secondary={secondary}
      alignSelf={alignSelf}
      a11yTitle={a11yTitle}
      as={as}
      gridArea={gridArea}
      margin={margin}
      color={color}
      level={level}
      responsive={responsive}
      size={size}
      textAlign={textAlign}
      tag={tag}
      truncate={truncate}
      weight={weight}
      wordBreak={wordBreak}
      {...rest}
    >
      {children}
    </StyledText>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createText,
})
