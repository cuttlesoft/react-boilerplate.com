import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Avatar from '../Avatar'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Avatar', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <Avatar />
    </StoryContainer>
  ))
