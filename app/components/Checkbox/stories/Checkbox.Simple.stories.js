import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from '../../Box'
import { Container } from '../../Container'
import { Checkbox } from '..'
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
    <Container>
      <Box align="center" pad="large">
        <Checkbox
          {...props}
          label="Choice"
          checked={checked}
          onChange={e => toggleChecked(e.target.checked)}
        />
      </Box>
    </Container>
  )
}
