/**
 * Test the HomePage
 */

import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'

import { HomePage } from '../HomePage'
import trunk from '../../../configureStore'

describe('<HomePage />', () => {
  let stores

  beforeAll(() => {
    // Create MobX store
    const routingStore = new RouterStore()
    stores = {
      routing: routingStore,
    }
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
})

test('it should fire onChange event', () => {
  render(<HomePage />)
  const input = document.getElementById('searchTerm')
  expect(input.value).toBe('')
  fireEvent.change(input, { target: { value: 'mxstbr' } })
  expect(input.value).toBe('mxstbr')
})
