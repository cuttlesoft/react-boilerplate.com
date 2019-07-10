/**
 * Test the HomePage
 */
import React from 'react'
import { waitForElement, render } from '@testing-library/react'
import FeaturePage from '../FeaturePage.loadable'

test('should lazy load and match the snapshot', async () => {
  const { container } = render(<FeaturePage />)
  const lazyComponent = await waitForElement(() => container)
  await expect(lazyComponent).toMatchSnapshot()
})
