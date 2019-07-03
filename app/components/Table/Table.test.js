/**
 *
 * Tests for Table
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Table from './Table'

const options = ['one', 'two', 'three']
const renderComponent = (props = {}) =>
  render(<Table label="Table" {...props} options={options} />)

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})
