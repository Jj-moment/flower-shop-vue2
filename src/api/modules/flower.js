import request from "@/utils/request";

const flowerApi = {
    queryById(params) {
        return request({
            url: `flower/${params}`
        })
    },
    queryByPage(params) {
        return request({
            url: "flower/queryByPage",
            method: 'get',
            params: params
        })
    },
    update(data) {
        return request({
            url: "flower/update",
            method: 'post',
            data: data
        })
    },
    delete(data) {
        return request({
            url: "flower/delete",
            method: 'post',
            data: data
        })
    },
    insert(data) {
        return request({
            url: "flower/insert",
            method: 'post',
            data: data
        })
    }
}

export default flowerApi;