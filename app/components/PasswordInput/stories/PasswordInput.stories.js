import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

// Components
import PasswordInput from '../PasswordInput'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('PasswordInput', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <MemoryRouter initialEntries={['/']}>
        <PasswordInput />
      </MemoryRouter>
    </StoryContainer>
  ))
