import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'

import { Container } from '../../Container'
import { Heading } from '..'
import README from '../README.md'

storiesOf('Heading', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Size', () => (
    <Container theme={grommet}>
      <Heading level="1" size="small">
        This is level 1 header
      </Heading>

      <Heading size="medium">This is level 1 header</Heading>

      <Heading size="large">This is level 1 header</Heading>

      <Heading size="xlarge">This is level 1 header</Heading>
    </Container>
  ))
