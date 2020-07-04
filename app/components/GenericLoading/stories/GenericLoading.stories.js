import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import GenericLoading from '../GenericLoading'

storiesOf('GenericLoading', module).add('Default', () => (
  <Grommet theme={theme}>
    <GenericLoading />
  </Grommet>
))
