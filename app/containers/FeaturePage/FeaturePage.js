import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import { Header } from 'components/Header'

import messages from './FeaturePage.messages'
import { List, ListItem, ListItemTitle } from './styles'

/*
 * FeaturePage
 *
 * List all the features
 */
export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta name="description" content="Feature page of React.js Boilerplate application" />
      </Helmet>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.scaffoldingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.scaffoldingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.feedbackHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.feedbackMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.routingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.routingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.networkHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.networkMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.intlHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.intlMessage} />
          </p>
        </ListItem>
      </List>
    </div>
  )
}
