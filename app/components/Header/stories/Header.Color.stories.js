import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import Header from '../Header'

storiesOf('Header', module).add('Color', () => (
  <Grommet theme={grommet}>
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
  </Grommet>
))
