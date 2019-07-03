import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { grommet } from 'grommet/themes'
import { Box } from '../../Box'
import { Container } from '../../Container'
import TextInput from '../TextInput'

storiesOf('TextInput', module).add('Simple', () => <SimpleTextInput />)

const SimpleTextInput = props => {
  const [inputValue, setInputValue] = useState('')
  return (
    <Container theme={grommet}>
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
