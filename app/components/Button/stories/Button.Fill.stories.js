import React from 'react'
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
  .add('Fill', () => (
    <StoryContainer>
      <Box pad="medium" justify="center" direction="row">
        <Box justify="center" align="center" pad="medium" gap="medium">
          <Box border justify="center" align="center" height="100px" width="300px">
            <Button title="False" onClick={() => {}} />
          </Box>

          <Box border justify="center" align="center" height="100px" width="300px">
            <Button title="True" fill onClick={() => {}} />
          </Box>

          <Box border justify="center" align="center" height="100px" width="300px">
            <Button title="Horizontal" fill="horizontal" onClick={() => {}} />
          </Box>

          <Box border justify="center" align="center" height="100px" width="300px">
            <Button title="Vertical" fill="vertical" onClick={() => {}} />
          </Box>
        </Box>

        <Box
          pad="medium"
          justify="center"
          align="center"
          height="700px"
          width="300px"
          gap="medium"
        >
          <Button title="False" onClick={() => {}} />
          <Button title="True" fill onClick={() => {}} />
          <Button title="Horizontal" fill="horizontal" onClick={() => {}} />
          <Button title="Vertical" fill="vertical" onClick={() => {}} />
        </Box>
      </Box>
    </StoryContainer>
  ))
