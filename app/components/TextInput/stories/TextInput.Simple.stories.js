import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from '../../Box'
import { Container } from '../../Container'
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
    <Container>
      <Box align="center" pad="large">
        <TextInput
          placeholder={<span>Enter something...</span>}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          {...props}
        />
      </Box>
    </Container>
  )
}
