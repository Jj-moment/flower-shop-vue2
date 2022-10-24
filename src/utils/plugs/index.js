import message from "@/utils/plugs/message";

export default {
    install(Vue) {
        // 模态框对象
        Vue.prototype.$modal = message
    }
}
