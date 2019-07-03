import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { FormLock, View } from 'grommet-icons'

import { Button } from '../../Button'
import { Box } from '../../Box'
import TextInput from '../TextInput'

storiesOf('TextInput', module).add('Password', () => <PasswordInput />)

// eslint-disable-next-line react/prop-types
const PasswordInput = ({ value, ...rest }) => {
  const [inputValue, setValue] = useState(value)
  const [reveal, setReveal] = useState(false)
  return (
    <Box width="medium" direction="row" margin="large" align="center" round="small" border>
      <TextInput
        plain
        type={reveal ? 'text' : 'password'}
        value={inputValue}
        onChange={event => setValue(event.target.value)}
        {...rest}
      />
      <Button
        icon={reveal ? <View size="medium" /> : <FormLock size="medium" />}
        onClick={() => setReveal(!reveal)}
      />
    </Box>
  )
}
