import request from "@/utils/request";

const shoppingApi = {
    queryByPage(params) {
        return request({
            url: "shopping/queryByPage",
            params: params
        })
    },
    getFlowerByUserId(params) {
        return request({
            url: `shopping/getFlower/${params}`,
        })
    },
    update(data) {
        return request({
            url: "shopping/update",
            method: 'post',
            data: data
        })
    },
    delete(data) {
        return request({
            url: "shopping/delete",
            method: 'post',
            data: data
        })
    },
    insert(data) {
        return request({
            url: "shopping/insert",
            method: 'post',
            data: data
        })
    }
}

export default shoppingApi;