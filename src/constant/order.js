/*支付方式*/
export const PAYMENT_METHOD = [
    {
        label: '未支付',
        value: 0,
    },
    {
        label: '支付宝',
        value: 1,
    },
    {
        label: '微信',
        value: 2,
    },
]
/*订单状态*/
export const ORDER_STATUS = [
    {
        label: '已关闭',
        value: 0,
        tag: 'danger'
    },
    {
        label: '已完成',
        value: 1,
        tag: 'success'
    },
    {
        label: '待付款',
        value: 2,
        tag: 'info'
    },
    {
        label: '待发货',
        value: 3,
        tag: 'warning'
    },
    {
        label: '已发货',
        value: 4,
        tag: 'success'
    },
    {
        label: '无效订单',
        value: 5,
        tag: 'danger'
    },
]
/*确认收货*/
export const CONFIRM_STATUS = [
    {
        label: '未确认',
        value: 0,
    },
    {
        label: '已确认',
        value: 1,
    },
]