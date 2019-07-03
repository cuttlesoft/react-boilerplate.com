import React from 'react'
import { storiesOf } from '@storybook/react'

import { grommet } from 'grommet/themes'
import { Container } from '../../Container'
import Header from '../Header'

storiesOf('Header', module).add('Color', () => (
  <Container theme={grommet}>
    <Header level="1" size="small" color="accent-1">
      This is level 1 header
    </Header>
    <Header size="medium" color="accent-2">
      This is level 1 header
    </Header>
    <Header size="large" color="neutral-1">
      This is level 1 header
    </Header>
    <Header size="xlarge" color="neutral-2">
      This is level 1 header
    </Header>
  </Container>
))
