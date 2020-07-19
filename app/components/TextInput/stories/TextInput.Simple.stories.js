import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { TextInput } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('TextInput', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => <SimpleTextInput />)

const SimpleTextInput = props => {
  const [inputValue, setInputValue] = useState('')

  return (
    <StoryContainer>
      <Box align="center" pad="large">
        <TextInput
          onChange={e => setInputValue(e.target.value)}
          placeholder={<span>Enter something...</span>}
          value={inputValue}
          {...props}
        />
      </Box>
    </StoryContainer>
  )
}
