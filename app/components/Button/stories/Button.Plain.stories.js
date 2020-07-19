import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from 'grommet' /** @todo: replace with custom wrappers */
import { Add } from 'grommet-icons'

// Components
import { Box } from '../../Box'
import { Button } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

const PlainButton = props => (
  <StoryContainer>
    <Box align="center" pad="large">
      <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
        <Box pad="small" direction="row" align="center" gap="small">
          <Add />

          <Text>Add</Text>
        </Box>
      </Button>
    </Box>
  </StoryContainer>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Active', () => <PlainButton active />)
  .add('Plain', () => <PlainButton />)
