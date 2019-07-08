/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useContext, useEffect, useState, memo } from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react'

import H2 from 'components/H2'
import ReposList from 'components/ReposList'
import { AtPrefix, CenteredSection, Form, Input, Section } from './styles'
import messages from './HomePage.messages'

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
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
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
