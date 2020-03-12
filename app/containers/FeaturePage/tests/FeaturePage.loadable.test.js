import React from 'react'
import { waitForElement, render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import FeaturePage from '../FeaturePage.loadable'

/**
 * Test the FeaturePage
 */
test('should lazy load and match the snapshot', async () => {
  const { container } = render(
    <IntlProvider locale="en">
      <FeaturePage />
    </IntlProvider>,
  )

  const lazyComponent = await waitForElement(() => container)
  await expect(lazyComponent).toMatchSnapshot()
})
