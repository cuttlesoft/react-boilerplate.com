import React from 'react'
import { render } from '@testing-library/react'
// import ''@testing-library/jest-dom/extend-expect' // add some helpful assertions

// Components
import { TestWrapper } from 'utils/TestWrapper'
import PopoutForm from './PopoutForm'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <PopoutForm {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for PopoutForm
 *
 */
describe('PopoutForm', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
