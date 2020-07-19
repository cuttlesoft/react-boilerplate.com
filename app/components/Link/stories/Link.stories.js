import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Link from '../Link'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Link', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <Link to="/" />
    </StoryContainer>
  ))
