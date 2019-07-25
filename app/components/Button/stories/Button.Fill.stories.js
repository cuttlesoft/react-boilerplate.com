import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet'

import { Box } from '../../Box'
import { Container } from '../../Container'
import { Button } from '..'
import README from '../README.md'

const FillButtons = props => (
  <Container theme={grommet}>
    <Box pad="medium" justify="center" direction="row">
      <Box justify="center" align="center" pad="medium" gap="medium">
        <Box border justify="center" align="center" height="100px" width="300px">
          <Button title="False" onClick={() => {}} {...props} />
        </Box>
        <Box border justify="center" align="center" height="100px" width="300px">
          <Button title="True" fill onClick={() => {}} {...props} />
        </Box>
        <Box border justify="center" align="center" height="100px" width="300px">
          <Button title="Horizontal" fill="horizontal" onClick={() => {}} {...props} />
        </Box>
        <Box border justify="center" align="center" height="100px" width="300px">
          <Button title="Vertical" fill="vertical" onClick={() => {}} {...props} />
        </Box>
      </Box>

      <Box pad="medium" justify="center" align="center" height="700px" width="300px" gap="medium">
        <Button title="False" onClick={() => {}} {...props} />
        <Button title="True" fill onClick={() => {}} {...props} />
        <Button title="Horizontal" fill="horizontal" onClick={() => {}} {...props} />
        <Button title="Vertical" fill="vertical" onClick={() => {}} {...props} />
      </Box>
    </Box>
  </Container>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Fill', () => <FillButtons />)
