/* @flow */
import React, { useState, useEffect } from 'react'
import {
  CheckBox,
  Markdown,
  RadioButtonGroup,
} from 'grommet' /** @todo replace with wrapper component */
import { isEmail } from 'validator'

// Components
import { Anchor } from 'components/Anchor'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form, FormField } from 'components/Form'
import { Heading } from 'components/Heading'
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

  /**
   * Helper to determine if the submit button is disabled
   */
  const _isButtonDisabled = () => loading

  return (
    <>
      <Box align="center" pad="large">
        <Heading level="2">Create an account</Heading>
        <Anchor href="/login" label="or Sign In"></Anchor>
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
              { regexp: /^[a-z]/i },
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
              { regexp: /^[a-z]/i },
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
          <PasswordInput id="password" name="password" />
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
          <PasswordInput name="confirm_password" />
        </FormField>

        <FormField label="Account Type." name="role" required>
          <RadioButtonGroup
            name="role"
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
                  <Text weight="bold">{option.label}</Text>
                </Box>
              )
            }}
          </RadioButtonGroup>
        </FormField>

        {/* TOS */}
        <Box direction="row" margin={{ top: 'large' }}>
          <CheckBox id="check-box" label={<Text size="xsmall">I agree with the</Text>} />

          <Text size="xsmall" color="brand" weight="bold" onClick={() => setShowModal(true)}>
            &nbsp;Terms of Service, Privacy Policy and Cookie Policy
          </Text>

          <Modal showModal={showModal} setShowModal={setShowModal} title="Terms of Service">
            <Markdown>{TOS}</Markdown>
          </Modal>
        </Box>

        {/* Submit */}
        <Box direction="row" justify="between" margin={{ vertical: 'medium' }}>
          <Button type="submit" label="Register" disabled={_isButtonDisabled()} />
        </Box>

        {/* Status Messages */}
        {success && (
          <Message message="Account created! Check your email to confirm your account." />
        )}
        {error && <Message message={error} isError />}
      </Form>
    </>
  )
}

export default Register
