import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from 'grommet' /** @todo: replace with custom wrappers */
import { Add } from 'grommet-icons'

import { Box } from '../../Box'
import { Container } from '../../Container'
import { Button } from '..'
import README from '../README.md'

const PlainButton = props => (
  <Container>
    <Box align="center" pad="large">
      <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
        <Box pad="small" direction="row" align="center" gap="small">
          <Add />
          <Text>Add</Text>
        </Box>
      </Button>
    </Box>
  </Container>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Active', () => <PlainButton active />)
  .add('Plain', () => <PlainButton />)
