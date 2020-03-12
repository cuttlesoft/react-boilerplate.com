import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Header from './Header'

const renderComponent = (props = {}) => render(<Header {...props}>TESTING</Header>)

/**
 *
 * Tests for Header
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
describe('Header', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
