import React from 'react'
import { render } from '@testing-library/react'

import DataTable from './DataTable'

const renderComponent = (props = {}) => render(<DataTable {...props} />)

/**
 *
 * Tests for DataTable
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
describe('DataTable', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
