/* eslint-disable react/prop-types */
import React from 'react'
import { Button as GrommetButton } from 'grommet'
import styled from 'styled-components'

import { doc } from './Button.doc'
import helpers from '../../utils/helpers'

const StyledGrommetButton = styled(GrommetButton)`
  font-weight: bold;
  font-family: 'Roboto Mono';
`

/**
 *
 * Button.js
 *
 * A common button
 */
function Button({ ...rest }) {
  return <StyledGrommetButton {...rest} />
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Button,
})
