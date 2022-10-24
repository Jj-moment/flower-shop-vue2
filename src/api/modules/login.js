import request from "@/utils/request";

const loginApi = {
    userLogin(data){
        return request({
            url: "user/login",
            method: 'post',
            data: data
        })
    },
    adminLogin(data){
        return request({
            url: "admin/login",
            method: 'post',
            data: data
        })
    },
    userRegister(data){
        return request({
            url: "user/register",
            method: 'post',
            data: data
        })
    },
    adminRegister(data){
        return request({
            url: "admin/register",
            method: 'post',
            data: data
        })
    },
    logout(data) {
        return request({
            url: "user/logout",
            method: 'post',
            data: data
        })
    },
    adminCurrent(params){
        return request({
            url: "admin/current",
            method: 'get',
            params: params
        })
    },
    userCurrent(params){
        return request({
            url: "user/current",
            method: 'get',
            params: params
        })
    }
}

export default loginApi;