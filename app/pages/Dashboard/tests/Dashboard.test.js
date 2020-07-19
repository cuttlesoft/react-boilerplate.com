import React from 'react'
import { render } from '@testing-library/react'

// Components
import { TestWrapper } from 'utils/TestWrapper'
import { Dashboard } from '../index'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <Dashboard {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for Dashboard
 *
 */
describe('Dashboard', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
