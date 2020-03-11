import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FormattedNumber } from 'react-intl'
import { observer } from 'mobx-react'

import { ListItem } from 'components/ListItem'

import { Wrapper, IssueIcon, IssueLink, RepoLink } from './styles'
import { GitHubStoreContext } from '../../stores/GithubStore'

/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */
export const RepoListItem = observer(props => {
  const gitHubStore = useContext(GitHubStoreContext)

  const { item } = props
  let nameprefix = ''

  // If the repository is owned by a different person than we got the data for
  // it's a fork and we should show the name of the owner
  if (item.owner.login !== gitHubStore.currentUser) {
    nameprefix = `${item.owner.login}/`
  }

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <RepoLink href={item.html_url} target="_blank">
        {nameprefix + item.name}
      </RepoLink>
      <IssueLink href={`${item.html_url}/issues`} target="_blank">
        <IssueIcon />
        <FormattedNumber value={item.open_issues_count} />
      </IssueLink>
    </Wrapper>
  )

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
})

RepoListItem.propTypes = {
  item: PropTypes.object,
}

export default RepoListItem
