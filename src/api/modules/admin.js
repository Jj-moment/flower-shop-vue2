import request from "@/utils/request";

const adminApi = {
    queryByPage(params) {
        return request({
            url: "admin/queryByPage",
            method: 'get',
            params: params
        })
    },
    queryById(params) {
        return request({
            url: `admin/${params}`,
        })
    },
    update(data) {
        return request({
            url: "admin/update",
            method: 'post',
            data: data
        })
    },
    delete(data) {
        return request({
            url: "admin/delete",
            method: 'post',
            data: data
        })
    },
    insert(data) {
        return request({
            url: "admin/insert",
            method: 'post',
            data: data
        })
    },
    updateCurrent(data) {
        return request({
            url: "admin/updateCurrent",
            method: 'post',
            data: data
        })
    },
    editPassword(data) {
        return request({
            url: "admin/editPassword",
            method: 'post',
            data: data
        })
    },
}

export default adminApi;