import React from 'react'
import { storiesOf } from '@storybook/react'

import sampleImg from '../../../assets/images/sample_image.jpg'
import { Box } from '../../Box'
import { StoryContainer } from '../../StoryContainer'
import { Image } from '..'
import README from '../README.md'

storiesOf('Image', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Opacity', () => (
    <StoryContainer>
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
    </StoryContainer>
  ))
