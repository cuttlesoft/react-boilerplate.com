import React from 'react'

// Components
import { LoadingIndicator } from 'components/LoadingIndicator'

// Helpers
import loadable from 'utils/loadable'

/**
 * Asynchronously loads the component for NotFoundPage
 */
export default loadable(() => import('./NotFoundPage'), {
  fallback: <LoadingIndicator />,
})
