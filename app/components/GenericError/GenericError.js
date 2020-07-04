import React from 'react'

import { Box } from '../Box'
import { Heading } from '../Heading'

/**
 * GenericError
 */
const GenericError = () => (
  <Box height="90vh" justify="center">
    <Heading level="1" margin={{ bottom: 'small' }} size="large" textAlign="center">
      <span role="img" aria-label="Crying Face">
        😢
      </span>
    </Heading>

    <Heading level="2" margin={{ top: 'small' }} textAlign="center">
      Could not load data. Try refreshing your page.
    </Heading>
  </Box>
)

export default GenericError
