import request from "@/utils/request";

const menuApi = {
    list(data){
        return request({
            url: "menu/list",
            method: 'get',
            params: data
        })
    },
    queryByPage(params) {
        return request({
            url: "menu/queryByPage",
            method: 'get',
            params: params
        })
    },
    update(data) {
        return request({
            url: "menu/update",
            method: 'post',
            data: data
        })
    },
    delete(data) {
        return request({
            url: "menu/delete",
            method: 'post',
            data: data
        })
    },
    insert(data) {
        return request({
            url: "menu/insert",
            method: 'post',
            data: data
        })
    }
}

export default menuApi;