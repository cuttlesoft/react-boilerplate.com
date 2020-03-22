import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // add some helpful assertions

import { Login } from '../index'

const renderComponent = (props = {}) => render(<Login {...props} />)

/**
*
* Tests for Login
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/
describe('Login', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('does not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    render(<Login />)
    expect(spy).not.toHaveBeenCalled()
  })
})
