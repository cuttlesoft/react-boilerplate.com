import { cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import MockAdapter from 'axios-mock-adapter'

import axios from '../../services/instance'
import { GitHubStore } from '../GithubStore'

const TEST_USER = 'cuttlesoft'

afterEach(cleanup)

test('getRepos creates an axios call and assigns repos to the store', async () => {
  const gitHubStore = new GitHubStore()
  const url = `/users/${TEST_USER}/repos?type=all&sort=updated`
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
  await gitHubStore.getRepos(TEST_USER)
  await expect(gitHubStore.repos).toEqual(mockData)
  await expect(gitHubStore.currentUser).toEqual(TEST_USER)
  await expect(gitHubStore.isLoading).toEqual(false)
})

test('getRepos catches an error', async () => {
  const gitHubStore = new GitHubStore()
  const url = `/users/${TEST_USER}/repos?type=all&sort=updated`
  const axiosMock = new MockAdapter(axios)
  const errorMessage = 'Error'

  axiosMock.onGet(url).reply(400, errorMessage)

  try {
    await gitHubStore.getRepos(TEST_USER)
  } catch (error) {
    expect(gitHubStore.hasError).toEqual(true)
    expect(gitHubStore.isLoading).toEqual(false)
  }
})
