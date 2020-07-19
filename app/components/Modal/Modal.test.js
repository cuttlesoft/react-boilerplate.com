import React from 'react'
import { render } from '@testing-library/react'

import Modal from './Modal'

const renderComponent = (props = {}) => render(<Modal {...props} />)

/**
 *
 * Tests for Modal
 *
 */
describe('Modal', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
