import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

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
  .add('Basic', () => (
    <StoryContainer>
      <Box align="center" pad="medium">
        <Button title="Default" onClick={action('clicked')} />
      </Box>

      <Box align="center" pad="medium">
        <Button title="Anchor" href="#" />
      </Box>

      <Box align="center" pad="medium">
        <Button disabled title="Disabled" onClick={action('clicked')} />
      </Box>

      <Box align="center" pad="medium">
        <Button primary title="Primary" onClick={action('clicked')} />
      </Box>
    </StoryContainer>
  ))
