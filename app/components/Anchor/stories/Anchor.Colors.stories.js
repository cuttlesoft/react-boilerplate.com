import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'
import { Add } from 'grommet-icons'
import { Container } from '../../Container'
import Anchor from '../Anchor'
import { Box } from '../../Box'

storiesOf('Anchor', module).add('Colors', () => (
  <Container theme={grommet}>
    <Box pad="medium" gap="medium">
      <Anchor icon={<Add />} href="#" />
      <Anchor icon={<Add />} label="Add" href="#" />
      <Anchor label="Add" href="#" />
    </Box>
    <Box background="dark-1" pad="medium" gap="medium">
      <Anchor icon={<Add />} href="#" />
      <Anchor icon={<Add />} label="Add" href="#" />
      <Anchor icon={<Add />} label="Add" href="#" />
      <Anchor label="Add" href="#" />
    </Box>
  </Container>
))
