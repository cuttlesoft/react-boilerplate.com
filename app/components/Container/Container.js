/* eslint-disable react/prop-types */
/**
 *
 * Container
 *
 */

import React from 'react'
import { Grommet } from 'grommet'

function createContainer({ cssVars, children, full, plain, theme, userAgent }) {
  return (
    <Grommet cssVars={cssVars} full={full} plain={plain} theme={theme} userAgent={userAgent}>
      {children}
    </Grommet>
  )
}

let createContainerWithDoc
if (process.env.NODE_ENV !== 'production') {
  createContainerWithDoc = require('./Container.doc').doc(createContainer) // eslint-disable-line global-require
}

const ContainerWrapper = createContainerWithDoc || createContainer
export default ContainerWrapper
