import React from 'react'
import { render } from '@testing-library/react'
// import ''@testing-library/jest-dom/extend-expect' // add some helpful assertions

// Components
import { TestWrapper } from 'utils/TestWrapper'
import Link from './Link'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <Link {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for Link
 *
 */
describe('Link', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
