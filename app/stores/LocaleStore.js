import { observable, action } from 'mobx'
import { createContext } from 'react'

import { DEFAULT_LOCALE } from '../i18n'

export class LocaleStore {
  @observable locale = DEFAULT_LOCALE

  @action.bound
  changeLocale(locale) {
    this.locale = locale
  }
}

export const LocaleStoreContext = createContext(new LocaleStore())
