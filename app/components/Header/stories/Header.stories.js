import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import Header from '../Header'

storiesOf('Header', module).add('Default', () => (
  <Grommet theme={theme}>
    <Header />
  </Grommet>
))
