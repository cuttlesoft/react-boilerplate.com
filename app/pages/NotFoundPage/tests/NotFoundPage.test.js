import React from 'react'
import { render } from '@testing-library/react'

// Components
import { TestWrapper } from 'utils/TestWrapper'
import NotFoundPage from '../NotFoundPage'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <NotFoundPage {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for NotFoundPage
 *
 */
describe('NotFoundPage', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
