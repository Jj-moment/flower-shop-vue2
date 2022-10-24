/*全局过滤器*/
import {GENDER, NEW_STATUS, PUBLISH_STATUS, RECOMMEND_STATUS, ROLE, STATUS, VERIFY_STATUS} from "@/constant/user";
import {CONFIRM_STATUS, ORDER_STATUS, PAYMENT_METHOD} from "@/constant/order";

/*性别过滤*/
const genderFilter =  (data) => {
    let label = "";
    GENDER.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}
/*性别过滤*/
const statusFilter =  (data) => {
    let label = "";
    STATUS.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}
/*角色过滤*/
const roleFilter =  (data) => {
    let label = "";
    ROLE.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}
/*上架状态过滤*/
const publishStatusFilter =  (data) => {
    let label = "";
    PUBLISH_STATUS.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}
/*是否新品过滤*/
const newStatusFilter =  (data) => {
    let label = "";
    NEW_STATUS.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}
/*是否推荐过滤*/
const recommendStatusFilter =  (data) => {
    let label = "";
    RECOMMEND_STATUS.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}
/*审核状态过滤*/
const verifyStatusFilter =  (data) => {
    let label = "";
    VERIFY_STATUS.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}
/*支付方式过滤*/
const payMethodFilter =  (data) => {
    let label = "";
    PAYMENT_METHOD.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}
/*订单状态过滤*/
const orderStatusFilter =  (data) => {
    let label = "";
    ORDER_STATUS.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}
/*确认收货过滤*/
const confirmStatusFilter =  (data) => {
    let label = "";
    CONFIRM_STATUS.forEach(item => {
        if (item.value === data) {
            label = item.label;
        }
    })
    return label;
}

const toArrayFilter = (data) => {
    console.log(data)
}

export default {
    genderFilter,
    statusFilter,
    roleFilter,
    payMethodFilter,
    orderStatusFilter,
    confirmStatusFilter,
    publishStatusFilter,
    newStatusFilter,
    recommendStatusFilter,
    verifyStatusFilter,
    toArrayFilter
}