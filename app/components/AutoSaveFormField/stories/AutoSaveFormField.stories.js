import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import AutoSaveFormField from '../AutoSaveFormField'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('AutoSaveFormField', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <StoryContainer>
      <AutoSaveFormField />
    </StoryContainer>
  ))
