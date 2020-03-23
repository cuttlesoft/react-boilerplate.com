import React from 'react'
import { render } from '@testing-library/react'

import PasswordInput from './PasswordInput'

const renderComponent = (props = {}) => render(<PasswordInput {...props} />)

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})
