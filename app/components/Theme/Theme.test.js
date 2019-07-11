/**
 *
 * Tests for Theme
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Theme from './Theme'

const renderComponent = (props = {}) => render(<Theme {...props} />)

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('It does not log errors in console', () => {
  const spy = jest.spyOn(global.console, 'error')
  render(<Theme />)
  expect(spy).not.toHaveBeenCalled()
})
