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
  nowConferenceName: (state, nowConferenceName) => {
    state.nowConferenceName = nowConferenceName
  },
  journeyInfo: (state, journeyInfo) => {
    state.journeyInfo = journeyInfo
  },
  hotelId: (state, hotelId) => {
    state.hotelId = hotelId
  },
  hotelName: (state, hotelName) => {
    state.hotelName = hotelName
  },
  accomMemberList: (state, accomMemberList) => {
    state.accomMemberList = accomMemberList
  },
  accomValue: (state, accomValue) => {
    state.accomValue = accomValue
  },
  room: (state, room) => {
    state.room = room
  },
  accomSelect: (state, accomSelect) => {
    state.accomSelect = accomSelect
  },
  accomPic: (state, accomPic) => {
    state.accomPic = accomPic
  },
  addInfo: (state, addInfo) => {
    state.addInfo = addInfo
  },
  membersId: (state, membersId) => {
    state.membersId = membersId
  },
  addPeopleMembers: (state, addPeopleMembers) => {
    state.addPeopleMembers = addPeopleMembers
  }
}

export default mutations
