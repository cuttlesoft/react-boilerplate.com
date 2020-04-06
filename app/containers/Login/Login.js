/* @flow */
import React, { useContext, useState } from 'react'
import { isEmail } from 'validator'

// Components
import { Anchor } from 'components/Anchor'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form, FormField } from 'components/Form'
import { Heading } from 'components/Heading'
import { Message } from 'components/Message'
import { PasswordInput } from 'components/PasswordInput'

import { TextInput } from 'components/TextInput'

// Utils and messages
import useFlashMessage from '../../hooks/FlashMessage'
import { login } from '../../services/user.service'
import { UserStoreContext } from '../../stores/UserStore'

/**
 *
 * Login
 *
 */
const Login = () => {
  const { message: error, showMessage: showError } = useFlashMessage(null)

  const [loading, setLoading] = useState(false)

  const { setCurrentUser } = useContext(UserStoreContext)

  /**
   * Helper to determine if the submit button is disabled
   */
  const _isButtonDisabled = () => loading

  return (
    <>
      <Box align="center" pad="large" data-testid="login-header">
        <Heading level="2">Login</Heading>
        <Anchor href="/register" label="or Create An Account"></Anchor>
      </Box>

      <Form
        id="login-form"
        validate="blur"
        onSubmit={({ value }) => {
          login(value, showError, setLoading, setCurrentUser)
        }}
      >
        <FormField
          label="Email"
          name="email"
          required
          validate={[
            email => {
              if (email && !isEmail(email)) return 'Please enter a valid email address'
              return undefined
            },
          ]}
        >
          <TextInput name="email" type="email" />
        </FormField>

        <FormField
          label="Password"
          name="password"
          required
          validate={[
            password => {
              if (password && password.length <= 8) return 'Please enter more than 8 characters'
              return undefined
            },
          ]}
        >
          <PasswordInput id="password" name="password" />
        </FormField>

        {/* Submit */}
        <Box direction="row" margin={{ vertical: 'medium' }}>
          <Button type="submit" label="Login" primary disabled={_isButtonDisabled()} />
        </Box>

        {/* Status Messages */}
        <Box>{error && <Message message={error} isError />}</Box>
      </Form>
    </>
  )
}

export default Login
