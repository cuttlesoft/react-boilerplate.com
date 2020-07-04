import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // add some helpful assertions

import GenericLoading from './GenericLoading'

const renderComponent = (props = {}) => render(<GenericLoading {...props} />)

/**
 *
 * Tests for GenericLoading
 *
 */
describe('GenericLoading', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
