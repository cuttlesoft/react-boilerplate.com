import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // add some helpful assertions

import { TestWrapper } from '../../utils/TestWrapper'
import { LogoHeader } from './index'

const renderComponent = props =>
  render(
    <TestWrapper>
      <LogoHeader {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for LogoHeader
 *
 */
describe('LogoHeader', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
