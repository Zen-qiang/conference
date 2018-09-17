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
  // 行程信息
  journeyInfo: (state, journeyInfo) => {
    state.journeyInfo = journeyInfo
  },
  hotelId: (state, hotelId) => {
    state.hotelId = hotelId
  },
  hotelName: (state, hotelName) => {
    state.hotelName = hotelName
  },
  // 要添加到前面展示的人员列表
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
  // 所有成员
  allMembers: (state, addInfo) => {
    state.allMembers = addInfo
  },
  membersId: (state, membersId) => {
    state.membersId = membersId
  },
  addPeopleMembers: (state, addPeopleMembers) => {
    state.addPeopleMembers = addPeopleMembers
  },
  setRoot: (state, flag) => {
    state.isRoot = flag
  },
  setAdmin: (state, flag) => {
    state.isAdmin = flag
  },
  setUser: (state, flag) => {
    state.isUser = flag
  },
  setDriver: (state, flag) => {
    state.isDriver = flag
  },
  setValue: (state, val) => {
    state.val = val
  },
  setStart: (state, first) => {
    state.firstTime = first
  },
  setEnd: (state, last) => {
    state.lastTime = last
  },
  roomArrs: (state, roomArr) => {
    state.roomArrs = roomArr
  },
  test: (state, test) => {
    state.test = test
  },
  sessionToken: (state, sessionToken) => {
    state.sessionToken = sessionToken
  },
  // 存放已经报名行程的人
  member: (state, member) => {
    state.member = member
  }
}

export default mutations
