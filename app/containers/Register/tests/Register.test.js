import React from 'react'
import { IntlProvider } from 'react-intl'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // add some helpful assertions

import { Register } from '../index'
import { DEFAULT_LOCALE } from '../../../i18n'

const renderComponent = (props = {}) => render(<Register {...props} />)

/**
*
* Tests for Register
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/
describe('Register', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('does not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Register />
      </IntlProvider>,
    )
    expect(spy).not.toHaveBeenCalled()
  })

  it('has additional unit tests specified', () => {
    expect(true).toEqual(false)
  })
})
