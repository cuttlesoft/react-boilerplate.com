import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import AutoSaveFormField from '../AutoSaveFormField'

storiesOf('AutoSaveFormField', module).add('Default', () => (
  <Grommet theme={theme}>
    <AutoSaveFormField />
  </Grommet>
))
