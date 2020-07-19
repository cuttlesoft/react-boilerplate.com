import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Header from '../Header'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Header', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <Header />
    </StoryContainer>
  ))
