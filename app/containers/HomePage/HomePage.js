import React from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

// Components
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'

// Messages
import messages from './HomePage.messages'

/*
 * HomePage
 *
 * The HomePage renders:
 * - The page title and metadata using Helmet
 * - The page header and description
 *
 */
export const HomePage = ({ history }) => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="A React.js Boilerplate application homepage" />
    </Helmet>

    <Box align="center">
      <Heading level="2" color="brand">
        <FormattedMessage {...messages.startProjectHeader} />
      </Heading>

      <Text>
        <FormattedMessage {...messages.startProjectMessage} />
      </Text>

      <Box gap="small" direction="row" pad="large">
        <Button label="Login" onClick={() => history.push('/login')} />
        <Button label="Register" onClick={() => history.push('/register')} />
      </Box>
    </Box>
  </>
)

HomePage.propTypes = {
  history: PropTypes.object,
}

export default HomePage
