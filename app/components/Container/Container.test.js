import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Container from './Container'

const CHILDREN = <h1>Test</h1>

const renderComponent = (props = {}) => render(<Container {...props}>{CHILDREN}</Container>)

/**
 *
 * Tests for Container
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
describe('Container', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
