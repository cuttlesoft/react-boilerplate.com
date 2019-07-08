/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'

import Header from 'components/Header'
import messages from './NotFoundPage.messages'

export default function NotFound() {
  return (
    <article>
      <Header level="1">
        <FormattedMessage {...messages.header} />
      </Header>
    </article>
  )
}
