import React from 'react'
import { storiesOf } from '@storybook/react'
import { Add } from 'grommet-icons'

// Components
import { Box } from '../../Box'
import { Button } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Icon Label', () => (
    <StoryContainer>
      <Box align="center" pad="large">
        <Box round="full" overflow="hidden" background="neutral-1">
          <Button icon={<Add />} hoverIndicator onClick={() => {}} />
        </Box>

        <Box align="center" pad="large" gap="small">
          <Button icon={<Add />} title="Add" onClick={() => {}} primary />
          <Button icon={<Add />} title="Add" onClick={() => {}} />
          <Button icon={<Add />} title="Add" gap="xlarge" onClick={() => {}} />
          <Button icon={<Add />} title="500px gap" gap="500px" onClick={() => {}} />
        </Box>
      </Box>
    </StoryContainer>
  ))
