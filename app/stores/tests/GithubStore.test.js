import { cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import MockAdapter from 'axios-mock-adapter'
import axios from '../../services/instance'
import { GitHubStore } from '../GithubStore'
afterEach(cleanup)

test('getRepos creates an axios call and assigns repos to the store', async () => {
  const githubStore = new GitHubStore()
  const url = `/users/mxstbr/repos?type=all&sort=updated`
  const axiosMock = new MockAdapter(axios)
  const mockData = [
    {
      id: 30969188,
      node_id: 'MDEwOlJlcG9zaXRvcnkzMDk2OTE4OA==',
      name: 'react-boilerplate',
      full_name: 'react-boilerplate/react-boilerplate',
      private: false,
    },
  ]

  axiosMock.onGet(url).reply(200, mockData)
  await githubStore.getRepos('mxstbr')
  await expect(githubStore.repos).toEqual(mockData)
  await expect(githubStore.currentUser).toEqual('mxstbr')
  await expect(githubStore.isLoading).toEqual(false)
})

test('getRepos catches an error', async () => {
  const githubStore = new GitHubStore()
  const url = `/users/mxstbr/repos?type=all&sort=updated`
  const axiosMock = new MockAdapter(axios)
  const errorMessage = 'Error'

  axiosMock.onGet(url).reply(400, errorMessage)

  try {
    await githubStore.getRepos('mxstbr')
  } catch (error) {
    expect(githubStore.hasError).toEqual(true)
    expect(githubStore.isLoading).toEqual(false)
  }
})
