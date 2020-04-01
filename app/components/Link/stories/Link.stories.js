import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import Link from '../Link'

storiesOf('Link', module).add('Default', () => (
  <Grommet theme={theme}>
    <Link to="/" />
  </Grommet>
))
