/** @todo Fix import cycle */
/* eslint-disable import/no-cycle */

import { ignore } from 'mobx-sync'
import { action } from 'mobx'
import { createContext } from 'react'
import * as Sentry from '@sentry/browser'

import { locale } from './LocaleStore'
import { user } from './UserStore'
import { refreshAccessToken as refreshAccessTokenService } from '../services/user.service'

export class RootStore {
  @ignore storeLoaded = false

  locale = locale

  user = user

  @action.bound
  clearStore() {
    this.user.reset()

    Sentry.configureScope(scope => scope.setUser(null))
  }

  @action.bound
  async triggerRefreshToken(failedRequest) {
    try {
      const { access } = await refreshAccessTokenService(this.user.refreshToken)
      this.user.accessToken = access

      // Reassign to `failedRequest` as this object is used by the token
      // interceptor to retry the request
      // eslint-disable-next-line no-param-reassign
      failedRequest.response.config.headers.Authorization = `Bearer ${access}`
    } catch (err) {
      this.clearStore()
      throw err
    }
  }
}

export const store = new RootStore()
export const RootStoreContext = createContext(store)
