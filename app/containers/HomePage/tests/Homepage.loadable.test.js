/**
 * Test the HomePage
 */
import React from 'react'
import { waitForElement, render } from '@testing-library/react'
import HomePage from '../HomePage.loadable'

test('should lazy load and match the snapshot', async () => {
  const { container } = render(<HomePage />)
  const lazyComponent = await waitForElement(() => container)
  await expect(lazyComponent).toMatchSnapshot()
})
