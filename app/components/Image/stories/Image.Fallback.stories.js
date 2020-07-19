import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { StoryContainer } from '../../StoryContainer'
import { Image } from '..'

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
  .add('Fallback', () => (
    <StoryContainer>
      <Image fallback={sampleImg} src="//v2.grommet.io/assets/IMG_4245_not_exists.jpg" />
    </StoryContainer>
  ))
