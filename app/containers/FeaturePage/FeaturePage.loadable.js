import React from 'react'

import loadable from 'utils/loadable'
import { LoadingIndicator } from 'components/LoadingIndicator'

/**
 * Asynchronously loads the component for FeaturePage
 */
export default loadable(() => import('./FeaturePage'), {
  fallback: <LoadingIndicator />,
})
