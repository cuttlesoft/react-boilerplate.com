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
  .add('Multiple', () => (
    <StoryContainer>
      <Box align="center" pad="large">
        <Box direction="row" align="center" gap="small" pad="xsmall">
          <Button title="Cancel" onClick={() => {}} />

          <Button
            color="dark-1"
            primary
            icon={<Add color="accent-1" />}
            title="Add"
            onClick={() => {}}
          />
        </Box>

        <Box direction="row" align="center" gap="small" pad="xsmall">
          <Button title="Cancel" onClick={() => {}} />
          <Button color="dark-1" primary icon={<Add />} title="Add" onClick={() => {}} />
        </Box>

        <Box direction="row" align="center" gap="small" pad="xsmall">
          <Button title="Cancel" onClick={() => {}} />
          <Button primary icon={<Add />} title="Add" onClick={() => {}} />
        </Box>

        <Box direction="row" align="center" gap="small" pad="xsmall">
          <Button title="Cancel" onClick={() => {}} />
          <Button color="light-2" primary icon={<Add />} title="Add" onClick={() => {}} />
        </Box>
      </Box>
    </StoryContainer>
  ))
