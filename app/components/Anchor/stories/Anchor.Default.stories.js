import React from 'react'
import { storiesOf } from '@storybook/react'

import { Box, Grommet } from 'grommet' /** @todo: replace with custom wrappers */
import { grommet } from 'grommet/themes'
import Anchor from '../Anchor'

storiesOf('Anchor', module).add('Default', () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Anchor href="#">Link</Anchor>
    </Box>
  </Grommet>
))
