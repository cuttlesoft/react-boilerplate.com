import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'
import styled from 'styled-components'

import Theme from '../Theme'
import { Container } from '../../Container'
import { Box } from '../../Box'

const customThemeValues = {
  colors: {
    CuttleBlue: '#18C0DD',
    ModBlue: '#4156A6',
    Magenta: '#DD1175',
    Turbo: '#F2E900',
  },
  font: {
    family: '"MankSans", sans-serif;',
  },
  button: {
    border: {
      radius: undefined,
      color: '#4156A6',
    },
    padding: {
      vertical: '12px',
      horizontal: '24px',
    },
    primary: {
      color: '#DD1175',
    },
    extend: props => {
      let extraStyles = ''
      if (props.primary) {
        extraStyles = `
            text-transform: uppercase;
          `
      }
      return `
          color: white;
          font-size: 12px;
          font-weight: bold;
          ${extraStyles}
        `
    },
  },
}

const ThemedButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.global.button.primary.color};
  border: 2px solid ${props => props.theme.global.button.border.color};
`

storiesOf('Theme', module).add('Default', () => (
  <Container theme={grommet}>
    <Box background="background" pad="medium">
      <Theme theme={customThemeValues}>
        <Box background="CuttleBlue" pad="medium">
          <ThemedButton>Click me </ThemedButton>
        </Box>
      </Theme>
    </Box>
  </Container>
))
