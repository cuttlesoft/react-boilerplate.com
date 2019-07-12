import { cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import MockAdapter from 'axios-mock-adapter'

import axios from '../instance'
import { getRepos } from '../github.service'
import { getReposSuccess } from '../mocks/github.service.mock'

const TEST_USER = 'cuttlesoft'

afterEach(cleanup)

test('getRepos creates an axios call and uses provided url', async () => {
  const url = `/users/${TEST_USER}/repos?type=all&sort=updated`
  const axiosMock = new MockAdapter(axios)
  const mockData = getReposSuccess

  axiosMock.onGet(url).reply(200, mockData)
  const repos = await getRepos(TEST_USER)
  expect(repos).toEqual(mockData)
})

test('getRepos catches an error', async () => {
  const url = `/users/${TEST_USER}/repos?type=all&sort=updated`
  const axiosMock = new MockAdapter(axios)
  const errorMessage = 'Error'

  axiosMock.onGet(url).reply(400, errorMessage)

  try {
    await getRepos(TEST_USER)
  } catch (error) {
    expect(error.response.data).toEqual('Error')
  }
})

test('getRepos returns an empty object if a 204 occurs', async () => {
  const url = `/users/${TEST_USER}/repos?type=all&sort=updated`
  const axiosMock = new MockAdapter(axios)

  axiosMock.onGet(url).reply(204, null)

  try {
    await getRepos(TEST_USER)
  } catch (error) {
    expect(error.response.data).toEqual(null)
  }
})
