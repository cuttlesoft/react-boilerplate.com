import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Container from '../Container'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Container', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <Container />
    </StoryContainer>
  ))
