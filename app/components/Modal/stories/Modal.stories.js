import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Modal from '../Modal'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Modal', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <Modal />
    </StoryContainer>
  ))
