import React from 'react'
import { IntlProvider } from 'react-intl'
import { MemoryRouter } from 'react-router-dom'
import { render, waitFor } from '@testing-library/react'
import { Grommet } from 'grommet'
import '@testing-library/jest-dom/extend-expect'

// Components
import { Login } from '../../containers/Login'
import PublicRoute from './PublicRoute'

// Helpers
import { DEFAULT_LOCALE } from '../../i18n'
import theme from '../../utils/theme'

// Stores
import trunk from '../../configureStore'
import { UserStore, UserStoreContext } from '../../stores/UserStore'

describe('<PublicRoute />', () => {
  let userStore = null

  beforeAll(() => {
    userStore = new UserStore()
    trunk.init()
  })

  const renderComponent = store =>
    render(
      <Grommet theme={theme}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <MemoryRouter initialEntries={['/login']}>
            <UserStoreContext.Provider value={store}>
              <PublicRoute path="/login" component={Login} />
            </UserStoreContext.Provider>
          </MemoryRouter>
        </IntlProvider>
      </Grommet>,
    )

  it('renders Login if user is not authenticated', async () => {
    const { container, getByTestId } = renderComponent(userStore)
    expect(container).toMatchSnapshot()
    const LoginPage = await waitFor(() => getByTestId('login-header'))
    expect(LoginPage).toBeVisible()
  })

  it('does not render Login if user is authenticated', async () => {
    userStore = {
      accessToken: 'faketoken',
    }
    const { container } = renderComponent(userStore)
    expect(container).toMatchSnapshot()
  })
})
