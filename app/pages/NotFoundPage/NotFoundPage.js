import React from 'react'

// Components
import { Box } from 'components/Box'
import { Heading } from 'components/Heading'

/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
export default function NotFound() {
  return (
    <Box height="90vh" justify="center">
      <Heading size="medium" level="1" textAlign="center">
        4
        <span role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </Heading>
    </Box>
  )
}
