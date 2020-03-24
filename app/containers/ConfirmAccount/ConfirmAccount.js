import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

// Components
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'

// Utils, Services & Messages
import { confirmAccountOrEmail } from '../../services/user.service'

// Stores
import { RootStoreContext } from '../../stores/RootStore'

const getURLParams = location => {
  const params = location && location.search ? location.search.replace('?token=', '') : ''
  let confirmToken = ''
  let uid = ''
  if (params.length > 0) {
    const paramsList = params.split('&uid=')
    ;[confirmToken, uid] = paramsList
  }

  return [confirmToken, uid]
}

/**
 *
 * ConfirmAccount
 *
 */
const ConfirmAccount = observer(({ history, location }) => {
  const [redirect, setRedirect] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const {
    clearStore,
    user: { isAuthenticated },
  } = useContext(RootStoreContext)

  const [confirmToken, uid] = getURLParams(location)

  useEffect(() => {
    // Do not attempt to confirm if the user is logged in
    if (isAuthenticated) return

    if (confirmToken && uid) {
      confirmAccountOrEmail(confirmToken, uid)
        .then(() => {
          setRedirect(true)
        })
        .catch(err => {
          if (err.response && err.response.data && err.response.data.message) {
            setErrorMessage(err.response.data.message)
          } else {
            setErrorMessage('An unknown error occurred.')
          }
        })
    } else {
      setErrorMessage('Invalid confirmation URL.')
    }
  }, [isAuthenticated])

  return (
    <>
      {redirect && <Redirect to={{ pathname: '/login', search: '?confirmed=true' }} />}

      {errorMessage && (
        <Box align="center">
          {errorMessage && (
            <>
              <Heading level="2" color="brand">
                Error confirming account
              </Heading>

              <Text>{errorMessage}</Text>
            </>
          )}

          <Box gap="small" direction="row" pad="large">
            <Button primary label="Login" onClick={() => history.push('/login')} />
            <Button primary label="Register" onClick={() => history.push('/register')} />
          </Box>
        </Box>
      )}

      {isAuthenticated && (
        <Box align="center">
          <Heading level="2" color="brand">
            Cannot confirm account
          </Heading>

          <Text>You cannot confirm an account while you are logged in.</Text>
          <Text>Please log out and try again.</Text>

          <Box gap="small" direction="row" pad="large">
            <Button primary label="Logout" onClick={() => clearStore()} />
          </Box>
        </Box>
      )}
    </>
  )
})

ConfirmAccount.propTypes = {
  history: PropTypes.object,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
}

export default ConfirmAccount
