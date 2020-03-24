import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // add some helpful assertions

import Header from './Header'

const renderComponent = (props = {}) => render(<Header {...props} />)

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
