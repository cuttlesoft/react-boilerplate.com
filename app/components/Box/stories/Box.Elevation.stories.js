import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Box', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Elevation', () => (
    <StoryContainer>
      <Box pad="small" align="start">
        <Box pad="medium" background="dark-1" elevation="medium" gap="medium">
          <p>dark on white</p>

          <Box pad="medium" elevation="medium" gap="medium">
            <p>dark on dark</p>

            <Box pad="medium" background="light-1" elevation="medium" gap="medium">
              <p>light on dark</p>

              <Box pad="medium" elevation="medium">
                <p>light on light</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </StoryContainer>
  ))
