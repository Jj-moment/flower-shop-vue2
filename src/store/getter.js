const getters = {
    token: state => state.login.token,
    avatar: state => state.login.avatar,
    name: state => state.login.name,
    roles: state => state.login.roles,
    permissions: state => state.login.permissions,
}
export default getters