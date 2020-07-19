import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import PopoutForm from '../PopoutForm'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('PopoutForm', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <PopoutForm />
    </StoryContainer>
  ))
