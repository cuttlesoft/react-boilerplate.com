import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // add some helpful assertions

import GenericError from './GenericError'

const renderComponent = (props = {}) => render(<GenericError {...props} />)

/**
 *
 * Tests for GenericError
 *
 */
describe('GenericError', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
