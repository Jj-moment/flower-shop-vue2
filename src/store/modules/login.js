import loginApi from '@/api/modules/login'
import cookies from '@/utils/cookies'
import {SUCCESS_CODE} from "@/constant/code";

const login = {
    state: {
        token: cookies.getToken(),
        name: '',
        avatar: '',
        roles: [],
        permissions: []
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_PERMISSIONS: (state, permissions) => {
            state.permissions = permissions
        }
    },
    actions: {
        /*登录*/
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                loginApi.adminLogin(userInfo).then(res => {
                    if(res.code === SUCCESS_CODE){
                        cookies.setToken(res.data)
                        commit('SET_TOKEN', res.data)
                    }
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        /*获取用户信息*/
        GetInfo({ commit }) {
            return new Promise((resolve, reject) => {
                loginApi.adminCurrent().then(res => {
                    if (res.code === SUCCESS_CODE) {
                        const user = res.data;
                        const avatar = (user.avatar === "" || user.avatar === null) ? require("@/assets/profile.png") : user.avatar;
                        if (user.role) {
                            commit('SET_ROLES', user.role)
                        } else {
                            commit('SET_ROLES', ['ROLE_DEFAULT'])
                        }
                        /*设置用户名*/
                        commit('SET_NAME', user.username)
                        /*设置头像*/
                        commit('SET_AVATAR', avatar)
                    }
                    resolve(res);
                }).catch(error => {
                    reject(error)
                })
            })
        },
        /*退出系统*/
        Logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                loginApi.logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    commit('SET_PERMISSIONS', [])
                    cookies.removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                cookies.removeToken()
                resolve()
            })
        }
    }
}

export default login
