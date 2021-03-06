import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Heading from './Heading'

const renderComponent = (props = {}) => render(<Heading {...props}>TESTING</Heading>)

/**
 *
 * Tests for Heading
 *
 */
describe('Heading', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
