import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import NavBar from './NavBar'

const renderComponent = (props = {}) =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <NavBar {...props} />
    </MemoryRouter>,
  )

/**
 *
 * Tests for NavBar
 *
 */
describe('NavBar', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
