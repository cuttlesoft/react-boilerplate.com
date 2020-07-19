import React from 'react'
import { IntlProvider } from 'react-intl'
import { MemoryRouter } from 'react-router-dom'
import { act, render, waitFor } from '@testing-library/react'
import { Grommet, grommet } from 'grommet'
import '@testing-library/jest-dom/extend-expect'

import { Dashboard } from 'pages/Dashboard'
import trunk from '../../configureStore'
import { DEFAULT_LOCALE } from '../../i18n'
import { UserStore, UserStoreContext } from '../../stores/UserStore'
import PrivateRoute from './PrivateRoute'

const TEST_USER = 'suki@cuttlesoft.com'

describe('<PrivateRoute />', () => {
  let userStore = null

  beforeAll(() => {
    userStore = new UserStore()
    trunk.init()
  })

  const renderComponent = userStoreValue =>
    render(
      <Grommet theme={grommet}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <MemoryRouter initialEntries={['/dashboard']}>
            <UserStoreContext.Provider value={userStoreValue}>
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </UserStoreContext.Provider>
          </MemoryRouter>
        </IntlProvider>
      </Grommet>,
    )

  it('does not render if user is not authenticated', async () => {
    const { container } = renderComponent(userStore)

    expect(container).toMatchSnapshot()
    expect(container).not.toHaveTextContent('Dashboard')
  })

  it('renders dashboard if user is authenticated', async () => {
    userStore.accessToken = 'faketoken'
    userStore.email = TEST_USER

    await act(async () => {
      const { container, getByTestId } = renderComponent(userStore)
      const dashboardPage = await waitFor(() => getByTestId('dashboard-page'))

      expect(container).toMatchSnapshot()
      expect(dashboardPage).toHaveTextContent('Dashboard')
    })
  })
})
