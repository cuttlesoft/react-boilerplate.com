/**
 *
 * Tests for Chexbox
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import TextInput from './TextInput'

const renderComponent = (props = {}) => render(<TextInput {...props} />)

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})
