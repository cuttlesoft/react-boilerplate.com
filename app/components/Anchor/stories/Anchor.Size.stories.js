import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'
import { Container } from '../../Container'
import { Box } from '../../Box'

import Anchor from '../Anchor'

storiesOf('Anchor', module).add('Size', () => (
  <Container theme={grommet}>
    <Box align="center" pad="large">
      {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(size => (
        <Box key={size} margin="small">
          <Anchor size={size} label={size} href="#" />
        </Box>
      ))}
    </Box>
  </Container>
))
