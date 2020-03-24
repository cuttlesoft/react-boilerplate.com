import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Container } from '../../Container'
import Menu from '../Menu'

storiesOf('Menu', module).add('Default', () => (
  <Container>
    <Menu />
  </Container>
))
