import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { StoryContainer } from '../../StoryContainer'
import Text from '../Text'

// Misc
import README from '../README.md'

const SIZES = ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', '77px']

storiesOf('Text', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('All', () => (
    <StoryContainer>
      {SIZES.map(size => (
        <Box key={size} margin="small">
          <Text size={size}>{`Text ${size}`}</Text>
        </Box>
      ))}
    </StoryContainer>
  ))
