import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'

import { Container } from '../../Container'
import { Box } from '../../Box'
import Anchor from '../Anchor'

storiesOf('Anchor', module).add('Inline', () => (
  <Container theme={grommet}>
    <Box align="center" pad="large">
      <p>
        This is <Anchor label="an inline link" href="#" /> with surrounding text.
      </p>
    </Box>
  </Container>
))
