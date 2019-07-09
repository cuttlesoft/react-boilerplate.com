import { cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import MockAdapter from 'axios-mock-adapter'
import axios from '../instance'
import { getRepos } from '../github.service'
afterEach(cleanup)

test('getRepos creates an axios call and uses provided url', async () => {
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
  const repos = await getRepos('mxstbr')
  expect(repos).toEqual(mockData)
})

test('getRepos catches an error', async () => {
  const url = `/users/mxstbr/repos?type=all&sort=updated`
  const axiosMock = new MockAdapter(axios)
  const errorMessage = 'Error'

  axiosMock.onGet(url).reply(400, errorMessage)

  try {
    await getRepos('mxstbr')
  } catch (error) {
    expect(error.response.data).toEqual('Error')
  }
})
