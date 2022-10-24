import Vue from 'vue'
const vm = new Vue()
/**
 * element-ui confirm 二次封装
 * @param {Object} param
 * @returns {Object} Promise 点击了确认resolve()
 */
export function confirm(...param) {
    let params = param[0];
    /*默认参数*/
    let config = {
        tip: '提示',
        content: '你确定要执行此操作么吗？',
        btn: { confirm: '确定', cancel: '取消', },
        type: 'warning'
    }
    /*如果有参数传入并且长度大于0 替换原来的指定默认配置*/
    if (params && Object.keys(params).length) {
        for (let item in params) {
            config[item] = params[item]
        }
    }
    return new Promise((resolve) => {
        vm.$confirm(config.content, config.tip, {
            confirmButtonText: config.btn.confirm,
            cancelButtonText: config.btn.cancel,
            type: config.type,
            dangerouslyUseHTMLString: true
        }).then(() => {
            resolve()
        }).catch(() => {
            vm.$message({ type: 'info', message: '已取消' })
        })
    })
}
