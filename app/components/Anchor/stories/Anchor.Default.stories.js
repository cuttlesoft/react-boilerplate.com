import React from 'react'
import { storiesOf } from '@storybook/react'

import { Container } from '../../Container'
import { Box } from '../../Box'
import { Anchor } from '..'
import README from '../README.md'

storiesOf('Anchor', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => (
    <Container>
      <Box align="center" pad="large">
        <Anchor href="#">Link</Anchor>
      </Box>
    </Container>
  ))
