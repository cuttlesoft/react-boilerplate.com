import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import Image from '../Image'
import sampleImg from '../../../images/sample_image.jpg'

storiesOf('Image', module).add('Fallback', () => (
  <Grommet theme={grommet}>
    <Image fallback={sampleImg} src="//v2.grommet.io/assets/IMG_4245_not_exists.jpg" />
  </Grommet>
))
