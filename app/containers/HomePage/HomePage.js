/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useContext, useEffect, useState, memo } from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react'

import { Header } from 'components/Header'
import ReposList from 'components/ReposList'
import { AtPrefix, CenteredSection, Form, Input, Section } from './styles'
import messages from './HomePage.messages'

import { GitHubStoreContext } from '../../stores/GithubStore'

export const HomePage = observer(() => {
  const gitHubStore = useContext(GitHubStoreContext)
  const [searchTerm, setSearchTerm] = useState('')

  const onSubmitForm = evt => {
    evt.preventDefault()
    gitHubStore.getRepos(searchTerm)
  }

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (gitHubStore.currentUser && gitHubStore.currentUser.trim().length > 0) {
      setSearchTerm(gitHubStore.currentUser)
      gitHubStore.getRepos(gitHubStore.currentUser)
    }
  }, [])

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React.js Boilerplate application homepage" />
      </Helmet>
      <div>
        <CenteredSection>
          <Header level="2">
            <FormattedMessage {...messages.startProjectHeader} />
          </Header>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <Header level="2">
            <FormattedMessage {...messages.trymeHeader} />
          </Header>
          <Form data-testid="search-form" onSubmit={onSubmitForm}>
            <label htmlFor="searchTerm">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="searchTerm"
                type="text"
                placeholder="mxstbr"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </label>
          </Form>
          <ReposList
            loading={gitHubStore.isLoading}
            error={gitHubStore.hasError}
            repos={gitHubStore.repos}
          />
        </Section>
      </div>
    </article>
  )
})

export default memo(HomePage)
