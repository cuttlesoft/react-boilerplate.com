/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

// Components
import { Button as GrommetButton } from 'grommet'

// Helpers
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
 */
const Button = ({ ...rest }) => <StyledGrommetButton {...rest} />

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Button,
})
