import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'

// Components
import LocaleToggle from '../LocaleToggle'
import { LanguageProvider } from '../../LanguageProvider'

// Utils, Services & Messages
import { translationMessages } from '../../../i18n'

// Stores
import trunk from '../../../configureStore'

const renderComponent = (stores, props = {}) =>
  render(
    <Provider {...stores}>
      <LanguageProvider messages={translationMessages}>
        <LocaleToggle {...props} />
      </LanguageProvider>
    </Provider>,
  )

describe('LocaleToggle', () => {
  let stores

  beforeAll(() => {
    const routingStore = new RouterStore()

    stores = {
      routing: routingStore,
    }

    trunk.init()
  })

  it('should match the snapshot', () => {
    const { container } = renderComponent(stores)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should present the default `en` english language option', () => {
    const { container } = renderComponent(stores)

    expect(container.querySelector('option[value="en"]')).not.toBeNull()
  })
})
