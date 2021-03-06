import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { Button } from '../../Button'
import Form from '../Form'
import FormField from '../FormField'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

const DefaultForm = props => {
  const [email, onEmailChange] = useState('banana@banana.com')
  const [password, onPasswordChange] = useState('tacocat')

  return (
    <StoryContainer full>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onReset={event => {
              // eslint-disable-next-line no-console
              console.info(event)
            }}
            onSubmit={({ value }) => {
              // eslint-disable-next-line no-console
              console.info('Submit', value)
            }}
            {...props}
          >
            <FormField
              label="Email"
              name="email"
              type="email"
              required
              value={email}
              onChange={e => onEmailChange(e.target.value)}
            />

            <FormField
              label="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={e => onPasswordChange(e.target.value)}
            />

            <Button label="Cancel" />

            <Button type="reset" label="Reset" />

            <Button type="submit" label="Submit" primary />
          </Form>
        </Box>
      </Box>
    </StoryContainer>
  )
}

storiesOf('Form', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => <DefaultForm />)
