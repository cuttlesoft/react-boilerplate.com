import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // add some helpful assertions

// Components
import { TestWrapper } from 'utils/TestWrapper'
import Avatar from './Avatar'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <Avatar {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for Avatar
 *
 */
describe('Avatar', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
