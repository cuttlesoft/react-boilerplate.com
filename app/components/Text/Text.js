/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

// Components
import { Text as GrommetText } from 'grommet'

// Helpers
import { doc } from './Text.doc'
import { createWithDoc } from '../../utils/helpers'

const StyledGrommetText = styled(GrommetText).attrs(props => ({ ...props }))`
  font-family: ${props => props.secondary && 'Lato'};
`

/**
 *
 * Text
 *
 */
const Text = ({ children, ...rest }) => <StyledGrommetText {...rest}>{children}</StyledGrommetText>

export default createWithDoc({
  docFunction: doc,
  component: Text,
})
