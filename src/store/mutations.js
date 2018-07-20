const mutations = {
  currentUser: (state, currentUser) => {
    state.currentUser = currentUser
  },
  enroll: (state, enroll) => {
    state.enroll = enroll
  },
  setVersion: (state, version) => {
    state.version = version
  },
  selectConferenceMembersId: (state, selectConferenceMembersId) => {
    state.selectConferenceMembersId = selectConferenceMembersId
  }
}

export default mutations
