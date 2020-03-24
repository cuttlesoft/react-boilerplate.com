import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Container } from '../../Container'
import Layer from '../Layer'

storiesOf('Layer', module).add('Default', () => (
  <Container>
    <Layer />
  </Container>
))
