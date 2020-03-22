import React from 'react'
import { FormattedMessage } from 'react-intl'

// Components
import { Heading } from 'components/Heading'

// Messages
import messages from './NotFoundPage.messages'

/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
export default function NotFound() {
  return (
    <>
      <Heading level="2" textAlign="center">
        <FormattedMessage {...messages.header} />
      </Heading>
    </>
  )
}
