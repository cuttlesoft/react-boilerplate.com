import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from '../../Box'
import { StoryContainer } from '../../StoryContainer'
import { TextInput } from '..'
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
          placeholder={<span>Enter something...</span>}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          {...props}
        />
      </Box>
    </StoryContainer>
  )
}
