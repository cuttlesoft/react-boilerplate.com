import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

// Components
import { Box } from 'components/Box'
import { Container } from 'components/Container'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'

// Messages
import messages from './FeaturePage.messages'

/*
 * FeaturePage
 *
 * List all the features
 */
export default function FeaturePage() {
  const items = [
    {
      title: messages.scaffoldingHeader,
      body: messages.scaffoldingMessage,
    },
    {
      title: messages.feedbackHeader,
      body: messages.feedbackMessage,
    },
    {
      title: messages.routingHeader,
      body: messages.routingMessage,
    },
    {
      title: messages.networkHeader,
      body: messages.networkMessage,
    },
    {
      title: messages.intlHeader,
      body: messages.intlMessage,
    },
  ]

  return (
    <>
      <Helmet>
        <title>Feature Page</title>
        <meta name="description" content="Feature page of React.js Boilerplate application" />
      </Helmet>

      <Container>
        <Heading>
          <FormattedMessage {...messages.header} />
        </Heading>

        <Box padding={{ top: 'small' }}>
          {items.map(item => (
            <Box margin="small">
              <Text weight="bold">
                <FormattedMessage {...item.title} />
              </Text>

              <Text>
                <FormattedMessage {...item.body} />
              </Text>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  )
}
