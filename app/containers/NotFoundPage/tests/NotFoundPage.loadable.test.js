import React from 'react'
import { waitForElement, render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import NotFoundPage from '../NotFoundPage.loadable'

/**
 * Test the NotFoundPage
 */
test('should lazy load and match the snapshot', async () => {
  const { container } = render(
    <IntlProvider locale="en">
      <NotFoundPage />
    </IntlProvider>,
  )

  const lazyComponent = await waitForElement(() => container)
  await expect(lazyComponent).toMatchSnapshot()
})
