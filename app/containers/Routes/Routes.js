/* @flow */

import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// Containers
import { Dashboard } from 'containers/Dashboard'
import { ConfirmAccount } from 'containers/ConfirmAccount'
import { FeaturePage } from 'containers/FeaturePage'
import { HomePage } from 'containers/HomePage'
import { Login } from 'containers/Login'
import { NotFoundPage } from 'containers/NotFoundPage'
import { Register } from 'containers/Register'

// Components
import { Header } from 'components/Header'
import { PrivateRoute } from 'components/PrivateRoute'
import { PublicRoute } from 'components/PublicRoute'

// Styles
import GlobalStyle from '../../global-styles'

const Container = styled.div`
  margin: 0 auto 30px auto;
  min-height: 100%;
  padding: 0 16px;
`
/**
 *
 * Routes
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
export default function Routes() {
  return (
    <>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />

      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/confirm-account" component={ConfirmAccount} />

          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/features" component={FeaturePage} />

          <Route path="" component={NotFoundPage} />
        </Switch>
      </Container>

      <GlobalStyle />
    </>
  )
}
