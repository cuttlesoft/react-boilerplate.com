import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import Modal from '../Modal'

storiesOf('Modal', module).add('Default', () => (
  <Grommet theme={theme}>
    <Modal />
  </Grommet>
))
