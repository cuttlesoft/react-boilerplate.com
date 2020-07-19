/* @flow */

import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// pages
import { Dashboard } from 'pages/Dashboard'
import { ConfirmAccount } from 'pages/ConfirmAccount'
import { FeaturePage } from 'pages/FeaturePage'
import { HomePage } from 'pages/HomePage'
import { Login } from 'pages/Login'
import { NotFoundPage } from 'pages/NotFoundPage'
import { PasswordReset } from 'pages/PasswordReset'
import { PasswordResetRequest } from 'pages/PasswordResetRequest'
import { Register } from 'pages/Register'
import { UserProfile } from 'pages/UserProfile'

// Components
import { NavBar } from 'components/NavBar'
import { PrivateRoute } from 'components/PrivateRoute'
import { PublicRoute } from 'components/PublicRoute'

// Styles
import GlobalStyle from '../../global-styles'

const AppContainer = styled.div`
  margin: 0 auto 30px auto;
  min-height: 100vh;
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

      <NavBar />

      <AppContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/confirm-account" component={ConfirmAccount} />

          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/password-reset-request" component={PasswordResetRequest} />
          <PublicRoute exact path="/password-reset" component={PasswordReset} />

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/features" component={FeaturePage} />
          <PrivateRoute path="/profile" component={UserProfile} />

          <Route path="" component={NotFoundPage} />
        </Switch>
      </AppContainer>

      <GlobalStyle />
    </>
  )
}
