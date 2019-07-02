import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Grommet } from 'grommet' /** @todo: replace with custom wrappers */
import { grommet } from 'grommet/themes'
import { Add } from 'grommet-icons'
import Anchor from '../Anchor'

storiesOf('Anchor', module).add('Colors', () => (
  <Grommet theme={grommet}>
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
  </Grommet>
))
