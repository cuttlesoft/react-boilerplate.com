import React from 'react'
import { render } from '@testing-library/react'

// Components
import { TestWrapper } from 'utils/TestWrapper'
import { PasswordResetRequest } from '../index'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <PasswordResetRequest {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for PasswordResetRequest
 *
 */
describe('PasswordResetRequest', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
