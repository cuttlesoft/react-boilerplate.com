import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import PasswordInput from './PasswordInput'

const renderComponent = (props = {}) => render(<PasswordInput {...props} />)

describe('PasswordInput', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })

  it('toggles between shown and hidden', () => {
    const { getByTestId } = renderComponent()

    getByTestId('hidden-icon')

    fireEvent.click(getByTestId('show-password-toggle'))

    getByTestId('shown-icon')

    fireEvent.click(getByTestId('show-password-toggle'))

    getByTestId('hidden-icon')
  })
})
