import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import GenericLoading from '../GenericLoading'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('GenericLoading', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <GenericLoading />
    </StoryContainer>
  ))
