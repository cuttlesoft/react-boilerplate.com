import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { StoryContainer } from '../../StoryContainer'
import Menu from '../Menu'

storiesOf('Menu', module).add('Default', () => (
  <StoryContainer>
    <Menu />
  </StoryContainer>
))
