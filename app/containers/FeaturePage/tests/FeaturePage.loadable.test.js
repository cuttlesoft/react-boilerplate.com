import React from 'react'
import { waitForElement, render } from '@testing-library/react'

import FeaturePage from '../FeaturePage.loadable'

/**
 * Test the HomePage
 */
test('should lazy load and match the snapshot', async () => {
  const { container } = render(<FeaturePage />)
  const lazyComponent = await waitForElement(() => container)
  await expect(lazyComponent).toMatchSnapshot()
})
