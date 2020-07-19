import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Select from './Select'

const renderComponent = (props = {}) =>
  render(<Select label="Select" {...props} options={['one', 'two', 'three']} />)

/**
 *
 * Tests for Select
 *
 */
describe('Select', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('selects an option with enter', () => {
    window.scrollTo = jest.fn()
    const onChange = jest.fn()
    const { getByPlaceholderText, container } = render(
      <Select
        id="test-select"
        placeholder="test select"
        options={['one', 'two']}
        onChange={onChange}
      />,
    )
    expect(container.firstChild).toMatchSnapshot()

    fireEvent.click(getByPlaceholderText('test select'))

    fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Down',
      keyCode: 40,
      which: 40,
    })
    fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Up',
      keyCode: 38,
      which: 38,
    })
    fireEvent.keyDown(document.getElementById('test-select__select-drop'), {
      key: 'Enter',
      keyCode: 13,
      which: 13,
    })
    expect(onChange).toBeCalledWith(expect.objectContaining({ value: 'one' }))
    expect(window.scrollTo).toBeCalled()
  })
})
