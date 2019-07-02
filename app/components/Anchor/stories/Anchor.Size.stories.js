import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'
import { Box, Grommet } from 'grommet' /** @todo: replace with custom wrappers */

import Anchor from '../Anchor'

storiesOf('Anchor', module).add('Size', () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(size => (
        <Box key={size} margin="small">
          <Anchor size={size} label={size} href="#" />
        </Box>
      ))}
    </Box>
  </Grommet>
))
