import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { StoryContainer } from '../../StoryContainer'
import { Box } from '../../Box'
import { TextInput } from '..'
import README from '../README.md'

storiesOf('TextInput', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Suggestions', () => <SuggestionsInput />)

const SuggestionsInput = props => {
  const [inputValue, setInputValue] = useState('')
  const suggestions = Array(100)
    .fill()
    .map((_, i) => `suggestion ${i + 1}`)

  return (
    <StoryContainer full>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            value={inputValue}
            dropProps={{ height: 'small' }}
            onChange={e => setInputValue(e.target.value)}
            onSelect={e => setInputValue(e.suggestion)}
            suggestions={suggestions}
            {...props}
          />
        </Box>
      </Box>
    </StoryContainer>
  )
}
