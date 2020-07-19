import React from 'react'
import { storiesOf } from '@storybook/react'
import { Add } from 'grommet-icons'

// Components
import { Anchor } from '../../Anchor'
import { Box } from '../../Box'
import { StoryContainer } from '..'

// Misc
import README from '../README.md'

const customTheme = {
  global: {
    colors: {
      custom: '#cc6633',
    },
  },
}

storiesOf('StoryContainer', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Custom', () => (
    <StoryContainer theme={customTheme}>
      <Box pad="medium">
        <Anchor icon={<Add />} label="Add" color="custom" />
      </Box>
    </StoryContainer>
  ))
