import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'

import { Container } from '../../Container'
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
    <Container full theme={grommet}>
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
    </Container>
  )
}
