import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { grommet, Text } from 'grommet' /** @todo: replace with custom wrappers */

import { genericProps } from '../../../utils/propTypes'
import { Box } from '../../Box'
import { Container } from '../../Container'
import { Button } from '..'
import README from '../README.md'

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
    <Container full theme={grommet}>
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
    </Container>
  )
}

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Sidebar', () => <SidebarButtons />)
