export default {
  getCurrentUser: state => state.currentUser,
  getVersion: state => state.version,
  getRoleSet: state => state.currentUser.roleSet,
  getEnroll: state => state.Enroll
  // isRoot: state => state.currentUser.roleSet.indexOf('root')
}
