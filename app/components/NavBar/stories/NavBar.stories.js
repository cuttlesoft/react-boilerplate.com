import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

// Components
import NavBar from '../NavBar'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('NavBar', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
      </MemoryRouter>
    </StoryContainer>
  ))
