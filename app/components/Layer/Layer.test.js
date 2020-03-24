import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // add some helpful assertions

// Components
import { TestWrapper } from 'utils/TestWrapper'
import Layer from './Layer'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <Layer {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for Layer
 *
 */
describe('Layer', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
