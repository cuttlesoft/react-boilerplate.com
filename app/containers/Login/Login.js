/* @flow */
import React from 'react'
import { isEmail } from 'validator'

// Components
import { Anchor } from 'components/Anchor'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form, FormField } from 'components/Form'
import { Heading } from 'components/Heading'
import { PasswordInput } from 'components/PasswordInput'
import { TextInput } from 'components/TextInput'

/**
 *
 * Login
 *
 */
const Login = () => (
  <>
    <Box align="center" pad="large">
      <Heading level="2">Login</Heading>
      <Anchor href="/register" label="or Create An Account"></Anchor>
    </Box>

    <Form
      validate="blur"
      onSubmit={({ value }) => {
        // eslint-disable-next-line no-console
        console.log('Submit', value)
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
      <Box direction="row" margin={{ top: 'medium' }}>
        <Button type="submit" label="Login" primary />
      </Box>
    </Form>
  </>
)

export default Login
