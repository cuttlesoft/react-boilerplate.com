import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '..'
import { Grid } from '../../Grid'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Box', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Round', () => (
    <StoryContainer>
      <Box pad="small" gap="small">
        <Box pad="small" background="brand" round alignSelf="start">
          true
        </Box>

        <Grid columns="small" gap="small">
          {['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'].map(size => (
            <Box key={size} pad="large" background="brand" round={{ size }}>
              {size}
            </Box>
          ))}
        </Grid>

        <Grid columns="small" gap="small">
          {[
            'left',
            'top',
            'right',
            'bottom',
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',
          ].map(corner => (
            <Box key={corner} pad="small" background="brand" round={{ corner }}>
              {corner}
            </Box>
          ))}

          <Box background="brand" pad="small" round={{ corner: 'left', size: '15px' }}>
            left rounded corner px value
          </Box>
        </Grid>
      </Box>
    </StoryContainer>
  ))
