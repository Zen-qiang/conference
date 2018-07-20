export default {
  getCurrentUser: state => state.currentUser,
  getVersion: state => state.version,
  getRoleSet: state => state.currentUser.roleSet,
  getEnroll: state => state.Enroll,
  getSelectConferenceMembersId: state => state.selectConferenceMembersId
  // isRoot: state => state.currentUser.roleSet.indexOf('root')
}
