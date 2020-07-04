import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import FormContainer from '../FormContainer'

storiesOf('FormContainer', module).add('Default', () => (
  <Grommet theme={theme}>
    <FormContainer />
  </Grommet>
))
