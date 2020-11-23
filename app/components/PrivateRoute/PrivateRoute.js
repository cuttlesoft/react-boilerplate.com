import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'

// Stores
import { UserStoreContext } from '../../stores/UserStore'

/**
 * PrivateRoute
 */
const PrivateRoute = observer(({ component: Component, roles, ...rest }) => {
  const { isAuthenticated } = useContext(UserStoreContext)

  // User does not have an auth token - redirect to Login
  if (!isAuthenticated) {
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )}
      />
    )
  }

  // Base case - render the requested component
  return <Route {...rest} render={props => <Component {...props} />} />
})

export default PrivateRoute
