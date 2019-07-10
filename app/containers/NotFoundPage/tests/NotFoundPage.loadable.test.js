/**
 * Test the HomePage
 */
import React from 'react'
import { waitForElement, render } from '@testing-library/react'
import NotFoundPage from '../NotFoundPage.loadable'

test('should lazy load and match the snapshot', async () => {
  const { container } = render(<NotFoundPage />)
  const lazyComponent = await waitForElement(() => container)
  await expect(lazyComponent).toMatchSnapshot()
})
