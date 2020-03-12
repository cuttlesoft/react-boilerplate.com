import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Select from './Select'

const options = ['one', 'two', 'three']
const renderComponent = (props = {}) =>
  render(<Select label="Select" {...props} options={options} />)

const setup = () => {
  const utils = render(<Select placeholder="select" options={options} />)
  const select = utils.getByPlaceholderText('select')
  return {
    select,
    ...utils,
  }
}

/**
 *
 * Tests for Select
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
describe('Select', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('should update value on select', () => {
    const { select } = setup()

    expect(select.value).toBe('')

    fireEvent.select(select, { target: { value: 'one' } })

    expect(select.value).toBe('one')
  })
})
