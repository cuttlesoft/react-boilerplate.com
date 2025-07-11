/* @flow */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { isEmail } from 'validator'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

// Components
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form, FormField } from 'components/Form'
import { FormContainer } from 'components/FormContainer'
import { Heading } from 'components/Heading'
import { Message } from 'components/Message'
import { LogoHeader } from 'components/LogoHeader'
import { PasswordInput } from 'components/PasswordInput'
import { Text } from 'components/Text'
import { TextInput } from 'components/TextInput'

// Service
import { login } from '../../services/user.service'

// Store
import { UserStoreContext } from '../../stores/UserStore'

// Style
import { baseColors } from '../../utils/colors'

// Utils
import useFlashMessage from '../../hooks/FlashMessage'

/**
 *
 * Login
 *
 */
const Login = ({ location }) => {
  // Messages
  const { message: error, showMessage: showError } = useFlashMessage(null)
  const { message: redirectedMessage, showMessage: showRedirectedMessage } = useFlashMessage(null)

  // Context
  const history = useHistory()
  const { setCurrentUser, setCurrentTokens } = useContext(UserStoreContext)

  // State
  const [loading, setLoading] = useState(false)

  // Ref
  const emailRef = useRef()

  /**
   * Check if the user has been redirected to this page with a URL parameter
   *
   * - `confirmed` indicates that a user has been sent to this page from `ConfirmAccount`
   * - `reset` indicates that a user has been sent to this page from `ResetPassword`
   * - `created` indicates that a user has been sent to this page from an email confirmation link
   */
  useEffect(() => {
    if (location && location.search === '?confirmed=true')
      showRedirectedMessage('Your email address has been confirmed. You may now log in.')
    else if (location && location.search === '?reset=true')
      showRedirectedMessage('Your password has been changed. You may now log in.')
    else if (location && location.search === '?created=true')
      showRedirectedMessage('Your account has been created. You may now log in.')
  }, [])

  return (
    <>
      <LogoHeader />

      <FormContainer>
        <Box align="center" data-testid="login-header">
          <Heading level="2">Login</Heading>
          <Button
            label={
              <Text color={baseColors.blue} size="15px">
                or Create An Account
              </Text>
            }
            onClick={() => history.push('/register', { email: emailRef.current?.value })}
            plain
            style={{ background: 'transparent' }}
          />
        </Box>

        <Form
          id="login-form"
          validate="blur"
          onSubmit={({ value }) => {
            login(value, showError, setLoading, setCurrentUser, setCurrentTokens)
          }}
        >
          {/* Redirected Message */}
          <Box
            background={{ color: 'accent-1', opacity: 'weak' }}
            margin={{ vertical: 'small' }}
            pad={{ horizontal: 'small' }}
          >
            {redirectedMessage && <Message message={redirectedMessage} />}
          </Box>

          <FormField
            label="Email"
            name="email"
            required
            validate={[
              e => {
                if (e && !isEmail(e)) return 'Please enter a valid email address'
                return undefined
              },
            ]}
          >
            <TextInput ref={emailRef} type="email" />
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
            <PasswordInput id="password" />
          </FormField>

          {/* Submit */}
          <Box direction="row" fill="horizontal" margin={{ vertical: 'medium' }}>
            <Button
              data-testid="submit-button"
              disabled={loading}
              fill="horizontal"
              label="Login"
              primary
              type="submit"
            />
          </Box>

          <Button
            label={
              <Text color={baseColors.blue} size="15px">
                Forgot Password?
              </Text>
            }
            onClick={() =>
              history.push('/password-reset-request', { email: emailRef.current?.value })
            }
            plain
            style={{ background: 'transparent' }}
          />

          {/* Status Messages */}
          <Box>{error && <Message message={error} isError />}</Box>
        </Form>
      </FormContainer>
    </>
  )
}

Login.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Login
