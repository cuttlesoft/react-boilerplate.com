/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Avatar as GrommetAvatar } from 'grommet'

// Helpers
import { doc } from './Avatar.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Avatar
 *
 */
const Avatar = ({ children, ...rest }) => <GrommetAvatar {...rest}>{children}</GrommetAvatar>

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Avatar,
})
