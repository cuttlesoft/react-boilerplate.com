import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { Image } from '..'
import { StoryContainer } from '../../StoryContainer'

// Assets
import sampleImg from '../../../assets/images/sample_image.jpg'

// Misc
import README from '../README.md'

storiesOf('Image', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Fit', () => (
    <StoryContainer>
      <Box align="start" gap="medium">
        <Box height="small" width="small" border>
          <Image src={sampleImg} fit="contain" />
        </Box>

        <Box height="small" width="small" border>
          <Image src={sampleImg} fit="cover" />
        </Box>
      </Box>
    </StoryContainer>
  ))
