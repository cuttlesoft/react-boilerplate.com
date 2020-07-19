import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { Checkbox } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Checkbox', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => <SimpleCheckbox />)

const SimpleCheckbox = props => {
  const [checked, toggleChecked] = useState(false)

  return (
    <StoryContainer>
      <Box align="center" pad="large">
        <Checkbox
          {...props}
          label="Choice"
          checked={checked}
          onChange={e => toggleChecked(e.target.checked)}
        />
      </Box>
    </StoryContainer>
  )
}
