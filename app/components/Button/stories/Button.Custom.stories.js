import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { Button } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

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
    <StoryContainer theme={customTheme}>
      <Box align="center" pad="large">
        <Button title="custom theme" onClick={() => {}} primary />
      </Box>
    </StoryContainer>

    <StoryContainer>
      <Box align="center" pad="large">
        <Button as="span" title="Custom as=span" path="/" />
      </Box>
    </StoryContainer>
  </React.Fragment>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Custom', () => <CustomTheme />)
