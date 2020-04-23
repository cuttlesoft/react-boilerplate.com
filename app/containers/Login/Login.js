/* @flow */
import React, { useContext, useEffect, useState } from 'react'
import { isEmail } from 'validator'
import PropTypes from 'prop-types'

// Components
import { Anchor } from 'components/Anchor'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form, FormField } from 'components/Form'
import { Heading } from 'components/Heading'
import { Message } from 'components/Message'
import { Link } from 'components/Link'
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
const Login = ({ location }) => {
  const { message: error, showMessage: showError } = useFlashMessage(null)
  const { message: redirectedMessage, showMessage: showRedirectedMessage } = useFlashMessage(null)

  const [loading, setLoading] = useState(false)

  const { setCurrentUser, setCurrentTokens } = useContext(UserStoreContext)

  /**
   * Check if the user has been redirected to this page with a URL parameter
   *
   * - `confirmed` indicates that a user has been sent to this page from `ConfirmAccount`
   * - `reset` indicates that a user has been sent to this page from `ResetPassword`
   */
  useEffect(() => {
    if (location && location.search === '?confirmed=true')
      showRedirectedMessage('Your email address has been confirmed. You may now log in.')
    if (location && location.search === '?reset=true')
      showRedirectedMessage('Your password has been changed. You may now log in.')
  }, [])

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
          login(value, showError, setLoading, setCurrentUser, setCurrentTokens)
        }}
      >
        {/* Redirected Message */}
        <Box background={{ color: 'status-ok', opacity: 'weak' }} pad={{ horizontal: 'small' }}>
          {redirectedMessage && <Message message={redirectedMessage} />}
        </Box>

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
          <Button type="submit" label="Login" disabled={_isButtonDisabled()} />
        </Box>

        <Link to="/password-reset-request">Forgot Password?</Link>

        {/* Status Messages */}
        <Box>{error && <Message message={error} isError />}</Box>
      </Form>
    </>
  )
}

Login.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Login
