import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Grommet } from 'grommet' /** @todo: replace with custom wrappers */
import { grommet } from 'grommet/themes'
import { Add } from 'grommet-icons'

import Button from '../Button'

const IconLabel = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Box round="full" overflow="hidden" background="neutral-1">
        <Button icon={<Add />} hoverIndicator onClick={() => {}} />
      </Box>
      <Box align="center" pad="large" gap="small">
        <Button icon={<Add />} title="Add" onClick={() => {}} primary />
        <Button icon={<Add />} title="Add" onClick={() => {}} />
        <Button icon={<Add />} title="Add" gap="xlarge" onClick={() => {}} />
        <Button icon={<Add />} title="500px gap" gap="500px" onClick={() => {}} />
      </Box>
    </Box>
  </Grommet>
)

storiesOf('Button', module).add('Icon Label', () => <IconLabel />)
