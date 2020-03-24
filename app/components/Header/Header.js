/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Header as GrommetHeader } from 'grommet'
import { Anchor } from '../Anchor'
import { Box } from '../Box'

// Helpers
import { doc } from './Header.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Header
 *
 */
const Header = ({ children, ...rest }) => (
  <GrommetHeader background="light-2" pad="small" {...rest} style={{ width: '100vw' }}>
    <Box>
      <Anchor href="/" size="large">
        React Boilerplate
      </Anchor>
    </Box>
    {children}
  </GrommetHeader>
)

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Header,
})
