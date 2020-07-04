import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import GenericError from '../GenericError'

storiesOf('GenericError', module).add('Default', () => (
  <Grommet theme={theme}>
    <GenericError />
  </Grommet>
))
