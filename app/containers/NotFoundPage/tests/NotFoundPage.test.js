/**
 * Testing the NotFoundPage
 */

import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import NotFound from '../NotFoundPage'
import messages from '../NotFoundPage.messages'

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <NotFound />
      </IntlProvider>,
    )
    expect(queryByText(messages.header.defaultMessage)).not.toBeNull()
  })
})