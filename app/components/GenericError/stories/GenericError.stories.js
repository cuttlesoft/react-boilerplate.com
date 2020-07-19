import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import GenericError from '../GenericError'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('GenericError', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <GenericError />
    </StoryContainer>
  ))
