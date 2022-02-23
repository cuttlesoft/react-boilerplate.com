/* @flow */
import React, { useState, useEffect } from 'react'
import {
  CheckBox,
  Markdown,
  RadioButtonGroup,
} from 'grommet' /** @todo replace with wrapper component */
import { isEmail } from 'validator'

// Components
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form, FormField } from 'components/Form'
import { FormContainer } from 'components/FormContainer'
import { Heading } from 'components/Heading'
import { Link } from 'components/Link'
import { LogoHeader } from 'components/LogoHeader'
import { Message } from 'components/Message'
import { Modal } from 'components/Modal'
import { PasswordInput } from 'components/PasswordInput'
import { Text } from 'components/Text'
import { TextInput } from 'components/TextInput'

// Assets
import TOS from 'assets/files/TOS.md'

// Utils and messages
import useFlashMessage from '../../hooks/FlashMessage'
import { createAccount } from '../../services/user.service'

/**
 *
 * Register
 *
 */
const Register = () => {
  const [showModal, setShowModal] = useState(false)

  const { message: error, showMessage: showError } = useFlashMessage(null)

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(false)
  useEffect(() => {
    document.getElementById('register-form').reset()
  }, [success])

  return (
    <>
      <LogoHeader />

      <FormContainer>
        <Box align="center">
          <Heading level="2">Create an account</Heading>
          <Link to="/login">or Sign In</Link>
        </Box>

        <Form
          id="register-form"
          validate="blur"
          onSubmit={({ value }) => {
            createAccount(value, showError, setLoading, setSuccess)
          }}
        >
          <Box flex="grow" gap="small" direction="row" alignItems="stretch">
            <FormField
              label="First Name"
              name="first_name"
              required
              style={{ flex: 1 }}
              validate={[
                name => {
                  if (name && name.length === 1) return 'Please enter more than one character'
                  return undefined
                },
              ]}
            />

            <FormField
              label="Last Name"
              name="last_name"
              required
              style={{ flex: 1 }}
              validate={[
                name => {
                  if (name && name.length === 1) return 'Please enter more than one character'
                  return undefined
                },
              ]}
            />
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
            <TextInput type="email" />
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
              password => {
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
              confirmPassword => {
                if (confirmPassword && confirmPassword.length <= 8)
                  return 'Please enter more than 8 characters'
                return undefined
              },
              confirmPassword => {
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

          <FormField label="Account Type." name="role" required>
            <RadioButtonGroup
              direction="row"
              gap="xsmall"
              options={[
                {
                  label: 'Supplier',
                  value: 'Supplier Admin',
                },
                {
                  label: 'Broker',
                  value: 'Broker Admin',
                },
              ]}
            >
              {(option, { checked, hover }) => {
                let background = 'light-2'
                if (checked) background = 'brand'
                else if (hover) background = 'light-4'

                return (
                  <Box background={background} pad="xsmall">
                    <Text size="xsmall" weight="bold">
                      {option.label}
                    </Text>
                  </Box>
                )
              }}
            </RadioButtonGroup>
          </FormField>

          {/* TOS */}
          <Box align="center" direction="row" margin={{ top: 'large' }}>
            <CheckBox id="check-box" />

            <Text size="xsmall" margin={{ left: '10px' }}>
              I agree to the{' '}
              <Text size="xsmall" color="brand" weight="bold" onClick={() => setShowModal(true)}>
                &nbsp;Terms of Service, Privacy Policy and Cookie Policy
              </Text>
            </Text>

            <Modal showModal={showModal} setShowModal={setShowModal} title="Terms of Service">
              <Markdown>{TOS}</Markdown>
            </Modal>
          </Box>

          {/* Submit */}
          <Box direction="row" fill="horizontal" margin={{ vertical: 'medium' }}>
            <Button
              data-testid="submit-button"
              disabled={loading}
              fill="horizontal"
              label="Register"
              primary
              type="submit"
            />
          </Box>

          {/* Status Messages */}
          {success && (
            <Message message="Account created! Check your email to confirm your account." />
          )}
          {error && <Message message={error} isError />}
        </Form>
      </FormContainer>
    </>
  )
}

export default Register
