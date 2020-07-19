import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import RangeInput from '../RangeInput'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('RangeInput', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <RangeInput />
    </StoryContainer>
  ))
