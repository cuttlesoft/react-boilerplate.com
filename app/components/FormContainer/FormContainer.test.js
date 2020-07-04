import React from 'react'
import { render } from '@testing-library/react'
// import ''@testing-library/jest-dom/extend-expect' // add some helpful assertions

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

  it('has additional unit tests specified', () => {
    expect(true).toEqual(false)
  })
})
