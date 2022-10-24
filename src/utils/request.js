import axios from 'axios'
import cookies from "@/utils/cookies";
import {MessageBox} from "element-ui";

/*使用apifox中的mock功能*/
// const mockUrl = "http://127.0.0.1:4523/m1/1807234-0-default/";

const localUrl = 'http://localhost:8080/';

/*请求配置*/
const service = axios.create({
    baseURL: localUrl,
    timeout: 5000
})

/*请求拦截*/
service.interceptors.request.use(function (config) {
    /*是否需要添加token*/
    const isToken = (config.headers || {}).isToken === false;
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    let token = cookies.getToken();
    if (token && !isToken) {
        /*让每个请求携带自定义token*/
        config.headers['token'] = token;
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

/*响应拦截*/
service.interceptors.response.use(function (res) {
    /*未设置状态码则默认成功状态*/
    const code = res.data.code || 200;

    switch (code) {
        case 403:
            MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
            ).then(() => {
                location.href = '/';
            });
            break;
        // case 401:
        //     MessageBox.confirm('登录状态已过期', '系统提示', {
        //             confirmButtonText: '重新登录',
        //             cancelButtonText: '取消',
        //             type: 'warning'
        //         }
        //     ).then(() => {
        //         location.href = '/';
        //     });
        //     break;
        default:
            break;
    }
    return res.data
}, function (error) {
    console.log('error', error.status)
    return Promise.reject(error)
})

export default service;
