/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Image as GrommetImage } from 'grommet'

// Helpers
import { doc } from './Image.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Image
 *
 */
const Image = ({ ...rest }) => <GrommetImage {...rest} />

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Image,
})
