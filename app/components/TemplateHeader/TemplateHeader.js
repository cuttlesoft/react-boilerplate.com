import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Anchor } from '../Anchor'
import { Image } from '../Image'
import { Box } from '../Box'

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
      <Box justify="center" direction="row">
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </Box>
    </div>
  )
}

const HeaderLink = styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;
  &:active {
    background: #41addd;
    color: #fff;
  }
`

export default TemplateHeader
