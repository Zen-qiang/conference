const mutations = {
  currentUser: (state, currentUser) => {
    state.currentUser = currentUser
  },
  enroll: (state, enroll) => {
    state.enroll = enroll
  },
  setVersion: (state, version) => {
    state.version = version
  }
}

export default mutations
