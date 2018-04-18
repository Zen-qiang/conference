import * as types from './mutation-types'
const mutations = {
  [types.CURRENTUSER]: (state, currentUser) => {
    state.currentUser = currentUser
  },
  setVersion: (state, version) => {
    state.version = version
  }
}

export default mutations
