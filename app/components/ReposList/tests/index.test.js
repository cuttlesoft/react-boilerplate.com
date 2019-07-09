import React from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'
import { render } from '@testing-library/react'

import ReposList from '../index'
import trunk from '../../../configureStore'

describe('<ReposList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<ReposList loading />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <ReposList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    )
    expect(queryByText(/Something went wrong/)).not.toBeNull()
  })

  it('should render the repositories if loading was successful', () => {
    /** @todo mock initial state */
    // const store = configureStore({ global: { currentUser: 'mxstbr' } }, browserHistory)
    const routingStore = new RouterStore()
    const stores = {
      routing: routingStore,
    }
    trunk.init()

    const repos = [
      {
        owner: {
          login: 'mxstbr',
        },
        html_url: 'https://github.com/react-boilerplate/react-boilerplate',
        name: 'react-boilerplate',
        open_issues_count: 20,
        full_name: 'react-boilerplate/react-boilerplate',
      },
    ]
    const { container } = render(
      <Provider {...stores}>
        <IntlProvider locale="en">
          <ReposList repos={repos} error={false} />
        </IntlProvider>
      </Provider>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(<ReposList repos={false} error={false} loading={false} />)

    expect(container.firstChild).toBeNull()
  })
})
