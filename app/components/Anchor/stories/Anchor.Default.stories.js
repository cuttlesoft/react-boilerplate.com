import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'

import { Container } from '../../Container'
import { Box } from '../../Box'
import Anchor from '../Anchor'

storiesOf('Anchor', module).add('Default', () => (
  <Container theme={grommet}>
    <Box align="center" pad="large">
      <Anchor href="#">Link</Anchor>
    </Box>
  </Container>
))
