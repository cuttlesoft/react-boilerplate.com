/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Menu as GrommetMenu } from 'grommet'

// Helpers
import { doc } from './Menu.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Menu
 *
 */
const Menu = ({ children, ...rest }) => <GrommetMenu {...rest}>{children}</GrommetMenu>

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Menu,
})
