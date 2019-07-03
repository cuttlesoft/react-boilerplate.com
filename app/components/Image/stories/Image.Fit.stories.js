import React from 'react'
import { storiesOf } from '@storybook/react'

import { grommet } from 'grommet/themes'
import { Container } from '../../Container'
import { Box } from '../../Box'
import Image from '../Image'
import sampleImg from '../../../images/sample_image.jpg'

storiesOf('Image', module).add('Fit', () => (
  <Container theme={grommet}>
    <Box align="start" gap="medium">
      <Box height="small" width="small" border>
        <Image src={sampleImg} fit="contain" />
      </Box>
      <Box height="small" width="small" border>
        <Image src={sampleImg} fit="cover" />
      </Box>
    </Box>
  </Container>
))
