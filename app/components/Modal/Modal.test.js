import React from 'react'
import { render } from '@testing-library/react'

import Modal from './Modal'

const renderComponent = (props = {}) => render(<Modal {...props} />)

/**
 *
 * Tests for Modal
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
describe('Modal', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('does not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')
    render(<Modal />)
    expect(spy).not.toHaveBeenCalled()
  })
})
