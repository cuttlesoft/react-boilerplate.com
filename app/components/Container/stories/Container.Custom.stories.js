import React from 'react'
import { storiesOf } from '@storybook/react'
import { Add } from 'grommet-icons'

import { Box } from '../../Box'
import { Anchor } from '../../Anchor'
import Container from '../Container'

const customTheme = {
  global: {
    colors: {
      custom: '#cc6633',
    },
  },
}

storiesOf('Container', module).add('Custom', () => (
  <Container theme={customTheme}>
    <Box pad="medium">
      <Anchor icon={<Add />} label="Add" color="custom" />
    </Box>
  </Container>
))
