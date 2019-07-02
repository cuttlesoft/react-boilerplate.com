import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import Header from '../Header'

storiesOf('Header', module).add('Size', () => (
  <Grommet theme={grommet}>
    <Header level="1" size="small">
      This is level 1 header
    </Header>
    <Header size="medium">This is level 1 header</Header>
    <Header size="large">This is level 1 header</Header>
    <Header size="xlarge">This is level 1 header</Header>
  </Grommet>
))
