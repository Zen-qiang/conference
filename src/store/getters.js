export default {
  getCurrentUser: state => state.currentUser,
  getVersion: state => state.version,
  getRoleSet: state => state.currentUser.roleSet,
  getEnroll: state => state.Enroll,
  getSelectConferenceMembersId: state => state.selectConferenceMembersId,
  getReplacePeople: state => state.replaceList,
  getReplaceList: state => state.replaceList,
  getUserInfo: state => state.userInfo,
  getnowConferenceId: state => state.nowConferenceId,
  getJourneyInfo: state => state.journeyInfo
  // isRoot: state => state.currentUser.roleSet.indexOf('root')
}
