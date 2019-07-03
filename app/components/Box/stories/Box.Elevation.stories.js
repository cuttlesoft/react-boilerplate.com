import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet' /** @todo: replace with custom wrappers */
import { grommet } from 'grommet/themes'

import Box from '../Box'

storiesOf('Box', module).add('Elevation', () => (
  <Grommet theme={grommet}>
    <Box pad="small" align="start">
      <Box pad="medium" background="dark-1" elevation="medium" gap="medium">
        <p>dark on white</p>
        <Box pad="medium" elevation="medium" gap="medium">
          <p>dark on dark</p>
          <Box pad="medium" background="light-1" elevation="medium" gap="medium">
            <p>light on dark</p>
            <Box pad="medium" elevation="medium">
              <p>light on light</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Grommet>
))
