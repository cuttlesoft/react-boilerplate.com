import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Menu from '../Menu'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Menu', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <Menu />
    </StoryContainer>
  ))
