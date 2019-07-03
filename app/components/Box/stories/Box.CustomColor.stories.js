import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet' /** @todo: replace with custom wrappers */
import { grommet } from 'grommet/themes'

import Box from '../Box'

storiesOf('Box', module).add('Custom', () => (
  <Grommet theme={grommet}>
    <Box
      justify="center"
      align="center"
      pad="xlarge"
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      round="large"
    >
      <p color="white">I have a linear gradient background</p>
    </Box>
  </Grommet>
))
