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
  .add('Size', () => (
    <StoryContainer>
      <Heading level="1" size="small">
        This is level 1 header
      </Heading>

      <Heading size="medium">This is level 1 header</Heading>

      <Heading size="large">This is level 1 header</Heading>

      <Heading size="xlarge">This is level 1 header</Heading>
    </StoryContainer>
  ))
