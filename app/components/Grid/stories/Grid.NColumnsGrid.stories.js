import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import Grid from '../Grid'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Grid', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('NColumns', () => (
    <StoryContainer>
      <Grid
        columns={{
          count: 6,
          size: 'auto',
        }}
        gap="small"
      >
        <Box background="brand">Item 1</Box>
        <Box background="brand">Item 2</Box>
        <Box background="brand">Item 3</Box>
        <Box background="brand">Item 4</Box>
        <Box background="brand">Item 5</Box>
        <Box background="brand">Item 6</Box>
      </Grid>
    </StoryContainer>
  ))
