import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { StoryContainer } from '../../StoryContainer'
import RangeInput from '../RangeInput'

storiesOf('RangeInput', module).add('Default', () => (
  <StoryContainer>
    <RangeInput />
  </StoryContainer>
))
