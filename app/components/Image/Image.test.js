import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Image from './Image'

const renderComponent = (props = {}) => render(<Image {...props} />)

/**
 *
 * Tests for Image
 *
 */
describe('Image', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
