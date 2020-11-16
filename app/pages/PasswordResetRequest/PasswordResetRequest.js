/* @flow */
import React, { useEffect, useState } from 'react'
import { isEmail } from 'validator'
import PropTypes from 'prop-types'

// Components
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form, FormField } from 'components/Form'
import { FormContainer } from 'components/FormContainer'
import { Heading } from 'components/Heading'
import { Link } from 'components/Link'
import { LogoHeader } from 'components/LogoHeader'
import { Message } from 'components/Message'

import { TextInput } from 'components/TextInput'

// Utils and messages
import useFlashMessage from '../../hooks/FlashMessage'
import { forgotPassword } from '../../services/user.service'

/**
 *
 * PasswordResetRequest
 *
 */
const PasswordResetRequest = ({ location }) => {
  // Mesage
  const { message: error, showMessage: showError } = useFlashMessage(null)

  // State
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (location && location.state && location.state.email) {
      setEmail(location.state.email)
    }
  }, [])

  useEffect(() => {
    document.getElementById('reset-password-request-form').reset()
  }, [success])

  return (
    <Box>
      <LogoHeader />

      <FormContainer>
        <Box align="center">
          <Heading level="2">Forgot your password?</Heading>
          <Link to="/login">or Sign In</Link>
        </Box>

        <Form
          id="reset-password-request-form"
          validate="blur"
          onSubmit={({ value }) => {
            forgotPassword(value, showError, setLoading, setSuccess)
          }}
        >
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
            value={email}
          >
            <TextInput type="email" value={email} />
          </FormField>

          {/* Submit */}
          <Box direction="row" fill="horizontal" margin={{ vertical: 'medium' }}>
            <Button disabled={loading} fill="horizontal" label="Submit" primary type="submit" />
          </Box>

          {/* Status Messages */}
          {success && <Message message="Success! Check your email to reset your password." />}
          {error && <Message message={error} isError />}
        </Form>
      </FormContainer>
    </Box>
  )
}

PasswordResetRequest.propTypes = {
  location: PropTypes.object.isRequired,
}

export default PasswordResetRequest
