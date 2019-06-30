import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet, Box, Grommet } from 'grommet' /** @todo: replace with custom wrappers */

import Button from '../Button'

const customTheme = {
  global: {
    font: {
      family: 'Arial',
    },
  },
  button: {
    border: {
      radius: undefined,
      color: '#2196f3',
    },
    padding: {
      vertical: '12px',
      horizontal: '24px',
    },
    primary: {
      color: '#2196f3',
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

const CustomTheme = () => (
  <React.Fragment>
    <Grommet theme={customTheme}>
      <Box align="center" pad="large">
        <Button title="custom theme" onClick={() => {}} primary />
      </Box>
    </Grommet>
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Button as="span" title="Custom as=span" path="/" />
      </Box>
    </Grommet>
  </React.Fragment>
)

storiesOf('Button', module).add('Custom', () => <CustomTheme />)
