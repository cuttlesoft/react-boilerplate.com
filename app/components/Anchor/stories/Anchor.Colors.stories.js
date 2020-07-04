import React from 'react'
import { storiesOf } from '@storybook/react'
import { Add } from 'grommet-icons'

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
  .add('Colors', () => (
    <StoryContainer>
      <Box pad="medium" gap="medium">
        <Anchor icon={<Add />} href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor label="Add" href="#" />
      </Box>
      <Box background="dark-1" pad="medium" gap="medium">
        <Anchor icon={<Add />} href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor label="Add" href="#" />
      </Box>
    </StoryContainer>
  ))
