import React from 'react'
import { render } from '@testing-library/react'

import FormContainer from './FormContainer'

const renderComponent = (props = {}) => render(<FormContainer {...props} />)

/**
 *
 * Tests for FormContainer
 *
 */
describe('FormContainer', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
