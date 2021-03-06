import React from 'react'
import { render } from '@testing-library/react'

// Components
import { TestWrapper } from 'utils/TestWrapper'
import Header from './Header'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <Header {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for Header
 *
 */
describe('Header', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
