import React from 'react'
import { FormattedMessage } from 'react-intl'

// Components
import { Header } from 'components/Header'

// Messages
import messages from './NotFoundPage.messages'

/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
export default function NotFound() {
  return (
    <article>
      <Header level="1">
        <FormattedMessage {...messages.header} />
      </Header>
    </article>
  )
}
