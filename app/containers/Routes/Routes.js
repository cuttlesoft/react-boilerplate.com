/* @flow */

import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// Containers
import { FeaturePage } from 'containers/FeaturePage'
import { HomePage } from 'containers/HomePage'
import { Login } from 'containers/Login'
import { NotFoundPage } from 'containers/NotFoundPage'
import { Register } from 'containers/Register'

// Components
import { Header } from 'components/Header'
import { TemplateHeader } from 'components/TemplateHeader'
import { Footer } from 'components/Footer'

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
        <TemplateHeader />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>

        <Footer />
      </Container>

      <GlobalStyle />
    </>
  )
}
