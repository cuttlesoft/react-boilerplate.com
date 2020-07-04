import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import Container from '../Container'

storiesOf('Container', module).add('Default', () => (
  <Grommet theme={theme}>
    <Container />
  </Grommet>
))
