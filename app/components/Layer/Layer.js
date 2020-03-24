/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Layer as GrommetLayer } from 'grommet'

// Helpers
import { doc } from './Layer.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Layer
 *
 */
const Layer = ({ children, ...rest }) => <GrommetLayer {...rest}>{children}</GrommetLayer>

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Layer,
})
