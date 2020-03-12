import React from 'react'
import { IntlProvider } from 'react-intl'

import loadable from 'utils/loadable'
import { LoadingIndicator } from 'components/LoadingIndicator'

/**
 * Asynchronously loads the component for FeaturePage
 */
export default loadable(() => import('./FeaturePage'), {
  fallback: (
    <IntlProvider locale="en">
      <LoadingIndicator />
    </IntlProvider>
  ),
})
