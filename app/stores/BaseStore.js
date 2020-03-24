import { forEach } from 'lodash'
import { action } from 'mobx'

export class BaseStore {
  /**
   * mobx-sync does not set the default values without interacting with at
   * least one of the class variables that are set up as an observable
   *
   * This takes the intial state provided to the class instantiation and runs
   * through each value from the `initialState` that must be set to ensure the
   * default values are correct
   *
   * @param {object} initialState
   */
  constructor(initialState = {}) {
    forEach(initialState, (value, key) => {
      this[key] = value
    })
    this._initialState = initialState
  }

  @action.bound
  reset() {
    forEach(this._initialState, (value, key) => {
      this[key] = value
    })
  }
}
