import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import FormContainer from '../FormContainer'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('FormContainer', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <FormContainer />
    </StoryContainer>
  ))
