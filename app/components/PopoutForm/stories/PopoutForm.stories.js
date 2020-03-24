import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import PopoutForm from '../PopoutForm'

storiesOf('PopoutForm', module).add('Default', () => (
  <Grommet theme={theme}>
    <PopoutForm />
  </Grommet>
))
