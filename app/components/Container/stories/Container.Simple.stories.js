import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import Container from '../Container'
import { Box } from '../../Box'

storiesOf('Container', module).add('Simple', () => (
  <Fragment>
    <Container plain>
      <Box pad="medium">
        <p>Plain Container</p>
      </Box>
    </Container>
    <Container>
      <Box pad="medium">
        <p>Not plain Container</p>
      </Box>
    </Container>
  </Fragment>
))
