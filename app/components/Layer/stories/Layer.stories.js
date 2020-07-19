import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Layer from '../Layer'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Layer', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <Layer />
    </StoryContainer>
  ))
