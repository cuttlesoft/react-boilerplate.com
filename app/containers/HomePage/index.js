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
import AtPrefix from './AtPrefix'
import CenteredSection from './CenteredSection'
import Form from './Form'
import Input from './Input'
import Section from './Section'
import messages from './messages'

import { GitHubStoreContext } from '../../stores/GithubStore'

export const HomePage = observer(() => {
  const gitHubStore = useContext(GitHubStoreContext)
  const [searchTerm, setSearchTerm] = useState('')

  const onSubmitForm = evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    gitHubStore.getRepos(searchTerm)
  }

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (gitHubStore.currentUser && gitHubStore.currentUser.trim().length > 0)
      onSubmitForm(gitHubStore.currentUser)
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
          <Header level="2">
            <FormattedMessage {...messages.startProjectMessage} />
          </Header>
        </CenteredSection>
        <Section>
          <Header level="2">
            <FormattedMessage {...messages.trymeHeader} />
          </Header>
          <Form onSubmit={onSubmitForm}>
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
