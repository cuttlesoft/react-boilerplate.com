/**
 * HomePage Test Criteria
 *
 * A user can:
 * - Show Github repositories by username
 *   - When a user inputs a username into the input field then hits the
 *     enter key, the form is submitted and search results are retrieved
 *     - While the call is loading, a loading indicator should be displayed
 *     - If an error occurs, an error message should be displayed
 *     - If no repositories are found, a not found message should be displayed
 */

// Libraries
import React from 'react'
import 'jest-dom/extend-expect'
import { fireEvent, render, waitForElement } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'
import MockAdapter from 'axios-mock-adapter'

// Components / Pages
import { HomePage } from '../HomePage'

// Services
import axios from '../../../services/instance'
import { getReposSuccess } from '../../../services/mocks/github.service.mock'

// Context / Stores
import trunk from '../../../configureStore'
import { GitHubStore, GitHubStoreContext } from '../../../stores/GithubStore'

describe('<HomePage />', () => {
  // Allow stores to be accessed in tests
  let stores = null
  let gitHubStore = null

  const TEST_USER = 'cuttlesoft'

  beforeAll(() => {
    // Create MobX Routing store
    const routingStore = new RouterStore()
    gitHubStore = new GitHubStore()

    stores = {
      routing: routingStore,
    }

    // Initialize the stores
    trunk.init()
  })

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider {...stores}>
        <IntlProvider locale="en">
          <HomePage loading={false} error={false} repos={[]} />
        </IntlProvider>
      </Provider>,
    )
    expect(firstChild).toMatchSnapshot()
  })

  it('should successfully load the repository list when a user inputs a username and submits the form', async () => {
    // Configure Axios to mock a successful call for retrieving repos
    const url = `/users/${TEST_USER}/repos?type=all&sort=updated`
    const axiosMock = new MockAdapter(axios)
    const mockData = getReposSuccess
    axiosMock.onGet(url).reply(200, mockData)

    const getReposSpy = jest.spyOn(gitHubStore, 'getRepos')

    const { getByTestId } = render(
      <Provider {...stores}>
        <IntlProvider locale="en">
          <GitHubStoreContext.Provider value={gitHubStore}>
            <HomePage />
          </GitHubStoreContext.Provider>
        </IntlProvider>
      </Provider>,
    )

    // Ensure that the search term starts out as blank
    const input = document.getElementById('searchTerm')
    expect(input.value).toBe('')

    // Add text to the search field
    fireEvent.change(input, { target: { value: TEST_USER } })
    expect(input.value).toBe(TEST_USER)

    // Submit the form
    fireEvent.submit(getByTestId('search-form'))
    expect(getReposSpy).toHaveBeenCalled()

    // Ensure that the loading indicator is shown
    const loadingNode = await waitForElement(() => getByTestId('repo-list-loading'))
    expect(loadingNode)

    // Ensure that the repo list is shown
    const repoList = await waitForElement(() => getByTestId('repo-list'))
    expect(repoList).toHaveTextContent(getReposSuccess[0].name)
    expect(repoList).toHaveTextContent(getReposSuccess[0].open_issues_count)
  })

  it('should automatically load the repository list when a username is preloaded', async () => {
    // Configure Axios to mock a successful call for retrieving repos
    const url = `/users/${TEST_USER}/repos?type=all&sort=updated`
    const axiosMock = new MockAdapter(axios)
    const mockData = getReposSuccess
    axiosMock.onGet(url).reply(200, mockData)

    // Set the intial state on the store to preload a username
    gitHubStore.currentUser = TEST_USER

    const getReposSpy = jest.spyOn(gitHubStore, 'getRepos')

    const { getByTestId } = render(
      <Provider {...stores}>
        <IntlProvider locale="en">
          <GitHubStoreContext.Provider value={gitHubStore}>
            <HomePage />
          </GitHubStoreContext.Provider>
        </IntlProvider>
      </Provider>,
    )

    const input = document.getElementById('searchTerm')
    expect(input.value).toBe(TEST_USER)
    expect(getReposSpy).toHaveBeenCalled()

    // Ensure that the loading indicator is shown
    const loadingNode = await waitForElement(() => getByTestId('repo-list-loading'))
    expect(loadingNode)

    // Ensure that the repo list is shown
    const repoList = await waitForElement(() => getByTestId('repo-list'))
    expect(repoList).toHaveTextContent(getReposSuccess[0].name)
    expect(repoList).toHaveTextContent(getReposSuccess[0].open_issues_count)
  })

  it('should display a message if the user does not have any repos', async () => {
    // Configure Axios to mock a successful call for retrieving repos
    const url = `/users/${TEST_USER}/repos?type=all&sort=updated`
    const axiosMock = new MockAdapter(axios)
    const mockData = []
    axiosMock.onGet(url).reply(200, mockData)

    // Set the intial state on the store to preload a username
    gitHubStore.currentUser = TEST_USER

    const getReposSpy = jest.spyOn(gitHubStore, 'getRepos')

    const { getByTestId } = render(
      <Provider {...stores}>
        <IntlProvider locale="en">
          <GitHubStoreContext.Provider value={gitHubStore}>
            <HomePage />
          </GitHubStoreContext.Provider>
        </IntlProvider>
      </Provider>,
    )

    const input = document.getElementById('searchTerm')
    expect(input.value).toBe(TEST_USER)
    expect(getReposSpy).toHaveBeenCalled()

    // Ensure that the loading indicator is shown
    const loadingNode = await waitForElement(() => getByTestId('repo-list-loading'))
    expect(loadingNode)

    // Ensure that the repo list error is shown
    const repoList = await waitForElement(() => getByTestId('repo-list-not-found'))
    expect(repoList).toHaveTextContent(
      'The user could not be found or does not have any repositories.',
    )
  })

  it('should display an error message if repos cannot be loaded', async () => {
    // Configure Axios to mock a successful call for retrieving repos
    const url = `/users/${TEST_USER}/repos?type=all&sort=updated`
    const axiosMock = new MockAdapter(axios)
    const mockData = getReposSuccess
    axiosMock.onGet(url).reply(500, mockData)

    // Set the intial state on the store to preload a username
    gitHubStore.currentUser = TEST_USER

    const getReposSpy = jest.spyOn(gitHubStore, 'getRepos')

    const { getByTestId } = render(
      <Provider {...stores}>
        <IntlProvider locale="en">
          <GitHubStoreContext.Provider value={gitHubStore}>
            <HomePage />
          </GitHubStoreContext.Provider>
        </IntlProvider>
      </Provider>,
    )

    const input = document.getElementById('searchTerm')
    expect(input.value).toBe(TEST_USER)
    expect(getReposSpy).toHaveBeenCalled()

    // Ensure that the loading indicator is shown
    const loadingNode = await waitForElement(() => getByTestId('repo-list-loading'))
    expect(loadingNode)

    // Ensure that the repo list error is shown
    const repoList = await waitForElement(() => getByTestId('repo-list-error'))
    expect(repoList)
  })
})
