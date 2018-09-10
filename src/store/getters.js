export default {
  getCurrentUser: state => state.currentUser,
  getVersion: state => state.version,
  // getRoleSet: state => state.currentUser.roleSet,
  getEnroll: state => state.Enroll,
  getSelectConferenceMembersId: state => state.selectConferenceMembersId,
  getReplacePeople: state => state.replaceList,
  getReplaceList: state => state.replaceList,
  getUserInfo: state => state.userInfo,
  getnowConferenceId: state => state.nowConferenceId,
  getnowConferenceName: state => state.nowConferenceName,
  getJourneyInfo: state => state.journeyInfo,
  getHotelId: state => state.hotelId,
  getHotelName: state => state.hotelName,
  getAccomMemberList: state => state.accomMemberList,
  getAccomValue: state => state.accomValue,
  getRoom: state => state.room,
  getAccomSelect: state => state.accomSelect,
  getAccomPic: state => state.accomPic,
  getAddInfo: state => state.addInfo,
  getMembersId: state => state.membersId,
  getAddPeopleMembers: state => state.addPeopleMembers
  // isRoot: state => state.currentUser.roleSet.indexOf('root')
}
