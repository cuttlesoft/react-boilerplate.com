import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Box } from '../../Box'
import { StoryContainer } from '../../StoryContainer'
import { Button } from '..'
import README from '../README.md'

const BasicButtons = props => (
  <StoryContainer>
    <Box align="center" pad="medium">
      <Button title="Default" onClick={action('clicked')} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button title="Anchor" href="#" />
    </Box>
    <Box align="center" pad="medium">
      <Button disabled title="Disabled" onClick={action('clicked')} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button primary title="Primary" onClick={action('clicked')} {...props} />
    </Box>
  </StoryContainer>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Basic', () => <BasicButtons />)
