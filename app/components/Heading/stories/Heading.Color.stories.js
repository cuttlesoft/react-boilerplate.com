import React from 'react'
import { storiesOf } from '@storybook/react'

import { StoryContainer } from '../../StoryContainer'
import { Heading } from '..'
import README from '../README.md'

storiesOf('Heading', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Color', () => (
    <StoryContainer>
      <Heading level="1" size="small" color="accent-1">
        This is level 1 header
      </Heading>
      <Heading size="medium" color="accent-2">
        This is level 1 header
      </Heading>
      <Heading size="large" color="neutral-1">
        This is level 1 header
      </Heading>
      <Heading size="xlarge" color="neutral-2">
        This is level 1 header
      </Heading>
    </StoryContainer>
  ))
