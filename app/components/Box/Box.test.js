import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Box from './Box'

const CHILDREN = <h1>Test</h1>

const renderComponent = (props = {}) => render(<Box {...props}>{CHILDREN}</Box>)

/**
 *
 * Tests for Box
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
describe('Box', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
