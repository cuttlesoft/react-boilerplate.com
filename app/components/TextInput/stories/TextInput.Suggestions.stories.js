import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { TextInput } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

const SUGGESTIONS = Array(100)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`)

storiesOf('TextInput', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Suggestions', () => <SuggestionsInput />)

const SuggestionsInput = props => {
  const [inputValue, setInputValue] = useState('')

  return (
    <StoryContainer full>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            value={inputValue}
            dropProps={{ height: 'small' }}
            onChange={e => setInputValue(e.target.value)}
            onSelect={e => setInputValue(e.suggestion)}
            suggestions={SUGGESTIONS}
            {...props}
          />
        </Box>
      </Box>
    </StoryContainer>
  )
}
