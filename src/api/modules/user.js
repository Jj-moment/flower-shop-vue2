import request from "@/utils/request";

const userApi = {
    getCurrentUser(params){
        return request({
            url: "current",
            method: 'get',
            params: params
        })
    },
    queryByPage(params) {
        return request({
            url: "user/queryByPage",
            params: params
        })
    },
    queryById(params) {
        return request({
            url: `user/${params}`,
        })
    },
    update(data) {
        return request({
            url: "user/update",
            method: 'post',
            data: data
        })
    },
    delete(data) {
        return request({
            url: "user/delete",
            method: 'post',
            data: data
        })
    },
    insert(data) {
        return request({
            url: "user/insert",
            method: 'post',
            data: data
        })
    }
}

export default userApi;