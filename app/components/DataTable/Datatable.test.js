import React from 'react'
import { render } from '@testing-library/react'

import DataTable from './DataTable'

const renderComponent = (props = {}) => render(<DataTable {...props} />)

/**
 *
 * Tests for DataTable
 *
 */
describe('DataTable', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
