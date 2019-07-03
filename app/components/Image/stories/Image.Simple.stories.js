import React from 'react'
import { storiesOf } from '@storybook/react'

import { grommet } from 'grommet/themes'
import { Container } from '../../Container'
import Image from '../Image'
import sampleImg from '../../../images/sample_image.jpg'

storiesOf('Image', module).add('Simple', () => (
  <Container theme={grommet}>
    <Image src={sampleImg} />
  </Container>
))
