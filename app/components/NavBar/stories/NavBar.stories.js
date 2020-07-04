import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { StoryContainer } from '../../StoryContainer'
import NavBar from '../NavBar'

storiesOf('NavBar', module).add('Default', () => (
  <StoryContainer>
    <MemoryRouter initialEntries={['/']}>
      <NavBar />
    </MemoryRouter>
  </StoryContainer>
))
