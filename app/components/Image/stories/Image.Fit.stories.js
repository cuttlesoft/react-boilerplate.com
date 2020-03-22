import React from 'react'
import { storiesOf } from '@storybook/react'

import sampleImg from '../../../assets/images/sample_image.jpg'
import { Box } from '../../Box'
import { Container } from '../../Container'
import { Image } from '..'
import README from '../README.md'

storiesOf('Image', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Fit', () => (
    <Container>
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
