import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryContainer } from '../../StoryContainer'
import { Box } from '../../Box'
import { Anchor } from '..'
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
