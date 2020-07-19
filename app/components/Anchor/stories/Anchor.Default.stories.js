import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Anchor } from '..'
import { Box } from '../../Box'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Anchor', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <Box align="center" pad="large">
        <Anchor href="#">Link</Anchor>
      </Box>
    </StoryContainer>
  ))
