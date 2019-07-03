import React from 'react'
import { storiesOf } from '@storybook/react'

import { grommet } from 'grommet/themes'
import { Container } from '../../Container'
import Image from '../Image'
import sampleImg from '../../../images/sample_image.jpg'

storiesOf('Image', module).add('Fallback', () => (
  <Container theme={grommet}>
    <Image fallback={sampleImg} src="//v2.grommet.io/assets/IMG_4245_not_exists.jpg" />
  </Container>
))
