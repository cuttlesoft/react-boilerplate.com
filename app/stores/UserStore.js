import { action, computed, observable } from 'mobx'
import { ignore } from 'mobx-sync'
import { createContext } from 'react'

import { BaseStore } from './BaseStore'

export const INITIAL_STATE = {
  accessToken: '',
  error: '',
  isLoading: false,
  message: '',
  refreshToken: '',
  user: {},
}

export class UserStore extends BaseStore {
  @observable accessToken = INITIAL_STATE.accessToken

  @ignore
  @observable
  error = INITIAL_STATE.error

  @ignore
  @observable
  isLoading = INITIAL_STATE.isLoading

  @ignore
  @observable
  message = INITIAL_STATE.message

  @observable refreshToken = INITIAL_STATE.refreshToken

  @observable user = INITIAL_STATE.user

  @computed
  get isAuthenticated() {
    return this.accessToken !== ''
  }

  @action.bound
  setCurrentTokens({ accessToken = '', refreshToken = '' } = {}) {
    this.accessToken = accessToken
    this.refreshToken = refreshToken
  }

  @action.bound
  setCurrentUser({ ...user } = {}) {
    this.user = {
      ...user,
    }
  }
}

export const user = new UserStore(INITIAL_STATE)
export const UserStoreContext = createContext(user)
