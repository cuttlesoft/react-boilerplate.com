import React from 'react'
import { Provider } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'
import { render } from 'react-testing-library'

import LocaleToggle from '../index'
import LanguageProvider from '../../LanguageProvider'

import trunk from '../../../configureStore'
import { translationMessages } from '../../../i18n'

describe('<LocaleToggle />', () => {
  let stores

  beforeAll(() => {
    const routingStore = new RouterStore()

    stores = {
      routing: routingStore,
    }

    trunk.init()
  })

  it('should match the snapshot', () => {
    const { container } = render(
      <Provider {...stores}>
        <LanguageProvider messages={translationMessages}>
          <LocaleToggle />
        </LanguageProvider>
      </Provider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should present the default `en` english language option', () => {
    const { container } = render(
      <Provider {...stores}>
        <LanguageProvider messages={translationMessages}>
          <LocaleToggle />
        </LanguageProvider>
      </Provider>,
    )
    expect(container.querySelector('option[value="en"]')).not.toBeNull()
  })
})
