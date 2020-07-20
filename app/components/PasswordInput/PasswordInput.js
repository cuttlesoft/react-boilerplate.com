import React from 'react'
import { FormView, Hide } from 'grommet-icons'

// Components
import { Box } from '../Box'
import { Button } from '../Button'
import { TextInput } from '../TextInput'

/**
 *
 * PasswordInput
 *
 * Displays a text input with masked value for password
 *
 * - When FormView Icon is clicked, it reveals the password
 * - When HIde Icon is clicked, it masks the password
 *
 */
// eslint-disable-next-line react/prop-types
const PasswordInput = ({ value, onChange = () => {}, type, ...rest }) => {
  if (type) {
    // eslint-disable-next-line no-console
    console.warn('type prop does not have an effect on PasswordInput!')
  }

  const [reveal, setReveal] = React.useState(false)
  return (
    <Box direction="row" align="center" height="44px">
      <TextInput
        onChange={e => onChange(e)}
        type={reveal ? 'text' : 'password'}
        value={value}
        {...rest}
      />

      <Button
        data-testid="show-password-toggle"
        primary={false}
        icon={
          reveal ? (
            <FormView
              data-testid="shown-icon"
              size="medium"
              style={{ width: 30 }}
              color="light-5"
            />
          ) : (
            <Hide data-testid="hidden-icon" size="medium" style={{ width: 30 }} color="light-5" />
          )
        }
        onClick={() => setReveal(!reveal)}
      />
    </Box>
  )
}

export default PasswordInput
