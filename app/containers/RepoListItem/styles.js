import styled from 'styled-components'
import { IssueIcon as NormalIssueIcon } from 'components/IssueIcon'
import { Anchor } from 'components/Anchor'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: space-between;
`

export const IssueIcon = styled(NormalIssueIcon)`
  fill: #ccc;
  margin-right: 0.25em;
`

export const IssueLink = styled(Anchor)`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`

export const RepoLink = styled(Anchor)`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  width: 100%;
`
