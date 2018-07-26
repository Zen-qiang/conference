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
  },
  replacePeople: (state, replacePeople) => {
    state.replaceList.push(replacePeople)
  },
  replaceList: (state, replaceList) => {
    state.replaceList = replaceList
  },
  userInfo: (state, userInfo) => {
    state.userInfo = userInfo
  },
  nowConferenceId: (state, nowConferenceId) => {
    state.nowConferenceId = nowConferenceId
  },
  journeyInfo: (state, journeyInfo) => {
    state.journeyInfo = journeyInfo
  }
}

export default mutations
