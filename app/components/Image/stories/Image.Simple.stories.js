import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import Image from '../Image'
import sampleImg from '../../../images/sample_image.jpg'

storiesOf('Image', module).add('Simple', () => (
  <Grommet theme={grommet}>
    <Image src={sampleImg} />
  </Grommet>
))
