import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet, Box } from 'grommet'
import { grommet } from 'grommet/themes'
import Image from '../Image'
import sampleImg from '../../../images/sample_image.jpg'

storiesOf('Image', module).add('Opacity', () => (
  <Grommet theme={grommet}>
    <Box gap="small" direction="row">
      <Image src={sampleImg} />
      <Image opacity="strong" src={sampleImg} />
    </Box>
    <Box gap="small" direction="row">
      <Image opacity="medium" src={sampleImg} />
      <Image opacity="weak" src={sampleImg} />
    </Box>
    <Box gap="small" direction="row">
      <Image opacity={false} src={sampleImg} />
      <Image opacity src={sampleImg} />
    </Box>
    <Box gap="small" direction="row">
      <Image opacity="0.6" src={sampleImg} />
    </Box>
  </Grommet>
))
