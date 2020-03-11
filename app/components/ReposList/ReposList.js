import React from 'react'
import PropTypes from 'prop-types'

// Components
import { List } from 'components/List'
import { ListItem } from 'components/ListItem'
import { LoadingIndicator } from 'components/LoadingIndicator'

// Containers
import { RepoListItem } from 'containers/RepoListItem'

function ReposList({ loading, error, repos }) {
  if (loading) {
    return <List data-testid="repo-list-loading" component={LoadingIndicator} />
  }

  if (error !== false) {
    const ErrorComponent = () => <ListItem item="Something went wrong, please try again!" />
    return <List data-testid="repo-list-error" component={ErrorComponent} />
  }

  if (repos.length === 0) {
    const NotFoundComponent = () => (
      <ListItem item="The user could not be found or does not have any repositories." />
    )
    return <List data-testid="repo-list-not-found" component={NotFoundComponent} />
  }

  if (repos !== false) {
    return <List data-testid="repo-list" items={repos} component={RepoListItem} />
  }

  return null
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repos: PropTypes.any,
}

export default ReposList
