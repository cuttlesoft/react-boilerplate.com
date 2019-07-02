import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'
import { Box, Grommet, Paragraph } from 'grommet' /** @todo: replace with custom wrappers */

import Anchor from '../Anchor'

storiesOf('Anchor', module).add('Inline', () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Paragraph>
        This is <Anchor label="an inline link" href="#" /> with surrounding text.
      </Paragraph>
    </Box>
  </Grommet>
))
