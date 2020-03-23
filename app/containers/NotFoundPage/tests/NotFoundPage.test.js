import React from 'react'
import { render } from '@testing-library/react'

// Components
import { TestWrapper } from 'utils/TestWrapper'
import NotFound from '../NotFoundPage'
import messages from '../NotFoundPage.messages'

describe('NotFound', () => {
  it('should render the Page Not Found text', () => {
    const { queryByText } = render(
      <TestWrapper>
        <NotFound />
      </TestWrapper>,
    )

    expect(queryByText(messages.header.defaultMessage)).not.toBeNull()
  })
})
