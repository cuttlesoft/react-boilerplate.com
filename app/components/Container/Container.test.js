import React from 'react'
import { render } from '@testing-library/react'

import Container from './Container'

const renderComponent = (props = {}) => render(<Container {...props} />)

/**
 *
 * Tests for Container
 *
 */
describe('Container', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
