/* eslint-disable react/prop-types */
/**
 *
 * Image
 *
 */

import React from 'react'
import { Image } from 'grommet'

function createImage({ a11yTitle, alignSelf, fallback, fit, gridArea, margin, opacity, src }) {
  return (
    <Image
      a11yTitle={a11yTitle}
      alignSelf={alignSelf}
      fallback={fallback}
      fit={fit}
      gridArea={gridArea}
      margin={margin}
      opacity={opacity}
      src={src}
    />
  )
}

let createImageWithDoc

if (process.env.NODE_ENV !== 'production') {
  createImageWithDoc = require('./Image.doc').doc(createImage) // eslint-disable-line global-require
}

const ImageWrapper = createImageWithDoc || createImage
export default ImageWrapper
