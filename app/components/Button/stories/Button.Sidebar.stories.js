import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { grommet, Box, Grommet, Text } from 'grommet' /** @todo: replace with custom wrappers */

import Button from '../Button'
import { genericProps } from '../../../utils/propTypes'

const SidebarButton = ({ title, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        background={hover ? 'accent-1' : undefined}
        pad={{ horizontal: 'large', vertical: 'medium' }}
      >
        <Text size="large">{title}</Text>
      </Box>
    )}
  </Button>
)

SidebarButton.propTypes = {
  title: genericProps.title,
}

const SidebarButtons = () => {
  const [active, setActive] = useState()
  return (
    <Grommet full theme={grommet}>
      <Box fill direction="row">
        <Box background="neutral-1">
          {['Dashboard', 'Devices', 'Settings'].map(label => (
            <SidebarButton
              key={label}
              title={label}
              active={label === active}
              onClick={() => setActive(label)}
            />
          ))}
        </Box>
      </Box>
    </Grommet>
  )
}

storiesOf('Button', module).add('Sidebar', () => <SidebarButtons />)
