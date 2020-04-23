import React from 'react'
import { render } from '@testing-library/react'

// Utils
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
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
describe('Header', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
