/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Anchor as GrommetAnchor } from 'grommet'

// Helpers
import { doc } from './Anchor.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Anchor
 *
 */
const Anchor = ({ children, ...rest }) => <GrommetAnchor {...rest}>{children}</GrommetAnchor>

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Anchor,
})
