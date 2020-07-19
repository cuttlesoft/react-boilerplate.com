import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
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
  .add('Simple', () => (
    <StoryContainer>
      <Image src={sampleImg} />
    </StoryContainer>
  ))
