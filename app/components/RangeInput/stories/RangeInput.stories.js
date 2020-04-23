import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Container } from '../../Container'
import RangeInput from '../RangeInput'

storiesOf('RangeInput', module).add('Default', () => (
  <Container>
    <RangeInput />
  </Container>
))
