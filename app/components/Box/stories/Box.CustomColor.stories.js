import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Box', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Custom', () => (
    <StoryContainer>
      <Box
        justify="center"
        align="center"
        pad="xlarge"
        background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
        round="large"
      >
        <p color="white">I have a linear gradient background</p>
      </Box>
    </StoryContainer>
  ))
