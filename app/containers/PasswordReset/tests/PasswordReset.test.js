import React from 'react'
import { render } from '@testing-library/react'

// Components
import { TestWrapper } from 'utils/TestWrapper'
import { RootStore, RootStoreContext } from '../../../stores/RootStore'
import { PasswordReset } from '../index'

const renderComponent = (store, props) =>
  render(
    <RootStoreContext.Provider value={store}>
      <TestWrapper>
        <PasswordReset {...props} />
      </TestWrapper>
    </RootStoreContext.Provider>,
  )

/**
 *
 * Tests for PasswordReset
 *
 */
describe('PasswordReset', () => {
  let rootStore = null

  beforeAll(() => {
    rootStore = new RootStore()
  })

  it('renders and matches snapshot', () => {
    /**
     * Users must be logged out in order to reset their password (happy path)
     */
    rootStore.user.accessToken = ''

    const { container } = renderComponent(rootStore)
    expect(container).toMatchSnapshot()
  })

  it('renders and matches snapshot', () => {
    /**
     * Authenticated users are shown a message that they are not allowed to
     * reset their password when logged in
     */
    rootStore.user.accessToken = 'faketoken'

    const { container } = renderComponent(rootStore)
    expect(container).toMatchSnapshot()
  })
})
