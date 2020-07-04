import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { StoryContainer } from '../../StoryContainer'
import Header from '../Header'

storiesOf('Header', module).add('Default', () => (
  <StoryContainer>
    <Header />
  </StoryContainer>
))
