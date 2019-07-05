/* eslint-disable react/prop-types */
/**
 *
 * Box
 *
 */

import React from 'react'
import { Box } from 'grommet'
import { doc } from './Box.doc'
import helpers from '../../utils/helpers'

function createBox({
  a11yTitle,
  align,
  alignContent,
  alignSelf,
  animation,
  as,
  background,
  basis,
  border,
  children,
  direction,
  elevation,
  fill,
  flex,
  gap,
  gridArea,
  height,
  justify,
  margin,
  overflow,
  pad,
  responsive,
  round,
  tag,
  width,
  wrap,
}) {
  return (
    <Box
      a11yTitle={a11yTitle}
      align={align}
      alignContent={alignContent}
      alignSelf={alignSelf}
      animation={animation}
      as={as}
      background={background}
      basis={basis}
      border={border}
      direction={direction}
      elevation={elevation}
      fill={fill}
      flex={flex}
      gap={gap}
      gridArea={gridArea}
      height={height}
      justify={justify}
      margin={margin}
      overflow={overflow}
      pad={pad}
      responsive={responsive}
      round={round}
      tag={tag}
      width={width}
      wrap={wrap}
    >
      {children}
    </Box>
  )
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createBox,
})
