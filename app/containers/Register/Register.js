/* @flow */
import React, { useState } from 'react'
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
import { Modal } from 'components/Modal'
import { PasswordInput } from 'components/PasswordInput'
import { Text } from 'components/Text'
import { TextInput } from 'components/TextInput'

import TOS from 'assets/files/TOS.md'

/**
 *
 * Register
 *
 */
const Register = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Box align="center" pad="large">
        <Heading level="2">Create an account</Heading>
        <Anchor href="/login" label="or Sign In"></Anchor>
      </Box>

      <Form
        validate="blur"
        onSubmit={({ value }) => {
          // eslint-disable-next-line no-console
          console.log('Submit', value)
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

        <FormField
          label="Account Type."
          name="user_type"
          required
          validate={[
            confirmPassword => {
              if (confirmPassword && confirmPassword.length > 8)
                return 'Please enter more than 8 characters'
              return undefined
            },
          ]}
        >
          <RadioButtonGroup
            name="user_type"
            direction="row"
            gap="xsmall"
            options={['Artist', 'Venue', 'Crew']}
          >
            {(option, { checked, hover }) => {
              let background = 'light-2'
              if (checked) background = 'brand'
              else if (hover) background = 'light-4'

              return (
                <Box background={background} pad="xsmall">
                  <Text weight="bold">{option}</Text>
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
        <Box direction="row" justify="between" margin={{ top: 'medium' }}>
          <Button type="submit" label="Register" primary />
        </Box>
      </Form>
    </>
  )
}

export default Register
