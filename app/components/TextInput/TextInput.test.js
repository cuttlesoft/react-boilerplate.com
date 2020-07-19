import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import TextInput from './TextInput'

const renderComponent = (props = {}) => render(<TextInput {...props} value="" />)

const setup = () => {
  const utils = render(<TextInput placeholder="text-input" />)
  const input = utils.getByPlaceholderText('text-input')
  return {
    input,
    ...utils,
  }
}

/**
 *
 * Tests for Chexbox
 *
 */
describe('TextInput', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('should update value on input', () => {
    const { input } = setup()

    expect(input.value).toBe('') // empty before

    fireEvent.change(input, { target: { value: 'Good Day' } })

    expect(input.value).toBe('Good Day')
  })
})
