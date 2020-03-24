import React from 'react'
import { render } from '@testing-library/react'

// Components
import { TestWrapper } from 'utils/TestWrapper'
import { ConfirmAccount } from '..'

describe('ConfirmAccount', () => {
  const renderComponent = (props = {}) =>
    render(
      <TestWrapper>
        <ConfirmAccount {...props} />
      </TestWrapper>,
    )

  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
