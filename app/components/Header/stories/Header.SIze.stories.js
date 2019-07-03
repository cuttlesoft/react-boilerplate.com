import React from 'react'
import { storiesOf } from '@storybook/react'

import { grommet } from 'grommet/themes'
import Header from '../Header'
import { Container } from '../../Container'

storiesOf('Header', module).add('Size', () => (
  <Container theme={grommet}>
    <Header level="1" size="small">
      This is level 1 header
    </Header>
    <Header size="medium">This is level 1 header</Header>
    <Header size="large">This is level 1 header</Header>
    <Header size="xlarge">This is level 1 header</Header>
  </Container>
))
