import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import LogoHeader from '../LogoHeader'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('LogoHeader', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <LogoHeader />
    </StoryContainer>
  ))
