import { createContext } from 'react'
import { observable, action } from 'mobx'

import { DEFAULT_LOCALE } from '../i18n'

export class LocaleStore {
  @observable locale = DEFAULT_LOCALE

  @action.bound
  changeLocale(locale) {
    this.locale = locale
  }
}

export const locale = new LocaleStore()
export const LocaleStoreContext = createContext(locale)
