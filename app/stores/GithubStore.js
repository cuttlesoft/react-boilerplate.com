import { action, observable } from 'mobx'
import { ignore } from 'mobx-sync'
import { createContext } from 'react'
import { getRepos } from '../services/github.service'

export class GitHubStore {
  @ignore @observable repos = []

  @observable currentUser = ''

  @ignore @observable isLoading = false

  @ignore @observable hasError = false

  @action.bound
  async getRepos(username) {
    this.isLoading = true
    this.hasError = false

    try {
      this.repos = await getRepos(username)
      this.currentUser = username
      this.isLoading = false
    } catch (error) {
      this.isLoading = false
      this.hasError = true
    }
  }
}

export const github = new GitHubStore()
export const GitHubStoreContext = createContext(github)
