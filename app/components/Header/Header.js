/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Header as GrommetHeader } from 'grommet'

// Helpers
import { doc } from './Header.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Header
 *
 */
const Header = ({ children, ...rest }) => <GrommetHeader {...rest}>{children}</GrommetHeader>

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Header,
})
