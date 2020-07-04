import React from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from '../../Box'
import { StoryContainer } from '../../StoryContainer'
import { Anchor } from '..'
import README from '../README.md'

storiesOf('Anchor', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Size', () => (
    <StoryContainer>
      <Box align="center" pad="large">
        {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(size => (
          <Box key={size} margin="small">
            <Anchor size={size} label={size} href="#" />
          </Box>
        ))}
      </Box>
    </StoryContainer>
  ))
