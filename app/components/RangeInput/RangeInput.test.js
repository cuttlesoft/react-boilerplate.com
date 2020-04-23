import React from 'react'
import { render } from '@testing-library/react'
// import ''@testing-library/jest-dom/extend-expect' // add some helpful assertions

// Components
import { TestWrapper } from 'utils/TestWrapper'
import RangeInput from './RangeInput'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <RangeInput {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for RangeInput
 *
 */
describe('RangeInput', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
