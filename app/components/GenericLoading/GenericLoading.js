import React from 'react'

import { Box } from '../Box'
import { Heading } from '../Heading'

/**
 * GenericLoading
 */
const GenericLoading = () => (
  <Box height="90vh" justify="center">
    <Heading level="1" margin={{ bottom: 'small' }} size="large" textAlign="center">
      <span role="img" aria-label="Hourglass">
        ⏳
      </span>
    </Heading>

    <Heading level="2" margin={{ top: 'small' }} textAlign="center">
      Loading...
    </Heading>
  </Box>
)

export default GenericLoading
