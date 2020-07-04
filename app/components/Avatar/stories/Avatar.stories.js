import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { StoryContainer } from '../../StoryContainer'
import Avatar from '../Avatar'

storiesOf('Avatar', module).add('Default', () => (
  <StoryContainer>
    <Avatar />
  </StoryContainer>
))
