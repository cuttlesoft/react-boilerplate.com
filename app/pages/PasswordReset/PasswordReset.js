/* @flow */
import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import qs from 'qs'

// Components
import { Anchor } from 'components/Anchor'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Checkbox } from 'components/Checkbox'
import { Form, FormField } from 'components/Form'
import { Heading } from 'components/Heading'
import { Link } from 'components/Link'
import { LogoHeader } from 'components/LogoHeader'
import { Message } from 'components/Message'
import { PasswordInput } from 'components/PasswordInput'
import { Text } from 'components/Text'

// Utils and messages
import useFlashMessage from '../../hooks/FlashMessage'
import { resetPassword, validateResetToken } from '../../services/user.service'

// Stores
import { RootStoreContext } from '../../stores/RootStore'

/**
 *
 * PasswordReset
 *
 */
const PasswordReset = observer(({ location }) => {
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [tokenError, setTokenError] = useState(false)
  const { message: error, showMessage: showError } = useFlashMessage(null)

  const {
    clearStore,
    user: { isAuthenticated },
  } = useContext(RootStoreContext)

  let token = null
  let isNewUser = false

  /**
   * Attempt to retrieve query params:
   *
   * - `token`: The user's confirmation token, as set in their confirmation email
   * - 'new_user': Used to control the display of a custom message for users
   *   who are setting their password for the first time, such as users who
   *   have been added by an organization admin
   */
  if (location && location.search) {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true })
    ;({ token } = params)

    isNewUser = location.search.includes('&new_user=true')
  }

  /**
   * Validate the user's token
   *
   * - If invalid or unable to validate, show an error message
   */
  useEffect(() => {
    async function validateToken() {
      try {
        const valid = await validateResetToken(token)

        if (valid !== true) {
          setTokenError('Token is invalid. Please check the URL or request a new link')
        }
      } catch (err) {
        setTokenError(`An unknown error occurred: ${err}`)
      }
    }
    validateToken()
  }, [])

  /**
   * Helper to determine if the submit button is disabled
   */
  const _isButtonDisabled = () => loading || tokenError

  /**
   * Helper to set the redirect parameters based on whether or not the user is
   * setting or RE-setting a password
   */
  const _getRedirectParams = () => (isNewUser ? '?created=true' : '?reset=true')

  if (isAuthenticated)
    return (
      <Box>
        <LogoHeader />

        <Box align="center">
          <Heading level="3" color="brand">
            {`Cannot ${isNewUser ? 'Confirm Account' : 'Reset Password'}`}
          </Heading>

          <Text>{`You cannot ${
            isNewUser ? 'confirm a new account' : 'reset your password'
          } while you are logged in.`}</Text>
          <Text>Please log out and try again.</Text>

          <Box gap="small" direction="row" pad="medium">
            <Link to="/clients">
              <Button color="status-unknown" label="Go to Dashboard" />
            </Link>

            <Button label="Logout" onClick={() => clearStore()} />
          </Box>
        </Box>
      </Box>
    )

  return (
    <Box>
      {redirect && <Redirect to={{ pathname: '/login', search: _getRedirectParams() }} />}

      <LogoHeader />

      <Box
        data-testid="login-header"
        margin="auto"
        pad="large"
        style={{ width: '90vw', maxWidth: 600 }}
      >
        <Box align="center">
          <Heading level="2">
            {isNewUser ? 'Complete Your Registration' : 'Reset your password'}
          </Heading>
          {!isNewUser && <Link to="/login">or Sign In</Link>}
        </Box>

        <Form
          id="login-form"
          validate="blur"
          onSubmit={async ({ value }) => {
            const success = await resetPassword(
              {
                token,
                password: value.password,
              },
              showError,
              setLoading,
            )

            if (success) {
              setRedirect(true)
            }
          }}
        >
          <FormField
            label="Password"
            name="password"
            required
            validate={[
              (password) => {
                if (password && password.length <= 8) return 'Please enter more than 8 characters'
                return undefined
              },
              (password) => {
                const confirmPasswordInput = document.getElementsByName('confirm_password')[0]
                if (
                  password &&
                  confirmPasswordInput instanceof HTMLInputElement &&
                  confirmPasswordInput.value !== password
                ) {
                  return 'Passwords must match'
                }
                return undefined
              },
            ]}
          >
            <PasswordInput id="password" />
          </FormField>

          <FormField
            label="Re-enter Password"
            name="confirm_password"
            required
            validate={[
              (confirmPassword) => {
                if (confirmPassword && confirmPassword.length <= 8)
                  return 'Please enter more than 8 characters'
                return undefined
              },
              (confirmPassword) => {
                const passwordInput = document.getElementsByName('password')[0]

                if (
                  confirmPassword &&
                  passwordInput instanceof HTMLInputElement &&
                  passwordInput.value !== confirmPassword
                ) {
                  return 'Passwords must match'
                }
                return undefined
              },
            ]}
          >
            <PasswordInput />
          </FormField>

          {/* TOS */}
          {isNewUser && (
            <Box direction="row" margin={{ top: 'large' }}>
              <Checkbox
                id="check-box"
                label={
                  <Text size="xsmall">
                    I agree with the{' '}
                    <Anchor
                      href="https://www.vcheck24.com/termsofservice"
                      target="_blank"
                      size="xsmall"
                      color="brand"
                      weight="bold"
                    >
                      &nbsp;Terms of Service, Privacy Policy and Cookie Policy
                    </Anchor>
                  </Text>
                }
                required={isNewUser}
              />
            </Box>
          )}

          {/* Submit */}
          <Box direction="row" fill="horizontal" margin={{ vertical: 'medium' }}>
            <Button
              disabled={_isButtonDisabled()}
              fill="horizontal"
              label="Submit"
              type="submit"
            />
          </Box>

          {/* Status Messages */}
          {(error || tokenError) && <Message message={error || tokenError} isError />}
        </Form>
      </Box>
    </Box>
  )
})

PasswordReset.propTypes = {
  location: PropTypes.object.isRequired,
}

export default PasswordReset
