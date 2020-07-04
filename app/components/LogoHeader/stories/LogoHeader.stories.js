import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { StoryContainer } from '../../StoryContainer'
import LogoHeader from '../LogoHeader'

storiesOf('LogoHeader', module).add('Default', () => (
  <StoryContainer>
    <LogoHeader />
  </StoryContainer>
))
