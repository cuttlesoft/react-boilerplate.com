import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Anchor } from '../Anchor'
import { Image } from '../Image'
import { Box } from '../Box'
import NavBar from './NavBar'
import HeaderLink from './HeaderLink'
import Banner from '../../images/icon-512x512.png'
import messages from './messages'

function TemplateHeader() {
  return (
    <div>
      <Box align="center" gap="medium" height="medium">
        <Anchor href="https://www.reactboilerplate.com/">
          <Box height="medium" width="medium">
            <Image fit="contain" src={Banner} alt="react-boilerplate - Logo" />
          </Box>
        </Anchor>
      </Box>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </div>
  )
}

export default TemplateHeader
