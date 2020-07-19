import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { StoryContainer } from '..'

// Misc
import README from '../README.md'

storiesOf('StoryContainer', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => (
    <>
      <StoryContainer plain>
        <Box pad="medium">
          <p>Plain StoryContainer</p>
        </Box>
      </StoryContainer>

      <StoryContainer>
        <Box pad="medium">
          <p>Not plain StoryContainer</p>
        </Box>
      </StoryContainer>
    </>
  ))
