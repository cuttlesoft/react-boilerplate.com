import React from 'react'
import loadable from 'utils/loadable'
import { LoadingIndicator } from 'components/LoadingIndicator'

/**
 * Asynchronously loads the component for HomePage
 */
export default loadable(() => import('./HomePage'), {
  fallback: <LoadingIndicator />,
})
