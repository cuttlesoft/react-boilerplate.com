/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Box as GrommetBox } from 'grommet'

// Helpers
import { doc } from './Box.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Box
 *
 */
function Box({ children, ...rest }) {
  return <GrommetBox {...rest}>{children}</GrommetBox>
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Box,
})
