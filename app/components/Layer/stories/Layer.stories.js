import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { StoryContainer } from '../../StoryContainer'
import Layer from '../Layer'

storiesOf('Layer', module).add('Default', () => (
  <StoryContainer>
    <Layer />
  </StoryContainer>
))
