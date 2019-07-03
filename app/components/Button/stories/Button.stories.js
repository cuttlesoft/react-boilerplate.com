import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { grommet } from 'grommet' /** @todo: replace with custom wrappers */
import { Container } from '../../Container'

import { Box } from '../../Box'
import Button from '../Button'

const BasicButtons = props => (
  <Container theme={grommet}>
    <Box align="center" pad="medium">
      <Button title="Default" onClick={action('clicked')} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button title="Anchor" href="#" />
    </Box>
    <Box align="center" pad="medium">
      <Button disabled title="Disabled" onClick={action('clicked')} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button primary title="Primary" onClick={action('clicked')} {...props} />
    </Box>
  </Container>
)

storiesOf('Button', module).add('Basic', () => <BasicButtons />)
