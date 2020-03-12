import React, { useContext, useEffect, useState, memo } from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { observer } from 'mobx-react'

// Components
import { Header } from 'components/Header'
import { ReposList } from 'components/ReposList'

// Messages
import messages from './HomePage.messages'

// Styles
import { AtPrefix, CenteredSection, Form, Input, Section } from './HomePage.styles'

// Context / Stores
import { GitHubStoreContext } from '../../stores/GithubStore'

/*
 * HomePage
 *
 * The HomePage renders:
 * - The page title and metadata using Helmet
 * - The page header and description
 * - The search input and repository listing for a given user
 *
 * A user can:
 * - Show Github repositories by username
 *   - When a user inputs a username into the input field then hits the
 *     enter key, the form is submitted and search results are retrieved
 *   - Repositories are displayed using the ReposList component, which handles
 *     loading and error messages
 */
export const HomePage = observer(() => {
  const gitHubStore = useContext(GitHubStoreContext)
  const [searchTerm, setSearchTerm] = useState('')

  /**
   * Prevent the default behavior from occuring (for example, a page refresh),
   * then initiate fetching repositories based on the current `searchTerm`
   *
   * @param {object} evt The sythetic event from firing the function via
   *   `onSubmit`
   */
  const onSubmitForm = evt => {
    evt.preventDefault()
    gitHubStore.getRepos(searchTerm)
  }

  /**
   * When the initial username from the store is not null, set the local state
   * for `searchTerm` to the provided username and initiate fetching
   * repositories
   */
  useEffect(() => {
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

      <CenteredSection>
        <Header level="2" color="brand">
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
    </article>
  )
})

export default memo(HomePage)
