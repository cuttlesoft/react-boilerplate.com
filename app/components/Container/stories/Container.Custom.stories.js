import React from 'react'
import { storiesOf } from '@storybook/react'
import { Add } from 'grommet-icons'
import styled from 'styled-components'

import { Box } from '../../Box'
import { Anchor } from '../../Anchor'
import Container from '../Container'

const customTheme = {
  global: {
    colors: {
      CuttleBlue: '#18C0DD',
      ModBlue: '#4156A6',
      Magenta: '#DD1175',
      Turbo: '#F2E900',
    },
  },
  font: {
    family: '"MankSans", sans-serif;',
  },
}

const ThemedButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.global.colors.CuttleBlue};
  border: 2px solid ${props => props.theme.global.colors.Magenta};
`

storiesOf('Container', module).add('Custom', () => (
  <Container theme={customTheme}>
    <Box pad="medium" background="CuttleBlue">
      <Anchor icon={<Add />} label="Add" color="Turbo" />
      <ThemedButton>Click me</ThemedButton>
    </Box>
  </Container>
))
