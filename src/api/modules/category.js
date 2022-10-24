import request from "@/utils/request";

const categoryApi = {
    queryByPage(params) {
        return request({
            url: "category/queryByPage",
            method: 'get',
            params: params
        })
    },
    update(data) {
        return request({
            url: "category/update",
            method: 'post',
            data: data
        })
    },
    delete(data) {
        return request({
            url: "category/delete",
            method: 'post',
            data: data
        })
    },
    insert(data) {
        return request({
            url: "category/insert",
            method: 'post',
            data: data
        })
    }
}

export default categoryApi;