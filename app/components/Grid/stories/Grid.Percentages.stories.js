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
  .add('Percentages', () => <Percentages />)

const Percentages = () => (
  <StoryContainer>
    <Grid
      fill
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
      columns={['small', 'flex']}
      rows={['flex']}
      gap="small"
    >
      <Box gridArea="nav" background="brand" />
      <Box gridArea="main" background="brand" />
    </Grid>
  </StoryContainer>
)
