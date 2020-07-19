import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Message from '../Message'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Message', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <Message />
    </StoryContainer>
  ))
