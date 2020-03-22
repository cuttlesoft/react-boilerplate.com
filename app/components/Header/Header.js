/* eslint-disable react/prop-types */
import React from 'react'
import { Header as GrommetHeader } from 'grommet'

// Components
import { Anchor } from '../Anchor'
import { Box } from '../Box'

import { doc } from './Header.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Header
 *
 */
function Header({ children, ...rest }) {
  return (
    <GrommetHeader background="light-2" pad="small" {...rest} style={{ width: '100vw' }}>
      <Box>
        <Anchor href="/" size="large">
          React Boilerplate
        </Anchor>
      </Box>
      {children}
    </GrommetHeader>
  )
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Header,
})
