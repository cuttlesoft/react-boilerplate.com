import React from 'react'
import { render } from '@testing-library/react'

// Stores and Utils
import { TestWrapper } from 'utils/TestWrapper'
import { RootStore, RootStoreContext } from '../../../stores/RootStore'
import trunk from '../../../configureStore'

// Local
import { UserProfile } from '../index'

const renderComponent = rootStoreValue =>
  render(
    <TestWrapper>
      <RootStoreContext.Provider value={rootStoreValue}>
        <UserProfile />
      </RootStoreContext.Provider>
    </TestWrapper>,
  )

/**
 *
 * Tests for UserProfile
 *
 */
describe('UserProfile', () => {
  let rootStore = null

  beforeAll(() => {
    rootStore = new RootStore()
    trunk.init()

    process.env.API_BASE_URL = ''
    process.env.AWS_S3_URL = ''
  })

  it('renders and matches snapshot', () => {
    const { container } = renderComponent(rootStore)
    expect(container).toMatchSnapshot()
  })
})
