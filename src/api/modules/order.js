import request from "@/utils/request";

const orderApi = {
    queryByPage(params) {
        return request({
            url: "order/queryByPage",
            method: 'get',
            params: params
        })
    },
    update(data) {
        return request({
            url: "order/update",
            method: 'post',
            data: data
        })
    },
    delete(data) {
        return request({
            url: "order/delete",
            method: 'post',
            data: data
        })
    },
    insert(data) {
        return request({
            url: "order/insert",
            method: 'post',
            data: data
        })
    },
    queryByNum(params) {
        return request({
            url: `order/${params}`,
        })
    },
    queryUserOrder(params) {
        return request({
            url: `order/userOrder/${params}`,
        })
    },
}

export default orderApi;