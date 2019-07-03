import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { grommet } from 'grommet/themes'
import { Container } from '../../Container'
import { Box } from '../../Box'
import Checkbox from '../Checkbox'

storiesOf('Checkbox', module).add('Simple', () => <SimpleCheckbox />)

const SimpleCheckbox = props => {
  const [checked, toggleChecked] = useState(false)
  return (
    <Container theme={grommet}>
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
